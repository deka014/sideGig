import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { UserContext } from "../context/UserContext";
import { replace, useNavigate,useLocation } from "react-router-dom";
import { checkPaymentStatus } from "../services/subscription/checkPaymentStatus";



const PricingPage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    const verifyPaymentStatus = async () => {
      try {
        const response = await checkPaymentStatus();
        console.log(response - 'verify payment status');
        if (!response.paymentStatus) {
          // Redirect to pricing page if paymentStatus is false
          navigate('/pricing');
        }else{
          // Redirect to home page if paymentStatus is true
          navigate('/content-submission');
        }
      } catch (error) {
        console.error('Error verifying payment status:', error);
        // Optionally, handle errors here
      }
    };

    // Trigger payment check only on /pricing route
    if (location.pathname === '/pricing') {
      verifyPaymentStatus();
    }



  }, []);

  return (
    <div
      className="container py-5 text-center"
      style={{
        // background: "linear-gradient(to bottom, #f9f6ff, #ffffff)",
        // minHeight: "100vh",
      }}>
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
          for Starter, Growth, Pro or Premium Plus Plan.
        </p>
        {/* added headline */}
        <h3   
          className="fw-bold mb-5"
          style={{ maxWidth: "500px", margin: "0 auto", color: "#000000" }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Subscription Plans
        </h3>

        <div className="row justify-content-center">

          {/* Starter Plan */} 
          <div className="col-lg-3 col-md-6 mb-4 c1" data-aos="fade-right">  {/* change: fade-up -> fade-right*/}
            <div className="card h-100 shadow-sm rounded-3 p-4 d-flex flex-column">
              <h5 className="fw-bold">Starter Plan</h5>
              <p className="text-muted">
                Perfect for individuals and small businesses starting their social media journey.
              </p>
              <h2 className="fw-bold">₹999</h2>
              <span className="text-muted">/MONTHLY</span>
              <ul className="list-unstyled mt-3 mb-4 text-start">
                <li>✅ 15 Social Media Creatives per month.</li>
                <li>✅ Access to 2 profile templates for visual consistency.</li>
              </ul>
              <div className="mt-auto">   {/* to fix the button to bottom of tab */} 
                <a onClick={() => navigate('/payment', )} className="btn btn-primary w-100">
                  Get Started
                </a>
              </div>
            </div>
          </div>


          {/* Growth Plan */}
          <div className="col-lg-3 col-md-6 mb-4 c2" data-aos="fade-up" data-aos-delay="100">
            <div
              className="card h-100 shadow-sm rounded-3 p-4 d-flex flex-column"
              style={{
                background: "linear-gradient(to bottom, #8ec5fc, #e0c3fc, #ffffff)",
              
              }}
            >
              <h5 className="fw-bold">Growth Plan</h5>
              <p>
                Ideal for brands looking to level up with consistent content and creatives.
              </p>
              <h2 className="fw-bold">₹1,699</h2>
              <span className="text-muted">/MONTHLY</span>
              <ul className="list-unstyled mt-3 mb-4 text-start">
                <li>✅ 15 Social Media Creatives + Caption Writing for each post.</li>
                <li>✅ Access to 4 profile templates for diverse customization.</li>
                <li>✅ 1 Monthly Content Calendar.</li>
              </ul>
              <div className="mt-auto"> {/* to fix the button to bottom of tab */} 
              <a onClick={ () => navigate('/payment')} className="btn btn-primary w-100">
                Get Started
              </a>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="col-lg-3 col-md-6 mb-4 c3" data-aos="fade-up" data-aos-delay="200">
            <div className="card h-100 shadow-sm rounded-3 p-4">
              <h5 className="fw-bold">Pro Plan</h5>
              <p className="text-muted">
              Best for growing businesses with a steady demand for diverse and high-quality content variety.
              </p>
              <h2 className="fw-bold">₹2,699</h2>
              <span className="text-muted">/MONTHLY</span>
              <ul className="list-unstyled mt-3 mb-4 text-start">
                <li>✅ 25 Social Media Creatives + Caption Writing for each post.</li>
                <li>✅ Access to 6 profile templates for advanced customization.</li>
                <li>✅ 1 Monthly Content Calendar + Hashtag Strategy.</li>
                <li>✅ Early delivery option for urgent requests.</li>
              </ul>
              <div className="mt-auto"> {/* to fix the button to bottom of tab */} 
                <a onClick={() => navigate('/payment', )} className="btn btn-primary w-100">
                  Get Started
                </a>
              </div>
            </div>
          </div>

            {/* Premium Plus Plan */}
            <div className="col-lg-3 col-md-6 mb-4 c4" data-aos="fade-left" data-aos-delay="100">  {/* change: fade-up -> fade-left*/}
            <div 
              className="card h-100 shadow-sm rounded-3 p-4"
              style={{
                background: "linear-gradient(to bottom, #8ec5fc, #e0c3fc, #ffffff)",
              
              }}
            >
              <h5 className="fw-bold">Premium Plus Plan</h5>
              <p>
                Designed for brands that require extensive content tailored to their preferences.
              </p>
              <h2 className="fw-bold">₹3,499</h2>
              <span>/MONTHLY</span>
              <ul className="list-unstyled mt-3 mb-4 text-start">
                <li>✅ 25 Days of Content: Two options for each post (50 creatives and captions total).</li>
                <li>✅ Access to 8 profile templates for maximum customization.</li>
                <li>✅ 1 Monthly Content Calendar + Advanced Hashtag Strategy.</li>
                <li>✅ Priority delivery and unlimited revisions.</li>
              </ul>
              <div className="mt-auto"> {/* to fix the button to bottom of tab */} 
                <a onClick={() => navigate('/payment', )} className="btn btn-primary w-100">
                  Get Started
                </a>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
};

export default PricingPage;
