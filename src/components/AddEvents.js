import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEvents = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [serverError, setServerError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setServerError('');
      console.log('data to submit',data)
      data.designs = [];
      const response = await axios.post('/api/events', data);
      console.log(response)
      setFormSubmitted(true)
    } catch (error) {
      console.log(error)
      setServerError(error.response?.data?.message || 'Failed to create the event.');
    }
  };

  function handleInputChange() {
    setFormSubmitted(false)
  }
  return (
    <div className="container mt-5">
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Event Title</label>
          <input
            type="text"
            id="title"
            className={`form-control ${errors.title ? 'is-invalid' : ''}`}
            {...register('title', { required: 'Title is required' })}
            onChange={handleInputChange}
          />
          {errors.title && <div className="invalid-feedback">{errors.title.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Event Description</label>
          <textarea
            id="description"
            className={`form-control ${errors.description ? 'is-invalid' : ''}`}
            {...register('description', { required: 'Description is required' })}
            onChange={handleInputChange}
          ></textarea>
          {errors.description && <div className="invalid-feedback">{errors.description.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="eventDate" className="form-label">Event Date</label>
          <input
            type="date"
            id="eventDate"
            className={`form-control ${errors.eventDate ? 'is-invalid' : ''}`}
            {...register('eventDate', { required: 'Event Date is required' })}
            onChange={handleInputChange}
          />
          {errors.eventDate && <div className="invalid-feedback">{errors.eventDate.message}</div>}
        </div>

        {/* <div className="mb-3">
          <label htmlFor="designs" className="form-label">Designs</label>
          <input
            type="text"
            id="designs"
            className={`form-control ${errors.designs ? 'is-invalid' : ''}`}
            {...register('designs')}
            onChange={handleInputChange}
            placeholder="Enter Design IDs (comma separated)"
          />
          {errors.designs && <div className="invalid-feedback">{errors.designs.message}</div>}
          <small className="form-text text-muted">You can add multiple Design IDs separated by commas.</small>
        </div> */}

        {serverError && <div className="alert alert-danger">{serverError}</div>}
        {formSubmitted && <div className="alert alert-success">Event successfully submitted!</div>}
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default AddEvents;
