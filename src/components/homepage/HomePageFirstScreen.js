import React from 'react'

function HomePageFirstScreen() {
  return (
    <div
      className="d-flex align-items-center justify-content-center row position-relative"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #8ec5fc, #e0c3fc, #ffffff)',
        borderTopLeftRadius: '60px',
        borderTopRightRadius: '60px',
        padding: '40px',
      }}
    >
      {/* Create a layout of col-6 col-6 where left is text and right is an image */}
      <div className="col-lg-6 text-center text-lg-start ps-lg-5 mb-5">
        <h1 className="fw-bold" style={{ fontSize: '3rem', lineHeight: '1.2', fontFamily: "'Lexend', sans-serif" }}>
          Creative ideas <br />
         
          that will help <br/>
    
          your brand soar. <br />
        </h1>
        <p className="lead text-dark" style={{ marginTop: '20px' }}>
          Erat euismod sollicitudin morbi maecenas fermentum pellentesque justo quam egestas hac molestie
        </p>
        <div className="d-flex justify-content-center justify-content-lg-start mt-4">
          <a href="/get-started" className="btn btn-lg btn-primary me-3" style={{ borderRadius: '20px' }}>
            Get Started
          </a>
          <button className="btn btn-lg btn-outline-primary rounded-circle" style={{ width: '48px', height: '48px' }}>
            <i className="bi bi-play-fill"></i>
          </button>
        </div>
      </div>

      <div className="col-lg-6 d-flex justify-content-center">
        <img
          src="https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/img_1.png"
          alt="sociabiz"
          style={{ width: '60%' }}
        />
      </div>
      </div>
  )
}

export default HomePageFirstScreen