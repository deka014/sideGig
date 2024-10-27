import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePageNinthScreen = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation occurs only once
    });
  }, []);

  return (
    <div className="container py-2">
      {/* Header Section with Animation */}
      <div className="text-center mb-5" data-aos="zoom-in">
        <p className="text-uppercase fw-bold" style={{ color: "#6c63ff" }}>
          Need More Help?
        </p>
        <h2 className="fw-bold" style={{ fontSize: "2rem" }}>
          Our friendly support team is <br /> here to help.
        </h2>
      </div>

      {/* Cards Section */}
      <div className="row g-4">
        {/* Card 1: Customer Support with Flip Effect */}
        <div className="col-lg-4 col-md-6" data-aos="flip-left" data-aos-delay="100">
          <div className="card h-100 p-4 text-center shadow-sm">
            <div className="mb-3">
              <i className="bi bi-chat-left-text" style={{ fontSize: "2rem", color: "#f28b82" }}></i>
            </div>
            <h5 className="mb-3">Customer Support</h5>
            <p className="text-muted mb-4">
              Efficitur lobortis amet faucibus feugiat aptent convallis cubilia bibendum nostra nulla arcu
            </p>
            <a href="#" className="btn btn-primary">
              Chat now
            </a>
          </div>
        </div>

        {/* Card 2: Ticket Support with Fade Effect */}
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="card h-100 p-4 text-center shadow-sm">
            <div className="mb-3">
              <i className="bi bi-envelope" style={{ fontSize: "2rem", color: "#f28b82" }}></i>
            </div>
            <h5 className="mb-3">Ticket Support</h5>
            <p className="text-muted mb-4">
              Efficitur lobortis amet faucibus feugiat aptent convallis cubilia bibendum nostra nulla arcu
            </p>
            <a href="#" className="btn btn-primary">
              Send Ticket
            </a>
          </div>
        </div>

        {/* Card 3: Contact Us with Zoom Effect */}
        <div className="col-lg-4 col-sm-12" data-aos="zoom-in" data-aos-delay="300">
          <div className="card h-100 p-4 text-center shadow-sm">
            <div className="mb-3">
              <i className="bi bi-life-preserver" style={{ fontSize: "2rem", color: "#f28b82" }}></i>
            </div>
            <h5 className="mb-3">Contact Us</h5>
            <p className="text-muted mb-4">
              Efficitur lobortis amet faucibus feugiat aptent convallis cubilia bibendum nostra nulla arcu
            </p>
            <a href="#" className="btn btn-primary">
              Contact now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageNinthScreen;
