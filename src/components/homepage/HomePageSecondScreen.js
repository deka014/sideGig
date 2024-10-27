import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePageSecondScreen = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animates only once when in view
    });
  }, []);

  return (
    <div
      className="d-flex align-items-center justify-content-center row position-relative mb-5"
      style={{
        // marginBottom: '100px',
      }}
    >
      {/* Left section: Single phone image with animation */}
      <div
        className="col-sm-6 d-flex justify-content-center"
        data-aos="fade-right" // Animation type
      >
        <img
          src="https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/img_3_.png"
          alt="Phone"
          style={{
            width: '80%',
            maxWidth: '400px',
            transform: 'rotate(-5deg)',
          }}
        />
      </div>

      {/* Right section: Steps content with icons */}
      <div
        className="col-sm-6 text-start pe-md-5"
        data-aos="fade-left" // Animation type for text content
      >
        <h2 className="fw-bold text-center text-lg-start" style={{ fontSize: '2rem', marginBottom: '20px' }}>
          All Your Graphic Design Needs, Covered.
        </h2>
        <p className="lead text-muted text-center text-lg-start mb-5">
          Get a dedicated design team and a project manager for a flat monthly subscription fee.
        </p>

        {/* Step 1: Subscribe */}
        <div className="d-flex align-items-start mb-4" >
          <div
            style={{
              backgroundColor: '#e9f7ef',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
            }}
          >
            <i className="bi bi-check2-circle" style={{ fontSize: '1.5rem', color: '#28a745' }}></i>
          </div>
          <div>
            <h5 className="fw-bold">1. Subscribe</h5>
            <p className="text-muted mb-0">
              Pick a plan and subscribe. Meet your design team and work together on a first-name basis.
            </p>
          </div>
        </div>

        {/* Step 2: Request */}
        <div className="d-flex align-items-start mb-4" >
          <div
            style={{
              backgroundColor: '#ffefdb',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
            }}
          >
            <i className="bi bi-file-earmark-text" style={{ fontSize: '1.5rem', color: '#fd7e14' }}></i>
          </div>
          <div>
            <h5 className="fw-bold">2. Request</h5>
            <p className="text-muted mb-0">
              Make your design requests within our design portal. Add as many design as you’d like.
            </p>
          </div>
        </div>

        {/* Step 3: Download */}
        <div className="d-flex align-items-start">
          <div
            style={{
              backgroundColor: '#e1ecf4',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
            }}
          >
            <i className="bi bi-cloud-download" style={{ fontSize: '1.5rem', color: '#007bff' }}></i>
          </div>
          <div>
            <h5 className="fw-bold">3. Download</h5>
            <p className="text-muted mb-0">
              Download and discuss your projects directly in our design portal. Collaborate on Slack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSecondScreen;
