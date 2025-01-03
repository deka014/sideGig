import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className="mt-3 mx-md-5">
    <div
      className="container-fluid py-5"
      style={{
        background: 'linear-gradient(to bottom, #8ec5fc, #e0c3fc, #ffffff)',
        borderRadius: "40px",
        color: "#333",
      }}
    >
    {/* changes: sociobuz -> dgin */}
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Left Section: Logo and Description */}
          <div className="col-md-3 mb-4">
            <h1 className="fw-bold mb-3">dgin.in</h1>  
            <p>
              Experience the dgin Advantage - Empowering Social Success with Data-Driven Solutions.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="#" className="text-dark mx-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-dark mx-2">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-dark mx-2">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-dark mx-2">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-dark mx-2">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Middle Sections: Links */}
          <div className="col-md-3 mb-4" style={{}}>
            <h4 className="fw-bold mb-3">Solutions</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">Social Media Management</a></li>
              <li><a href="#" className="text-dark">Paid Promote</a></li>
              <li><a href="#" className="text-dark">Digital Marketing</a></li>
              <li><a href="#" className="text-dark">Data Driven</a></li>
              <li><a href="#" className="text-dark">Strategic Consulting</a></li>
              <li><a href="#" className="text-dark">Creative Development</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold mb-3">Support</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">Help Center</a></li>
              <li><a href="#" className="text-dark">Ticket Support</a></li>
              <li><a href="#" className="text-dark">Customer Support</a></li>
              <li><a href="#" className="text-dark">Contact Us</a></li>
              <li><a href="#" className="text-dark">Forum Community</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold mb-3">Company</h4>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-dark">About Us</a></li>   {/* added the About Us page link */}
              <li><a href="#" className="text-dark">Leadership</a></li>
              <li><a href="#" className="text-dark">Careers</a></li>
              <li><a href="#" className="text-dark">Article & News</a></li>
              <li><a href="#" className="text-dark">Legal Notices</a></li>
            </ul>
          </div>
        </div>

        <div className="parent-container"
        style={{
          position: "relative", // Relative position for the parent container
        }}
        >
          <div
            className="background-text2"
            style={{
              display: "flex",
              justifyContent: "center", 
              alignItems: "center", 
              position: "absolute", 
              top: "50%",       // Center vertically
              left: "50%",      // Center horizontally
              transform: "translate(-50%, -50%)",   // Perfect centering
              fontWeight: "bold",
              color: "#F4F4F4", 
              whiteSpace: "nowrap",
            }}
          >
            dgin.in
          </div>
        </div>

      </div>
    </div>
    <div className="text-center mt-4">
  <div
    className="d-flex flex-column flex-md-row justify-content-between align-items-center"
    style={{
      width: "100%",
      textAlign: "left",
      marginBottom: "2rem",
      padding: "0 1rem", // Add some padding for small screens
    }}
  >
    {/* Left-side in T&C footer */}
    <div 
      style={{ 
        // marginBottom: "1rem", 
        marginLeft: "50px" 
        }}>
      <small className="text-muted">
        Copyright ©2024 dgin.in, All rights reserved. Powered by Palash Pratim Dutta.
      </small>
    </div>

    {/* Right-side in T&C footer */}
    <div
      style={{
        // marginBottom: "1rem",
        marginRight: "50px",
        fontSize: "13px",
        textAlign: "center", // Center-align links on smaller screens
      }}
    >
      <a href="#" className="text-dark me-3">
        Terms of Services
      </a>
      <a href="#" className="text-dark me-3">
        Privacy Policy
      </a>
      <a href="#" className="text-dark">
        Cookie Policy
      </a>
    </div>
  </div>
</div>
</div>
  );
};

export default Footer;
