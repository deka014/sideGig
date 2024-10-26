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
      className="d-flex align-items-center justify-content-center row position-relative"
      style={{
        marginBottom: '100px',
      }}
    >
      {/* Left section: Single phone image with animation */}
      <div
        className="col-lg-6 d-flex justify-content-center"
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

      {/* Right section: Text content with progress bars */}
      <div
        className="col-lg-6 text-center text-lg-start pe-md-5"
        data-aos="fade-left" // Animation type for text content
      >
        <p
          className="text-uppercase fw-bold"
          style={{ color: '#6c63ff', fontSize: '1rem' }}
          data-aos="fade-up" // Animation for subtitle
        >
          Who We Are
        </p>
        <h2
          className="fw-bold"
          style={{ fontSize: '2.5rem', lineHeight: '1.2' }}
          data-aos="fade-up"
          data-aos-delay="100" // Delay for staggered effect
        >
          Today’s a better time to <br />
          connect with people on <br />
          social media.
        </h2>
        <p
          className="lead text-muted"
          style={{ marginTop: '20px' }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Dignissim conubia phasellus potenti orci porttitor sollicitudin morbi aptent rhoncus mollis magnis
        </p>

        {/* Progress bars with animation */}
        <div className="mt-4">
          <div
            className="d-flex justify-content-between"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span>Project Done</span>
            <span>97%</span>
          </div>
          <div
            className="progress"
            style={{ height: '8px', borderRadius: '5px' }}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div
              className="progress-bar"
              style={{
                width: '97%',
                background: 'linear-gradient(to right, #ff758c, #ff7eb3)',
              }}
            ></div>
          </div>

          <div
            className="d-flex justify-content-between mt-3"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <span>Boost Traffic</span>
            <span>40%</span>
          </div>
          <div
            className="progress"
            style={{ height: '8px', borderRadius: '5px' }}
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div
              className="progress-bar"
              style={{
                width: '40%',
                background: 'linear-gradient(to right, #8ec5fc, #e0c3fc)',
              }}
            ></div>
          </div>

          <div
            className="d-flex justify-content-between mt-3"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <span>Increase Revenue</span>
            <span>60%</span>
          </div>
          <div
            className="progress"
            style={{ height: '8px', borderRadius: '5px' }}
            data-aos="fade-up"
            data-aos-delay="800"
          >
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
