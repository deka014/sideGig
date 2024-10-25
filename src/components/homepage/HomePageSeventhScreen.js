import React from "react";

const HomePageSeventhScreen = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <p className="text-uppercase fw-bold" style={{ color: "#6c63ff" }}>
          Why Choose Us
        </p>
        <h2 className="fw-bold" style={{ fontSize: "2rem" }}>
          Maximizing Engagement, <br /> Driving Growth.
        </h2>
      </div>

      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-lg-3 col-md-6 text-center">
          <div className="p-4 rounded shadow-sm h-100">
            <i className="bi bi-phone" style={{ fontSize: "2rem", color: "#6c63ff" }}></i>
            <h5 className="mt-3">Expertise Across Platforms</h5>
            <p className="text-muted">
              Montes sollicitudin orci justo aliquam dis quam nibh
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-lg-3 col-md-6 text-center">
          <div
            className="p-4 rounded shadow-sm h-100"
            style={{
              backgroundColor: "#f8f9fa",
            }}
          >
            <i className="bi bi-receipt" style={{ fontSize: "2rem", color: "#6c63ff" }}></i>
            <h5 className="mt-3">Comprehensive Service Offerings</h5>
            <p className="text-muted">
              Montes sollicitudin orci justo aliquam dis quam nibh
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-lg-3 col-md-6 text-center">
          <div className="p-4 rounded shadow-sm h-100">
            <i className="bi bi-chat-dots" style={{ fontSize: "2rem", color: "#6c63ff" }}></i>
            <h5 className="mt-3">Community Building Expertise</h5>
            <p className="text-muted">
              Montes sollicitudin orci justo aliquam dis quam nibh
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-lg-3 col-md-6 text-center">
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
