import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import authHeader from '../services/authHeader';

function ViewEvent() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formStatus, setFormStatus] = useState(''); // "idle", "submitting", "success", "error"

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const id = eventId.replace(':', '');
        const response = await axios.get(`http://localhost:4000/api/event/${id}`);
        console.log(response.data.event);
        setEvent(response.data.event);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load the event.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  const onSubmit = async (data) => {
    try {
      setFormStatus('submitting');
      setError('');

      // Step 1: Create a new Design
      const designResponse = await axios.post('/api/designs', data, {
        headers: {
          ...authHeader(),
        },
      });

      const designId = designResponse.data?.design._id;

      const id = eventId.replace(':', '');

      // Step 2: Update the event with the new design
      await axios.patch(`/api/event/${id}/addDesign`, { designId });

      setFormStatus('success');
      reset();
    } catch (err) {
      setFormStatus('error');
      setError(err.response?.data?.message || 'Failed to add design to the event.');
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error && !formStatus) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="container mt-5">
      <h2>{event.title}</h2>
      <p>
        <strong>Description:</strong> {event.description}
      </p>
      <p>
        <strong>Date:</strong>{' '}
        {new Date(event.eventDate).toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })}
      </p>

      <hr />

      <h3>Designs</h3>
      {event.designs.length === 0 ? (
        <p>No designs added yet.</p>
      ) : (
        <div className="row">
          {event.designs.map((design) => (
            <div className="col-md-4" key={design._id}>
              <div className="card mb-3">
                <img src={design.imageUrl} className="card-img-top" alt={design.title} />
                <div className="card-body">
                  <h5 className="card-title">{design.title}</h5>
                  <p className="card-text">
                    <strong>Status:</strong> {design.status}
                  </p>
                  <p className="card-text">
                    <strong>Selected Count:</strong> {design.selectedCount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <hr />

      <h3>Add Design to Event</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Design Title
          </label>
          <input
            type="text"
            id="title"
            className={`form-control ${errors.title ? 'is-invalid' : ''}`}
            {...register('title', { required: 'Title is required' })}
          />
          {errors.title && <div className="invalid-feedback">{errors.title.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">
            Image URL
          </label>
          <input
            type="url"
            id="imageUrl"
            className={`form-control ${errors.imageUrl ? 'is-invalid' : ''}`}
            {...register('imageUrl', { required: 'Image URL is required' })}
          />
          {errors.imageUrl && <div className="invalid-feedback">{errors.imageUrl.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Add Design'}
        </button>
      </form>
      {formStatus === 'success' && <div className="alert alert-success mt-3">Design added successfully!</div>}
      {formStatus === 'error' && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
}

export default ViewEvent;
