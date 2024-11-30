import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import 'animate.css';     //import animation
import '../../css/expand.css';

const HomePageSixthScreen = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Trigger animations only once
    });
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  const iconCircleStyle = {
    backgroundImage: `url('https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/memphis1.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "50%",
    width: "70px",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // transition: isHovered
    //   ? "transform 0.75s ease-in"
    //   : "transform 0.5s ease-out",
    // transform: isHovered ? "translate(50px, 50px) scale(12)" : "translate(0, 0) scale(1)",
  };

  // Icon Style
  const iconStyle = {
    fontSize: "2.5rem",
    color: "#000",
  };

  // Title Style
  const titleStyle = {
    textAlign: "left",
    marginBottom: "25px",
    marginTop: "15px",
  };

  // Description Style
  const descriptionStyle = {
    color: "#6c757d", // Muted text color
    marginBottom: "20px",
  };


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

          <div
              className="card h-100 p-3 shadow-sm"
              
              // onMouseEnter={() => setIsHovered(true)}
              // onMouseLeave={() => setIsHovered(false)}
            >
              <div className="d-flex align-items-center mb-3 box">
                <div className="me-3">
                  <i className="expand-circle" style={iconCircleStyle}></i>
                  <i className="bi bi-search mb-2" style={iconStyle}></i>
                </div>
              </div>
                  <h5 className="mb-4" style={titleStyle}>Social Media Management</h5>
              <p style={descriptionStyle}>
                Quisque sollicitudin eget ad pharetra porta feugiat scelerisque augue turpis sapien curabitur
              </p>
              <a href="#" className="btn btn-primary">
                Learn more
              </a>
            </div>

        </div>

        {/* Card 2 */}
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div
            className="card h-100 p-3 shadow-sm"
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
          >
            <div className="d-flex align-items-center mb-3 box">
              <div className="me-3">
                <i className="expand-circle" style={iconCircleStyle}></i>
                <i className="bi bi-layers mb-2" style={iconStyle}></i>
              </div>
            </div>
            <h5 className="mb-4" style={titleStyle}>Paid Promote</h5>
            <p style={descriptionStyle}>
              Quisque sollicitudin eget ad pharetra porta feugiat scelerisque augue turpis sapien curabitur
            </p>
            <a href="#" className="btn btn-primary">
              Learn more
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div
            className="card h-100 p-3 shadow-sm"
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
          >
            <div className="d-flex align-items-center mb-3 box">
              <div className="me-3">
                <i className="expand-circle" style={iconCircleStyle}></i>
                <i className="bi bi-megaphone mb-2" style={iconStyle}></i>
              </div>
            </div>
            <h5 className="mb-4" style={titleStyle}>Digital Marketing</h5>
            <p style={descriptionStyle}>
              Quisque sollicitudin eget ad pharetra porta feugiat scelerisque augue turpis sapien curabitur
            </p>
            <a href="#" className="btn btn-primary">
              Learn more
            </a>
          </div>
        </div>

      {/* Card 4 */}
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
        <div
          className="card h-100 p-3 shadow-sm"
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
        >
          <div className="d-flex align-items-center mb-3 box">
            <div className="me-3">
              <i className="expand-circle" style={iconCircleStyle}></i>
              <i className="bi bi-graph-up mb-2" style={iconStyle}></i>
            </div>
          </div>
          <h5 className="mb-4" style={titleStyle}>Data Driven</h5>
          <p style={descriptionStyle}>
            Quisque sollicitudin eget ad pharetra porta feugiat scelerisque augue turpis sapien curabitur
          </p>
          <a href="#" className="btn btn-primary">
            Learn more
          </a>
        </div>
      </div>

      {/* Card 5 */}
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
        <div
          className="card h-100 p-3 shadow-sm"
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
        >
          <div className="d-flex align-items-center mb-3 box">
            <div className="me-3">
              <i className="expand-circle" style={iconCircleStyle}></i>
              <i className="bi bi-layers mb-2" style={iconStyle}></i>
            </div>
          </div>
          <h5 className="mb-4" style={titleStyle}>Strategic Consulting</h5>
          <p style={descriptionStyle}>
            Quisque sollicitudin eget ad pharetra porta feugiat scelerisque augue turpis sapien curabitur
          </p>
          <a href="#" className="btn btn-primary">
            Learn more
          </a>
        </div>
      </div>

            {/* Card 6 */}
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
        <div
          className="card h-100 p-3 shadow-sm"
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
        >
          <div className="d-flex align-items-center mb-3 box">
            <div className="me-3">
              <i className="expand-circle" style={iconCircleStyle}></i>
              <i className="bi bi-layers mb-2" style={iconStyle}></i>
            </div>
          </div>
          <h5 className="mb-4" style={titleStyle}>Creative Development</h5>
          <p style={descriptionStyle}>
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
