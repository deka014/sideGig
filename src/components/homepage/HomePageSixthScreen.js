import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import 'animate.css';     //import animation

const HomePageSixthScreen = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Trigger animations only once
    });
  }, []);

  //css styling

  const [isHovered, setIsHovered] = useState(false);

  // Card Style
  const cardStyle = {
    height: "100%",
    padding: "15px",
    borderRadius: "8px",
    border: "2px solid black",
    overflow: "hidden",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    background: isHovered
    ? `linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ), url('https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/memphis1.png')`
  : "#fff",
    backgroundSize: "56px auto",
    transition: "background 0.3s ease, color 0.3s ease",
    color: "#000",
    cursor: "pointer",
  };

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
    transition: isHovered
      ? "scale 1.5s ease-in, transform 0.5s ease-in"
      : "scale 1s ease-out, transform 1.5s ease-out",
    transform: isHovered ? "translate(20px, 20px) scale(3)" : "translate(0, 0) scale(1)",
  };
  


  // Icon Style
  const iconStyle = {
    fontSize: "2.5rem",
    color: "#000", // Change icon color on hover
  };

  // Title Style
  const titleStyle = {
    textAlign: "left",
    marginBottom: "25px",
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
        {/*}
          <div className="card h-100 p-3 shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <div
                className="me-3"
                style={{
                  backgroundColor: "#ffebf0",
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="bi bi-search mb-2" style={{ fontSize: "2.5rem", color: "#ff6f91" }}></i>
              </div>
            </div>
          
              {/* passed to bottom *
              <h5 className="mb-4"
                        style={{
                  textAlign: 'left'
              }}>
                Social Media Management</h5>
            <p className="text-muted mb-4">
              Quisque sollicitudin eget ad pharetra porta feugiat scelerisque augue turpis sapien curabitur
            </p>
            
            <a href="#" className="btn btn-primary">
              Learn more
            </a>
          </div>
          */}
          <div
      className="card h-100 p-3 shadow-sm"
      
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="d-flex align-items-center mb-3">
        <div className="me-3" style={iconCircleStyle}>
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
          <div className="card h-100 p-3 shadow-sm">
            <div className="d-flex align-items-center mb-3">
              <div
                className="me-3"
                style={{
                  backgroundColor: "#ffebf0",
                  borderRadius: "50%",
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="bi bi-layers" style={{ fontSize: "2.5rem", color: "#ff6f91" }}></i>
              </div>
            </div>
              {/* passed to bottom */}
              <h5 className="mb-4"
              style={{
                  textAlign: 'left'
              }}>
                Paid Promote</h5>
            <p className="text-muted mb-4">
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
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="bi bi-megaphone" style={{ fontSize: "2.5rem" }}></i>
              </div>
            </div>
              {/* passed to bottom */}
              <h5 className="mb-4"
              style={{
                  textAlign: 'left'
              }}>
                Digital Marketing</h5>
            <p className="mb-4">
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
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="bi bi-graph-up" style={{ fontSize: "2.5rem", color: "#ff6f91" }}></i>
              </div>
            </div>
              {/* passed to bottom */}
              <h5 className="mb-4"
              style={{
                  textAlign: 'left'
              }}
              >
                Data Driven</h5>
            <p className="text-muted mb-4">
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
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="bi bi-layers" style={{ fontSize: "2.5rem", color: "#ff6f91" }}></i>
              </div>
            </div>
              {/* passed to bottom */}
              <h5 className="mb-4"
              style={{
                  textAlign: 'left'
              }}>
                Strategic Consulting</h5>
            <p className="text-muted mb-4">
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
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="bi bi-layers" style={{ fontSize: "2.5rem", color: "#ff6f91" }}></i>
              </div>
            </div>
             {/* passed to bottom */}
             <h5 className="mb-4"
              style={{
                  textAlign: 'left'
              }}>
                Creative Development</h5>
            <p className="text-muted mb-4">
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
