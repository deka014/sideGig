import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePageSeventhScreen = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <div className="container py-5">
      {/* Header Section with Animation */}
      <div className="text-center mb-5" data-aos="fade-up">
        <p className="text-uppercase fw-bold" style={{ color: "#6c63ff" }}>
          Why Choose Us
        </p>
        <h2 className="fw-bold" style={{ fontSize: "2rem" }}>
          Maximizing Engagement, <br /> Driving Growth.
        </h2>
      </div>

      <div className="row g-4">
        {/* Card 1: Expertise Across Platforms with Flip Effect */}
        <div className="col-lg-3 col-md-6 text-center" data-aos="flip-left" data-aos-delay="100">
          <div className="p-4 rounded shadow-sm h-100">
            <i className="bi bi-phone" style={{ fontSize: "2rem", color: "#6c63ff" }}></i>
            <h5 className="mt-3">Expertise Across Platforms</h5>
            <p className="text-muted">
              Montes sollicitudin orci justo aliquam dis quam nibh
            </p>
          </div>
        </div>

        {/* Card 2: Comprehensive Service Offerings with Zoom Effect */}
        <div className="col-lg-3 col-md-6 text-center" data-aos="zoom-in" data-aos-delay="200">
          <div className="p-4 rounded shadow-sm h-100" style={{ backgroundColor: "#f8f9fa" }}>
            <i className="bi bi-receipt" style={{ fontSize: "2rem", color: "#6c63ff" }}></i>
            <h5 className="mt-3">Comprehensive Service Offerings</h5>
            <p className="text-muted">
              Montes sollicitudin orci justo aliquam dis quam nibh
            </p>
          </div>
        </div>

        {/* Card 3: Community Building Expertise with Fade Effect */}
        <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="300">
          <div className="p-4 rounded shadow-sm h-100">
            <i className="bi bi-chat-dots" style={{ fontSize: "2rem", color: "#6c63ff" }}></i>
            <h5 className="mt-3">Community Building Expertise</h5>
            <p className="text-muted">
              Montes sollicitudin orci justo aliquam dis quam nibh
            </p>
          </div>
        </div>

        {/* Card 4: Flexible and Scalable Services with Slide Effect */}
        <div className="col-lg-3 col-md-6 text-center" data-aos="slide-up" data-aos-delay="400">
          <div className="p-4 rounded shadow-sm h-100">
            <i className="bi bi-file-earmark-text" style={{ fontSize: "2rem", color: "#6c63ff" }}></i>
            <h5 className="mt-3">Flexible and Scalable Services</h5>
            <p className="text-muted">
              Montes sollicitudin orci justo aliquam dis quam nibh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSeventhScreen;
