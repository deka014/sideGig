import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AllEvents = () => {

  const dummyEvents = [
    {
      "_id": "648df1b2a6789345fc",
      "title": "Latest Event",
      "description": "This is the latest event.",
      "eventDate": "2024-12-31T00:00:00.000Z",
      "createdAt": "2024-12-10T00:00:00.000Z"
    },
    ...Array.from({length: 14},(_,i) => ({
        _id: `648df1b2a6789345fa${ i}`,
        title: "Old Event",
        description: "This is an older event.",
        eventDate: "2024-11-30T00:00:00.000Z",
        createdAt: "2024-12-05T00:00:00.000Z"
    }) )
  ]

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/events`);
        setEvents(response.data.events);
      } catch (err) {
        // setEvents(dummyEvents)
        setError(err.response?.data?.message || 'Failed to load events.');
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const handleViewEvent = (eventId) => {
    navigate(`/delivery/view-event/:${eventId}`);
  };

  return (
    <div className="container mt-5">
      <h2 className='mb-4'>All Events</h2>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : events.length === 0 ? (
        <div className="alert alert-info">No events found!</div>
      ) : (
        <div className="row">
          {events.map((event) => (
            <div className="col-md-4 col-sm-6 mb-4" key={event._id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">{event.description}</p>
                  <p className="card-text">{event.available?  'Available' : 'Unavailable'}</p>
                  <p className="card-text">Total Designs : {event.designs.length}</p>
                  <p className="card-text"><strong>Date:</strong> {new Date(event.eventDate).toLocaleDateString()}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleViewEvent(event._id)}
                  >
                    View Event
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllEvents;
