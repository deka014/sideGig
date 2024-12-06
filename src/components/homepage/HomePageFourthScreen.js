import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../../css/Ripple.css';

const HomePageFourthScreen = () => {

  //youtube modal function added
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handler for clicking outside the modal content
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Trigger animations only once
    });
  }, []);

  return (

<div className="mb-5">
  {/* Background Section with Animation */}
  <div
    className="mt-6 align-items-center justify-content-center position-relative text-center text-white"
    style={{
      backgroundImage:
        'url("https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/multiracial-business-team-having-a-meeting-in-the-office.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
        //height issue fixed
        paddingTop: "5%", 
        height: "auto",
    }}
  >
    {/* Overlay */}
    <div
      className="position-absolute top-0 start-0 w-100 h-100"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    ></div>

    {/* Button */}
    <div
      className="position-relative z-index-1 d-flex justify-content-center align-items-center"
      style={{ marginBottom: "1.5rem", }} // Adds spacing below the button
    >
      {/* youtube Button link*/}

    <button
      className="btn btn-lg btn-outline-primary rounded-circle ripple2"
      onClick={openModal}
      style={{
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
      }}
    >  
      {/* Ripple Effect */}
      <div className="play-ripple">        
      </div>
    </button>    
  </div>

    {/* Content with Animation */}
    <div className="position-relative z-index-1 container">
        <h2
          className="fw-bold"
          style={{ fontSize: "2rem",  }}  // margin issue solved
          data-aos="fade-up" // Heading animation
        >
          Social Media Mastery <br /> for Modern Brands.
        </h2>
        <p
          className="lead mt-3"
          style={{ maxWidth: "600px", margin: "0 auto" }}
          data-aos="fade-up"
          data-aos-delay="200" // Delay for paragraph animation
        >
          Ultrices quam mattis posuere porttitor tellus rhoncus tristique. Primis
          aliquam dignissim interdum vel suscipit sodales.
        </p>
        <button
          className="btn btn-primary mt-4"
          data-aos="fade-up"
          data-aos-delay="400" // Delay for button animation
        >
          Discover more
        </button>
      </div>
    </div>

      {/* Statistics Section with Overlay and Animation */}
      <div className="container position-relative" style={{ marginTop: '0.25rem' }}>
        <div
          className="row text-center bg-white shadow-lg py-4 rounded-3"
          data-aos="flip-left" // Animation for the statistics section
          data-aos-delay="100"
        >
        {/* font size inc. */}
          <div className="col-md-3 col-6 mb-4 mb-md-0"  data-aos="fade-up" data-aos-delay="600">
            <h3 className="fw-bold" style={{ color: '#6c63ff', fontSize: "2.5rem", fontFamily: 'sans-serif', marginBottom: "0rem" }}>41K+</h3>
            <p className="text" style={{ fontWeight: 'bold', fontSize: "1.25rem"}}>Happy Client</p>
          </div>
          <div className="col-md-3 col-6 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="600">
          <h3 className="fw-bold" style={{ color: '#6c63ff', fontSize: "2.5rem", fontFamily: 'sans-serif', marginBottom: "0rem" }}>76K+</h3>
          <p className="text" style={{ fontWeight: 'bold', fontSize: "1.25rem" }}>Project Done</p>
          </div>
          <div className="col-md-3 col-6 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="600">
            <h3 className="fw-bold" style={{ color: '#6c63ff', fontSize: "2.5rem", fontFamily: 'sans-serif', marginBottom: "0rem" }}>4.7</h3>
            <p className="text" style={{ fontWeight: 'bold', fontSize: "1.25rem" }}>Client Ratings</p>
          </div>
          <div className="col-md-3 col-6 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="600">
            <h3 className="fw-bold" style={{ color: '#6c63ff', fontSize: "2.5rem", fontFamily: 'sans-serif', marginBottom: "0rem" }}>15+</h3>
            <p className="text" style={{ fontWeight: 'bold', fontSize: "1.25rem" }}>Years Experience</p>
          </div>
        </div>
      </div>

        {/* Modal for YouTube Video */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={handleOverlayClick} // Close modal on outside click
        >
          <div
            style={{
              position: 'relative',
              background: 'white',
              padding: '20px',
              borderRadius: '8px',
              width: '90%',
              maxWidth: '700px',
              textAlign: 'center',
            }}
            onClick={(e) => e.stopPropagation()} // Prevent close on content click
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                fontSize: '24px',
                color: '#333',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              &times;
            </button>
            <div className="ratio ratio-16x9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=UAbwKrjnTCSnwwaH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
    </div>
    )}
    </div>
  );
  
};

export default HomePageFourthScreen;
