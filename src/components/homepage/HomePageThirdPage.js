import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePageThirdScreen = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true, // Animate only once on scroll
    });
  }, []);

  return (
    <div className="container pb-5">
      {/* Heading with Animation */}
      <h2
        className="text-center fw-bold mb-5"
        style={{ fontSize: '2rem' }}
        data-aos="fade-up" // Animation for heading
      >
        Our subscription Based Design Services
      </h2>
      {/* <p className="text-center mb-5 text-muted" style={{ maxWidth: '700px', margin: '0 auto' }}>
        Get a dedicated design team and project manager for a flat monthly subscription fee.
      </p> */}

      <div className="row text-center text-lg-start border-none">
        {/* Card 1 */}
        <div
          className="col-lg-4 col-md-12 mb-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            className="card h-100  p-4 rounded shadow-sm"
            style={{ backgroundColor: '#e0f7ef' }}
          >
            <div className="mb-3">
              {/* <i className="bi bi-person-check" style={{ fontSize: '2rem', color: '#4caf50' }}></i> */}
              <lord-icon
                src="https://cdn.lordicon.com/epietrpn.json" // Replace with desired Lordicon URL
                trigger="loop"
                style={{ width: "50px", height: "50px" }}
              ></lord-icon>
            </div>
            <h5 className="fw-bold">Your Expert Design Team at the Ready</h5>
            <p className="text-muted">
              Save countless hours searching for, managing and hiring graphic designers and video editors. Your Project Manager and design team are ready to start instantly at the click of the button.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="col-lg-4 col-md-12 mb-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            className="card h-100  p-4 rounded shadow-sm"
            style={{ backgroundColor: '#f8e6ff' }}
          >
            <div className="mb-3">
              {/* <i className="bi bi-clock-history" style={{ fontSize: '2rem', color: '#9c27b0' }}></i> */}
              <lord-icon
                src="https://cdn.lordicon.com/bmlkvhui.json" // Replace with desired Lordicon URL
                trigger="loop"
                style={{ width: "50px", height: "50px" }}
              ></lord-icon>
            </div>
            <h5 className="fw-bold">Designs in 24-48 Hours</h5>
            <p className="text-muted">
              The back and forth on design can be frustrating and time-consuming. Get most of your designs back in 24-48 hours, and most revisions taken care of with same day delivery.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="col-lg-4 col-md-12 mb-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            className="card h-100 p-4 rounded shadow-sm"
            style={{ backgroundColor: '#fff9e6' }}
          >
            <div className="mb-3">
              {/* <i className="bi bi-people-fill" style={{ fontSize: '2rem', color: '#ff9800' }}></i> */}
              <lord-icon
                src="https://cdn.lordicon.com/ohfmmfhn.json" // Replace with desired Lordicon URL
                trigger="loop"
                style={{ width: "50px", height: "50px" }}
                colors="primary:#121331,secondary:#f28ba8,tertiary:#ffc738,quaternary:#f9c9c0,quinary:#c71f16,senary:#ebe6ef"
              ></lord-icon>
            </div>
            <h5 className="fw-bold">Plug-in DesignOps</h5>
            <p className="text-muted">
              We receive over 1000 applications from designers looking to join Teamtown each month while constantly head hunting from the top agencies around the globe. The result? A carefully selected team of the best designers around.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageThirdScreen;
