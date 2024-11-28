import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
    /*
    <div className="mb-5">
      {/* Background Section with Animation }
      <div
        className="d-flex align-items-center justify-content-center position-relative text-center text-white"
        style={{
          backgroundImage: 'url("https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/multiracial-business-team-having-a-meeting-in-the-office.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh',
        }}
      >
        {/* Overlay }
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        ></div>
              
        {/* button added *}
          <div cla>
          <button
              className="btn btn-lg btn-outline-primary rounded-circle"
              style={{ width: '48px', height: '48px' }}
              data-aos="zoom-in"
              data-aos-delay="300"
              onClick={openModal} // Open modal on click
            >
              <i className="bi bi-play-fill"></i>
            </button>
          </div>
        {/* Content with Animation *}
        <div className="position-relative z-index-1 container">
          <h2
            className="fw-bold"
            style={{ fontSize: '2.5rem' }}
            data-aos="fade-up" // Heading animation
          >
            Social Media Mastery <br /> for Modern Brands.
          </h2>
          <p
            className="lead mt-3"
            style={{ maxWidth: '600px', margin: '0 auto' }}
            data-aos="fade-up"
            data-aos-delay="200" // Delay for paragraph animation
          >
            Ultrices quam mattis posuere porttitor tellus rhoncus tristique. Primis aliquam dignissim interdum vel suscipit sodales.
          </p>
          <button
            className="btn btn-primary mt-4"
            data-aos="fade-up"
            data-aos-delay="400" // Delay for button animation
          >
            Discover more
          </button>
        </div>
*/
<div className="mb-5">
  {/* Background Section with Animation */}
  <div
    className="mt-6 align-items-center justify-content-center position-relative text-center text-white"
    style={{
      backgroundImage:
        'url("https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/multiracial-business-team-having-a-meeting-in-the-office.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "60vh",
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
        {/*}
        <i 
          className="bi bi-play-circle" 
          style={{ fontSize: "55px", marginTop: "2rem", cursor: "pointer", color: "blue" }} 
          data-aos="zoom-in" 
          data-aos-delay="300" 
          onClick={openModal}>
        </i>
          */}
          <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="60" 
              height="60" 
              viewBox="0 0 16 16" 
              style={{ marginTop: "2rem", cursor: "pointer" }} 
              onClick={openModal}
            >
              {/* circle */}
              <circle cx="8" cy="8" r="7" fill="white" /> 
              {/* traingle inside the circle */}
              <polygon points="6.5,5 11,8 6.5,11" fill="blue" />
            </svg>



      
    </div>

    {/* Content with Animation */}
    <div className="position-relative z-index-1 container">
      <h2
        className="fw-bold"
        style={{ fontSize: "2.5rem" }}
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
 


        {/* Play Button with Animation */}
        {/* <div
          className="position-absolute top-50 start-50 translate-middle bg-white rounded-circle"
          style={{ width: '60px', height: '60px' }}
          data-aos="zoom-in"
          data-aos-delay="600" // Delay for play button
        >
          <i className="bi bi-play-fill text-primary" style={{ fontSize: '2rem', lineHeight: '60px' }}></i>
        </div> */}
      </div>

      {/* Statistics Section with Overlay and Animation */}
      <div className="container position-relative" style={{ marginTop: '-5%' }}>
        <div
          className="row text-center bg-white shadow-lg py-4 rounded-3"
          data-aos="flip-left" // Animation for the statistics section
          data-aos-delay="100"
        >
          <div className="col-md-3 col-6 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="600">
            <h3 className="fw-bold" style={{ color: '#6c63ff' }}>41K+</h3>
            <p className="text-muted">Happy Client</p>
          </div>
          <div className="col-md-3 col-6 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="700">
            <h3 className="fw-bold" style={{ color: '#6c63ff' }}>76K+</h3>
            <p className="text-muted">Project Done</p>
          </div>
          <div className="col-md-3 col-6 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="800">
            <h3 className="fw-bold" style={{ color: '#6c63ff' }}>4.7</h3>
            <p className="text-muted">Client Ratings</p>
          </div>
          <div className="col-md-3 col-6" data-aos="fade-up" data-aos-delay="900">
            <h3 className="fw-bold" style={{ color: '#6c63ff' }}>15+</h3>
            <p className="text-muted">Years Experience</p>
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
