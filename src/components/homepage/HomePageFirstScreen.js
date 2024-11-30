import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../css/Ripple.css';

function HomePageFirstScreen() {
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

  //button icon
  const iconStyles = {
    content: "'\\f4cd'", // Ensures correct icon (adjust if needed)
    display: "inline-block",
    width: "20px", // Width as seen in the image
    //height: "23px", // Height as seen in the image
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center row position-relative"
      style={{
        // minHeight: '50vh',   
        background: 'linear-gradient(to bottom, #8ec5fc, #e0c3fc, #f6eaff)',   //change gradient from #ffffff -> #f6eaff
        borderRadius: '30px',   //rounded-corners
        paddingLeft: '40px',
        paddingRight: '40px',
        paddingTop: '40px',
        borderImage: 'linear-gradient(to bottom, #8ec5fc, #e0c3fc, #f6eaff) 1'  
      }}
    >
      {/* Left Section with AOS Animation */}
      <div
        className="col-sm-6 text-center text-lg-start ps-lg-5 mb-5"
        data-aos="flip-right"
        style={{ maxWidth: '500px' }}
      >
        <h1
          className="fw-bold text-start responsive-title"
          style={{
            fontSize: '3rem',
            lineHeight: '1.2',
            fontFamily: "'Lexend', sans-serif",
          }}
        >
          Creative Content, <br />   {/* Tagline changed */}
          Budget-Friendly Solutions! <br />
        </h1>
        <p className="lead text-start text-dark responsive-paragraph" style={{ marginTop: '20px' }}>
          Boost Your Brand with Tailored Content That Fits Your Budget!
        </p>
        <div className="d-flex mt-4">  
          <a
            href="/get-started"
            className="btn btn-lg btn-primary me-3"
            style={{ borderRadius: '20px' }}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Get Started
          </a>
          
          <button
            className="btn btn-lg btn-outline-primary rounded-circle ripple"
            style={{ width: '50px', height: '50px' }}
            data-aos="zoom-in"
            data-aos-delay="300"
            onClick={openModal} // Open modal on click
          >
              <i className="bi bi-play-fill"
                style={iconStyles}>
              </i>
          </button>
        </div>
      </div>

      {/* Right Section with Image Animation */}
      <div
        className="col-sm-6 d-flex justify-content-center"
        data-aos="fade-left"
      >
        <img
          src="https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/img_1.png"
          alt="sociabiz"
          style={{ width: '16rem' }}
        />
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
}

export default HomePageFirstScreen;
