import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { UserContext } from "../context/UserContext";
import { replace, useNavigate } from "react-router-dom";


const PricingPage = () => {
  const navigate = useNavigate();
  const {userState, setUserState} = useContext(UserContext);
  console.log(userState);
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div
      className="container py-5 text-center"
      style={{
        // background: "linear-gradient(to bottom, #f9f6ff, #ffffff)",
        // minHeight: "100vh",
      }}
    >
      <p
        className="text-uppercase fw-bold"
        style={{ color: "#6c63ff" }}
        data-aos="fade-up"
      >
        Choose Package
      </p>
      <h2
        className="fw-bold mb-3"
        style={{ fontSize: "2.5rem" }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Upgrade to unlock <br /> more features.
      </h2>
      <p
        className="text-muted mb-5"
        style={{ maxWidth: "500px", margin: "0 auto" }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Yearly plan subscribers can save up to 25% plus FREE Onboarding Support
        for Startup, Premium, or Enterprise Plan.
      </p>

      <div className="row justify-content-center">
        {/* Basic Plan */}
        <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up">
          <div className="card h-100 shadow-sm rounded-3 p-4">
            <h5 className="fw-bold">Basic Plan</h5>
            <p className="text-muted">
              Sollicitudin faucibus lacinia pharetra pellentesque non erat iaculis
            </p>
            <h2 className="fw-bold">₹49</h2>
            <span className="text-muted">/MONTHLY</span>
            <ul className="list-unstyled mt-3 mb-4 text-start">
              <li>✅ Porttitor cursus tristique</li>
              <li>✅ Euismod nisi taciti</li>
              <li>✅ Purus justo magnis class</li>
              <li>✅ Aenean himenaeos sit</li>
              <li>✅ Dui pede himenaeos</li>
            </ul>
            <a onClick={ () => navigate('/payment' , {replace : true , state : {test : "wow"}} )} className="btn btn-primary w-100">
              Get Started
            </a>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
          <div
            className="card h-100 shadow-sm rounded-3 p-4"
            style={{
              background: "linear-gradient(to bottom, #8ec5fc, #e0c3fc, #ffffff)",
             
            }}
          >
            <h5 className="fw-bold">Premium Plan</h5>
            <p>
              Sollicitudin faucibus lacinia pharetra pellentesque non erat iaculis
            </p>
            <h2 className="fw-bold">₹99</h2>
            <span>/MONTHLY</span>
            <ul className="list-unstyled mt-3 mb-4 text-start">
              <li>✅ Porttitor cursus tristique</li>
              <li>✅ Euismod nisi taciti</li>
              <li>✅ Purus justo magnis class</li>
              <li>✅ Aenean himenaeos sit</li>
              <li>✅ Dui pede himenaeos</li>
            </ul>
            <a onClick={ () => navigate('/payment')} className="btn btn-primary w-100">
              Get Started
            </a>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
          <div className="card h-100 shadow-sm rounded-3 p-4">
            <h5 className="fw-bold">Enterprise Plan</h5>
            <p className="text-muted">
              Sollicitudin faucibus lacinia pharetra pellentesque non erat iaculis
            </p>
            <h2 className="fw-bold">₹149</h2>
            <span className="text-muted">/MONTHLY</span>
            <ul className="list-unstyled mt-3 mb-4 text-start">
              <li>✅ Porttitor cursus tristique</li>
              <li>✅ Euismod nisi taciti</li>
              <li>✅ Purus justo magnis class</li>
              <li>✅ Aenean himenaeos sit</li>
              <li>✅ Dui pede himenaeos</li>
            </ul>
            <a onClick={ () => navigate('/payment')} className="btn btn-primary w-100">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
