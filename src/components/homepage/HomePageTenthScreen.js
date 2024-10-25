import React from "react";


const HomePageTenthScreen = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(to right, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ce2, #8aa8e7, #79b4ec, #67bff0)",
        borderTopLeftRadius: "60px",
        borderTopRightRadius: "60px",
        color: "#333",
      }}
    >
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Left Section: Logo and Description */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">SociaBiz</h5>
            <p>
              Experience the SociaBiz Advantage - Empowering Social Success with Data-Driven Solutions.
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
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Solutions</h6>
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
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">Help Center</a></li>
              <li><a href="#" className="text-dark">Ticket Support</a></li>
              <li><a href="#" className="text-dark">Customer Support</a></li>
              <li><a href="#" className="text-dark">Contact Us</a></li>
              <li><a href="#" className="text-dark">Forum Community</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">About Us</a></li>
              <li><a href="#" className="text-dark">Leadership</a></li>
              <li><a href="#" className="text-dark">Careers</a></li>
              <li><a href="#" className="text-dark">Article & News</a></li>
              <li><a href="#" className="text-dark">Legal Notices</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <small className="text-muted">
            Copyright ©2024 SociaBiz, All rights reserved. Powered by MoxCreative.
          </small>
          <br />
          <a href="#" className="text-dark me-3">Terms of Services</a>
          <a href="#" className="text-dark me-3">Privacy Policy</a>
          <a href="#" className="text-dark">Cookie Policy</a>
        </div>
      </div>
    </div>
  );
};

export default HomePageTenthScreen;
