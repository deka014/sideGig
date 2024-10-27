import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePageSixthScreen = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <div className="container py-3">
      {/* Heading with Animation */}
      <h2
        className="text-center fw-bold mb-5"
        style={{ fontSize: "2rem" }}
        data-aos="fade-up" // Animation for heading
      >
        Transforming Social Media into <br /> Social Impact
      </h2>

      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div className="card h-100 p-3 shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <div
                className="me-3"
                style={{
                  backgroundColor: "#ffebf0",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="bi bi-search" style={{ fontSize: "1.5rem", color: "#ff6f91" }}></i>
              </div>
              <h5 className="mb-0">Social Media Management</h5>
            </div>
            <p className="text-muted">
              Quisque sollicitudin eget ad pharetra porta feugiat scelerisque augue turpis sapien curabitur
            </p>
            <a href="#" className="btn btn-primary">
              Learn more
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="card h-100 p-3 shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <div
                className="me-3"
                style={{
                  backgroundColor: "#ffebf0",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="bi bi-layers" style={{ fontSize: "1.5rem", color: "#ff6f91" }}></i>
              </div>
              <h5 className="mb-0">Paid Promote</h5>
            </div>
            <p className="text-muted">
              Quisque sollicitudin eget ad pharetra porta feugiat scelerisque augue turpis sapien curabitur
            </p>
            <a href="#" className="btn btn-primary">
              Learn more
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div className="card h-100 p-3 shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <div
                className="me-3"
                style={{
                  backgroundColor: "#ffebf0",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="bi bi-megaphone" style={{ fontSize: "1.5rem" }}></i>
              </div>
              <h5 className="mb-0">Digital Marketing</h5>
            </div>
            <p>
              Quisque sollicitudin eget ad pharetra porta feugiat scelerisque augue turpis sapien curabitur
            </p>
            <a href="#" className="btn btn-primary">
              Learn more
            </a>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
          <div className="card h-100 p-3 shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <div
                className="me-3"
                style={{
                  backgroundColor: "#ffebf0",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="bi bi-graph-up" style={{ fontSize: "1.5rem", color: "#ff6f91" }}></i>
              </div>
              <h5 className="mb-0">Data Driven</h5>
            </div>
            <p className="text-muted">
              Quisque sollicitudin eget ad pharetra porta feugiat scelerisque augue turpis sapien curabitur
            </p>
            <a href="#" className="btn btn-primary">
              Learn more
            </a>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
          <div className="card h-100 p-3 shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <div
                className="me-3"
                style={{
                  backgroundColor: "#ffebf0",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="bi bi-layers" style={{ fontSize: "1.5rem", color: "#ff6f91" }}></i>
              </div>
              <h5 className="mb-0">Strategic Consulting</h5>
            </div>
            <p className="text-muted">
              Quisque sollicitudin eget ad pharetra porta feugiat scelerisque augue turpis sapien curabitur
            </p>
            <a href="#" className="btn btn-primary">
              Learn more
            </a>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
          <div className="card h-100 p-3 shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <div
                className="me-3"
                style={{
                  backgroundColor: "#ffebf0",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="bi bi-layers" style={{ fontSize: "1.5rem", color: "#ff6f91" }}></i>
              </div>
              <h5 className="mb-0">Creative Development</h5>
            </div>
            <p className="text-muted">
              Quisque sollicitudin eget ad pharetra porta feugiat scelerisque augue turpis sapien curabitur
            </p>
            <a href="#" className="btn btn-primary">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSixthScreen;
