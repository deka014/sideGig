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
          Why Choose dgin.in?
        </p>    {/* change in headline*/}
        <h2 className="fw-bold" style={{ fontSize: "2rem" }}>
        Affordable Creativity. <br />  Simplified Content.
        </h2>
      </div>

      {/* change in services offered */}
      <div className="row g-4">
        {/* Card 1: Expertise Across Platforms with Flip Effect */}
        <div className="col-lg-3 col-md-6 text-center" data-aos="flip-left" data-aos-delay="100">
          <div className="p-4 rounded shadow-sm h-100">
            <i className="bi bi-phone" style={{ fontSize: "2rem", color: "#6c63ff" }}></i>
            <h5 className="mt-3">Expertise Across Platforms</h5>
            <p className="text-muted">
            From Instagram to LinkedIn, we craft engaging, platform-specific content—posts, stories, reels, and banners—tailored to drive results.
            </p>
          </div>
        </div>

        {/* Card 2: Affordable monthly plans with Zoom Effect */}
        <div className="col-lg-3 col-md-6 text-center" data-aos="zoom-in" data-aos-delay="200">
          <div className="p-4 rounded shadow-sm h-100" style={{ backgroundColor: "#f8f9fa" }}>
            <i className="bi bi-receipt" style={{ fontSize: "2rem", color: "#6c63ff" }}></i>
            <h5 className="mt-3">Affordable monthly plans</h5>
            <p className="text-muted">
              Get access to high-quality content creation services without stretching your budget. Our flexible pricing ensures you get the best value for your investment.
            </p>
          </div>
        </div>

        {/* Card 3: Professional-quality designs with Fade Effect */}
        <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up" data-aos-delay="300">
          <div className="p-4 rounded shadow-sm h-100">  {/* change in icon */}
            <i className="bi bi-person-square" style={{ fontSize: "2rem", color: "#6c63ff" }}></i>  
            <h5 className="mt-3">Professional-quality designs  </h5>
            <p className="text-muted">
              Stand out with stunning visuals and creative content crafted by experienced professionals, tailored to reflect your unique brand identity.
            </p>
          </div>
        </div>

        {/* Card 4: Hassle-free subscription model Services with Slide Effect */}
        <div className="col-lg-3 col-md-6 text-center" data-aos="slide-up" data-aos-delay="400">
          <div className="p-4 rounded shadow-sm h-100">
            <i className="bi bi-file-earmark-text" style={{ fontSize: "2rem", color: "#6c63ff" }}></i>
            <h5 className="mt-3">Hassle-free subscription model</h5>
            <p className="text-muted">
              Enjoy a seamless experience with our easy-to-manage subscription plans - no long-term commitments, no hidden fees, just straightforward service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSeventhScreen;
