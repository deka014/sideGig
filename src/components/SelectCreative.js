import React, { useState ,useEffect} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


// Helper function to generate dates and assign dummy events
const generateDatesWithEvents = (startDate) => {
  const dates = [];
  const dummyEvents = {
    "Nov 16": [
      {
        title: "International Day for Tolerance",
        description: "Promoting tolerance and understanding globally.",
        image: "https://via.placeholder.com/300x200?text=Tolerance",
      },
    ],
    "Nov 17": [
      {
        title: "Technology Expo 2024",
        description: "Explore the latest advancements in technology.",
        image: "https://via.placeholder.com/300x200?text=Tech+Expo",
      },
    ],
    "Nov 18": [
      {
        title: "Food Festival",
        description: "Enjoy cuisines from around the world.",
        image: "https://via.placeholder.com/300x200?text=Food+Festival",
      },
    ],
    "Nov 20": [
      {
        title: "Kartar Singh Sarabha Martyrdom Day",
        description: "Remembering the sacrifice of Kartar Singh Sarabha.",
        image: "https://via.placeholder.com/300x200?text=Martyrdom",
      },
    ],
  };

  for (let i = 0; i < 10; i++) {
    const nextDate = new Date(startDate);
    nextDate.setDate(startDate.getDate() + i);
    const formattedDate = nextDate.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
    });
    dates.push({
      date: formattedDate,
      events: dummyEvents[formattedDate] || [],
    });
  }
  return dates;
};

const SelectCreative = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [dates, setDates] = useState(generateDatesWithEvents(new Date()));
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventDetails, setEventDetails] = useState([]);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);


  // Initialize dates and select the first date
  useEffect(() => {
    const newDates = generateDatesWithEvents(startDate);
    setDates(newDates);
    if (newDates.length > 0) {
      setSelectedDate(newDates[0].date);
      setEventDetails(newDates[0].events);
    }
  }, [startDate]);


  // Handle Date Picker Change
  const handleDateChange = (date) => {
    setStartDate(date);
    setDates(generateDatesWithEvents(date));
    setSelectedDate(null);
    setEventDetails([]);
    setIsOverlayVisible(false); // Close overlay on selection
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Festival Calendar 2024</h1>

      {/* Date Picker Trigger */}
      <div className="d-flex justify-content-center justify-content-md-end align-items-center mb-4">
        <button
          className="btn btn-dark d-flex align-items-center"
          onClick={() => setIsOverlayVisible(true)} // Show overlay
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
                onClick={() => setIsOverlayVisible(false)} // Close overlay
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
        {dates.map((d, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedDate(d.date);
              setEventDetails(dates.find((date) => date.date === d.date)?.events || []);
            }}
            className={`mx-2 btn ${
              selectedDate === d.date ? "btn-primary" : "btn-outline-secondary"
            } px-4`}
            style={{
              flex: "0 0 auto",
              scrollSnapAlign: "center",
            }}
          >
            {d.date}
          </button>
        ))}
      </div>

      {/* Event Cards */}
      <div className="row">
        {eventDetails.length > 0 ? (
          eventDetails.map((event, idx) => (
            <div key={idx} className="col-md-4 col-sm-6 mb-4">
              <div className="card shadow-sm h-100 border-0">
                <img
                  src={event.image}
                  className="card-img-top"
                  alt={event.title}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text text-muted">{event.description}</p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <a href="#" className="btn btn-outline-primary btn-sm float-end">
                    Learn More <i className="bi bi-arrow-right"></i>
                  </a>
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
