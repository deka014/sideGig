import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomePageFirstScreen() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div
      className="d-flex align-items-center justify-content-center row position-relative"
      style={{
        minHeight: '50vh',
        background: 'linear-gradient(to bottom, #8ec5fc, #e0c3fc, #ffffff)',
        borderTopLeftRadius: '60px',
        borderTopRightRadius: '60px',
        padding: '40px',
      }}
    >
      {/* Left Section with AOS Animation */}
      <div
        className="col-lg-6 text-center text-lg-start ps-lg-5 mb-5"
        data-aos="flip-right" // Apply AOS animation
        style={{maxWidth: '500px'}}
      
      >
        <h1
          className="fw-bold responsive-title"
          style={{
            fontSize: '3rem',
            lineHeight: '1.2',
            fontFamily: "'Lexend', sans-serif",
          }}
        >
          Creative ideas <br />
          that will help <br />
          your brand soar. <br />
        </h1>
        <p className="lead text-dark responsive-paragraph" style={{ marginTop: '20px' }}>
          Erat euismod sollicitudin morbi maecenas fermentum pellentesque justo quam egestas hac molestie
        </p>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4">
          <a
            href="/get-started"
            className="btn btn-lg btn-primary me-3"
            style={{ borderRadius: '20px' }}
            data-aos="zoom-in" // Apply AOS animation
            data-aos-delay="200" // Add delay for staggered effect
          >
            Get Started
          </a>
          <button
            className="btn btn-lg btn-outline-primary rounded-circle"
            style={{ width: '48px', height: '48px' }}
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <i className="bi bi-play-fill"></i>
          </button>
        </div>
      </div>

      {/* Right Section with Image Animation */}
      <div
        className="col-lg-6 d-flex justify-content-center"
        data-aos="fade-left" // Apply AOS animation
      >
        <img
          src="https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/img_1.png"
          alt="sociabiz"
          style={{ width: '60%' }}
        />
      </div>
    </div>
  );
}

export default HomePageFirstScreen;
