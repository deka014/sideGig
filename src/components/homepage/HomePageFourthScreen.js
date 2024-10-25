import React from "react";

const HomePageFourthScreen = () => {
  return (
    <div className="mb-5">
      {/* Background Section */}
      <div
        className="d-flex align-items-center justify-content-center position-relative text-center text-white"
        style={{
          backgroundImage: 'url("https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/multiracial-business-team-having-a-meeting-in-the-office.jpg")', // Replace with the actual image URL
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

        {/* Content */}
        <div className="position-relative z-index-1 container">
          <h2 className="fw-bold" style={{ fontSize: '2.5rem' }}>
            Social Media Mastery <br /> for Modern Brands.
          </h2>
          <p className="lead mt-3" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Ultrices quam mattis posuere porttitor tellus rhoncus tristique. Primis aliquam dignissim interdum vel suscipit sodales.
          </p>
          <button className="btn btn-primary mt-4">Discover more</button>
        </div>

        {/* Play Button */}
        {/* <div
          className="position-absolute top-50 start-50 translate-middle bg-white rounded-circle"
          style={{ width: '60px', height: '60px' }}
        >
          <i className="bi bi-play-fill text-primary" style={{ fontSize: '2rem', lineHeight: '60px' }}></i>
        </div> */}
      </div>

      {/* Statistics Section with Overlay */}
      <div className="container position-relative" style={{ marginTop: '-50px' }}>
        <div className="row text-center bg-white shadow-lg py-4 rounded-3">
          <div className="col-md-3 col-6 mb-4 mb-md-0">
            <h3 className="fw-bold" style={{ color: '#6c63ff' }}>41K+</h3>
            <p className="text-muted">Happy Client</p>
          </div>
          <div className="col-md-3 col-6 mb-4 mb-md-0">
            <h3 className="fw-bold" style={{ color: '#6c63ff' }}>76K+</h3>
            <p className="text-muted">Project Done</p>
          </div>
          <div className="col-md-3 col-6 mb-4 mb-md-0">
            <h3 className="fw-bold" style={{ color: '#6c63ff' }}>4.7</h3>
            <p className="text-muted">Client Ratings</p>
          </div>
          <div className="col-md-3 col-6">
            <h3 className="fw-bold" style={{ color: '#6c63ff' }}>15+</h3>
            <p className="text-muted">Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageFourthScreen;
