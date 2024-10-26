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
        We deliver revenue-generating <br /> digital marketing solutions.
      </h2>
      
      <div className="row">
        {/* Card 1 */}
        <div
          className="col-lg-4 col-md-6 mb-4"
          data-aos="fade-up" // Animation for card
          data-aos-delay="100" // Delay for staggered effect
        >
          <div className="card h-100 text-center shadow-sm p-3 rounded">
            <img
              src="https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/idea.png"
              alt="Social Media Strategy"
              className="card-img-top"
              style={{ maxHeight: '200px', objectFit: 'contain' }}
            />
            <div className="card-body">
              <h5 className="card-title">Social Media Strategy</h5>
              <p className="card-text text-muted">
                Auctor viverra massa lacinia conubia placerat dictum litora malesuada mattis porta sapien
              </p>
              <a href="#" className="btn btn-primary">
                Learn more
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="col-lg-4 col-md-6 mb-4"
          data-aos="fade-up"
          data-aos-delay="200" // Increased delay for staggered effect
        >
          <div className="card h-100 text-center shadow-sm p-3 rounded">
            <img
              src="https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/Marketing.png"
              alt="Digital Marketing"
              className="card-img-top"
              style={{ maxHeight: '200px', objectFit: 'contain' }}
            />
            <div className="card-body">
              <h5 className="card-title">Digital Marketing</h5>
              <p className="card-text text-muted">
                Auctor viverra massa lacinia conubia placerat dictum litora malesuada mattis porta sapien
              </p>
              <a href="#" className="btn btn-primary">
                Learn more
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="col-lg-4 col-sm-12 mb-4"
          data-aos="fade-up"
          data-aos-delay="300" // Increased delay for staggered effect
        >
          <div className="card h-100 text-center shadow-sm p-3 rounded">
            <img
              src="https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/Brand.png"
              alt="Brand Development"
              className="card-img-top"
              style={{ maxHeight: '200px', objectFit: 'contain' }}
            />
            <div className="card-body">
              <h5 className="card-title">Brand Development</h5>
              <p className="card-text text-muted">
                Auctor viverra massa lacinia conubia placerat dictum litora malesuada mattis porta sapien
              </p>
              <a href="#" className="btn btn-primary">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageThirdScreen;
