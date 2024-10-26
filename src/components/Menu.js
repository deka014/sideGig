import React from 'react';
import logo from '../images/logo.png';

const Menu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg mx-lg-5 p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              height={80}
              // src="https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/logo_sociabiz.png" // Add the path to the "sociabiz" logo image here
              src={logo}
              alt="sociabiz"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-right text-center">
              {/* <li className="nav-item mx-3 fs-5">
                <a className="nav-link text-dark" href="/">Home</a>
              </li> */}

              {/* navbar dropdown */}
              <li className="nav-item dropdown mx-3 fs-5">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Homepage
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/services">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/services">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/services">
                      Services
                    </a>
                  </li>
                </ul>
              </li>
              
              <li className="nav-item mx-3 fs-5">
                <a className="nav-link text-dark" href="/portfolio">Portfolio</a>
              </li>
              <li className="nav-item mx-3 fs-5">
                <a className="nav-link text-dark" href="/pricing">Pricing Plan</a>
              </li>
              <li className="nav-item mx-3 fs-5">
                <a className="nav-link text-dark" href="/faq">FAQ</a>
              </li>
              
              {/* pages dropdown */}
              <li className="nav-item dropdown mx-3 fs-5">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/team">
                      Team
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/services">
                      Services
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="d-flex justify-content-center text-center"> 
              <a href="/get-started" className="btn btn-primary" style={{ borderRadius: '20px' }}>
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
