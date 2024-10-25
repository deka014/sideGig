import React from "react";

const HomePageSecondScreen = () => {
  return (
    
    <div
      className="d-flex align-items-center justify-content-center row position-relative"
      style={{
        // minHeight: '100vh',
        marginBottom: '100px',
      }}
    >
      {/* Left section: Single phone image */}
      <div className="col-lg-6 d-flex justify-content-center">
        <img
          src="https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/img_3_.png" // Replace with the actual image URL
          alt="Phone"
          style={{
            width: '80%',
            maxWidth: '400px',
            transform: 'rotate(-5deg)',
          }}
        />
      </div>
      

      {/* Right section: Text content with progress bars */}
      <div className="col-lg-6 text-center text-lg-start pe-md-5">
        <p className="text-uppercase fw-bold" style={{ color: '#6c63ff', fontSize: '1rem' }}>
          Who We Are
        </p>
        <h2 className="fw-bold" style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>
          Today’s a better time to <br />
          connect with people on <br />
          social media.
        </h2>
        <p className="lead text-muted" style={{ marginTop: '20px' }}>
          Dignissim conubia phasellus potenti orci porttitor sollicitudin morbi aptent rhoncus mollis magnis
        </p>

        {/* Progress bars */}
        <div className="mt-4">
          <div className="d-flex justify-content-between">
            <span>Project Done</span>
            <span>97%</span>
          </div>
          <div className="progress" style={{ height: '8px', borderRadius: '5px' }}>
            <div
              className="progress-bar"
              style={{
                width: '97%',
                background: 'linear-gradient(to right, #ff758c, #ff7eb3)',
              }}
            ></div>
          </div>

          <div className="d-flex justify-content-between mt-3">
            <span>Boost Traffic</span>
            <span>40%</span>
          </div>
          <div className="progress" style={{ height: '8px', borderRadius: '5px' }}>
            <div
              className="progress-bar"
              style={{
                width: '40%',
                background: 'linear-gradient(to right, #8ec5fc, #e0c3fc)',
              }}
            ></div>
          </div>

          <div className="d-flex justify-content-between mt-3">
            <span>Increase Revenue</span>
            <span>60%</span>
          </div>
          <div className="progress" style={{ height: '8px', borderRadius: '5px' }}>
            <div
              className="progress-bar"
              style={{
                width: '60%',
                background: 'linear-gradient(to right, #ffc371, #ff7b95)',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSecondScreen;
