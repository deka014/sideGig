import React from 'react'
import HomePageFifthScreen from './HomePageFifthScreen'
import HomePageEigthScreen from './HomePageEigthScreen'
import HomePageNinthScreen from './HomePageNinthScreen'

function FAQ() {
  return (
    <div>
    <div className="container py-5"
    style={{
      background: 'linear-gradient(rgb(245, 225, 255), rgb(255, 255, 255))',
      borderRadius: '15px',
      margin: 'auto',
    //   boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      textAlign: 'left'
    }}
  >
    <HomePageFifthScreen/>
    <div className="text-center my-5">
      <p className="mb-4 lead" style={{ fontWeight: '500', fontSize: '1.2rem' }}>
        Trusted by 25,000+ world-class brands and organizations of all sizes
      </p>
      <div className="d-flex justify-content-center flex-wrap gap-4">
        {['https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/logo-11.png', 'https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/logo-3.png', 'https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/logo-3.png', 'https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/logo-11.png', 'https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/logo-3.png', 'https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/logo-11.png'].map((logo, index) => (
          <img
            key={index}
            src={`${logo}`} // Replace with actual paths to your logo images
            alt={`Brand Logo ${index + 1}`}
            className="img-fluid"
            style={{ maxHeight: '60px' }}
          />
        ))}
      </div>
    </div>
    </div>
     <HomePageNinthScreen/>
     </div>
  )
}

export default FAQ