import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';

{/* <a href="https://ibb.co/hC3mFMt"><img src="https://i.ibb.co/vD0j4BK/QUIT-INDIA-3.jpg" alt="QUIT-INDIA-3" border="0"></a>
<a href="https://ibb.co/vdfnwFh"><img src="https://i.ibb.co/YdJsRCX/nationalsportsday.jpg" alt="nationalsportsday" border="0"></a>
<a href="https://ibb.co/QDhVZ1D"><img src="https://i.ibb.co/Z2vr3k2/ganesh.jpg" alt="ganesh" border="0"></a>
<a href="https://ibb.co/hZQnMDs"><img src="https://i.ibb.co/LJjqPnS/apj.jpg" alt="apj" border="0"></a>
<a href="https://ibb.co/xhZVkrx"><img src="https://i.ibb.co/2qJX9pG/rhino.jpg" alt="rhino" border="0"></a>
<a href="https://ibb.co/phn3KTb"><img src="https://i.ibb.co/fDQCNWq/TEACHERSDAY.jpg" alt="TEACHERSDAY" border="0"></a> */}

// Mock event data
const mockEventData = {
  "2024-11-30": [
    {
      title: "International Day for Tolerance",
      description: "Promoting tolerance and understanding globally.",
      image: "https://images.unsplash.com/photo-1529524987368-af489318987c?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Cats Day 2024",
      description: "Explore the latest advancements in technology.",
      image: "https://images.unsplash.com/photo-1709398668435-bc1222eb405e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ganesh Festival 2024",
      description: "Explore the latest advancements in technology.",
      image: "https://i.ibb.co/Z2vr3k2/ganesh.jpg",
    },
  ],
  "2024-12-01": [
    {
      title: "National Sports Day",
      description: "Explore the latest advancements in technology.",
      image: "https://i.ibb.co/YdJsRCX/nationalsportsday.jpg",
    },
    {
      title: "Teachers Day",
      description: "Though youtube is my teacher, I still remember my other teachers maybe.",
      image: "https://i.ibb.co/fDQCNWq/TEACHERSDAY.jpg",
    },
  ],
  "2024-11-18": [
    {
      title: "Food Festival",
      description: "Enjoy cuisines from around the world.",
      image: "https://via.placeholder.com/300x200?text=Food+Festival",
    },
  ],
  "2024-11-20": [
    {
      title: "Kartar Singh Sarabha Martyrdom Day",
      description: "Remembering the sacrifice of Kartar Singh Sarabha.",
      image: "https://via.placeholder.com/300x200?text=Martyrdom",
    },
  ],
};


// Simulate an API call
const fetchMockEvents = async (date) => {
  const formattedDate = new Date(date).toISOString().split("T")[0];
  const events = mockEventData[formattedDate] || [];
  return { date: formattedDate, events };
};

const SelectCreative = () => {

  const navigate = useNavigate();

  const handleEventClick = (event) => {
    navigate(
      "/creative-preview",
      {
        state: {
          title: event.title,
          description: event.description,
          image: event.image,
        },
        replace: false, // Ensures this navigation replaces the current entry in the history stack
      }
    );
  };


  const [startDate, setStartDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventDetails, setEventDetails] = useState([]);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Generate date range for buttons
  const generateDateRange = (startDate) => {
    const dateRange = [];
    for (let i = 0; i < 10; i++) {
      const nextDate = new Date(startDate);
      nextDate.setDate(startDate.getDate() + i);
      dateRange.push(nextDate.toISOString().split("T")[0]); // Format: YYYY-MM-DD
    }
    return dateRange;
  };

  // Fetch mock events for a specific date
  const fetchEvents = async (date) => {
    setLoading(true);
    try {
      const { events } = await fetchMockEvents(date);
      setEventDetails(events || []);
    } catch (error) {
      console.error("Error fetching events:", error);
      setEventDetails([]);
    } finally {
      setLoading(false);
    }
  };

  // Initialize dates and select the first date
  useEffect(() => {
    const newDates = generateDateRange(startDate);
    setDates(newDates);
    if (newDates.length > 0) {
      setSelectedDate(newDates[0]);
      fetchEvents(newDates[0]);
    }
  }, [startDate]);

  // Handle Date Picker Change
  const handleDateChange = (date) => {
    setStartDate(date);
    const newDates = generateDateRange(date);
    setDates(newDates);
    setSelectedDate(null);
    setEventDetails([]);
    setIsOverlayVisible(false);
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Festival Calendar 2024</h1>

      {/* Date Picker Trigger */}
      <div className="d-flex justify-content-center justify-content-md-end align-items-center mb-4">
        <button
          className="btn btn-dark d-flex align-items-center"
          onClick={() => setIsOverlayVisible(true)}
        >
          <i className="bi bi-calendar3 me-2"></i>
          Select Specific Date
        </button>
      </div>

      {/* Full-Page Overlay */}
      {isOverlayVisible && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
          style={{ zIndex: 1050 }}
        >
          <div className="bg-white p-4 rounded">
            <h5 className="mb-3">Select a Date</h5>
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              inline
            />
            <div className="mt-3 text-end">
              <button
                className="btn btn-secondary"
                onClick={() => setIsOverlayVisible(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scrollable Date Buttons */}
      <div
        className="mb-4"
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          gap: "0.5rem",
          paddingBottom: "1rem",
          scrollbarWidth: "thin",
          scrollSnapType: "x mandatory",
        }}
      >
        {dates.map((date, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedDate(date);
              fetchEvents(date);
            }}
            className={`mx-2 btn ${
              selectedDate === date ? "btn-primary" : "btn-outline-secondary"
            } px-4`}
            style={{
              flex: "0 0 auto",
              scrollSnapAlign: "center",
            }}
          >
            {new Date(date).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
            })}
          </button>
        ))}
      </div>

      {/* Event Cards */}
      <div className="row">
        {loading ? (
          <div className="col-12 text-center">
            <p className="text-muted">Loading events...</p>
          </div>
        ) : eventDetails.length > 0 ? (
          eventDetails.map((event, idx) => (
            <div key={idx} className="col-md-4 col-sm-6 mb-4">
              <div className="card shadow-sm h-100 border-0"
               onClick={() => handleEventClick(event)} // Navigate on click
               style={{ cursor: 'pointer' }}>
                <img
                  src={event.image}
                  className="card-img-top"
                  alt={event.title}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column  text-start">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text text-muted">{event.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p className="text-muted">No events available for the selected date.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectCreative;
