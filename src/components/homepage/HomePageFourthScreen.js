import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePageFourthScreen = () => {
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
        className="d-flex align-items-center justify-content-center position-relative text-center text-white"
        style={{
          backgroundImage: 'url("https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/multiracial-business-team-having-a-meeting-in-the-office.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh',
        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        ></div>

        {/* Content with Animation */}
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
    </div>
  );
};

export default HomePageFourthScreen;
