import React, { useEffect } from "react";
import HomePageNinthScreen from './homepage/HomePageNinthScreen';
import HomePageEigthScreen from './homepage/HomePageEigthScreen';


const OrderReceived = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);
  return (
    
    <div className="container text-center" style={{ padding: '20px' }}>
      <div className='mb-4'
        style={{
        //   background: 'linear-gradient(to bottom, #FFD6E7, #FFFFFF)',
          borderRadius: '10px',
          padding: '30px',
        //   boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
          We Received your <span style={{ color: '#FF3E6C' }}>Order KY1KA2023</span>
        </h3>
        <p style={{ fontSize: '18px', color: '#333', marginBottom: '5px' }}>
          Sit tight, your creatives will be delivered to your inbox between{' '}
          <span style={{ fontWeight: 'bold', color: '#FF3E6C' }}>9.00am-11.00am</span>
        </p>
      </div>

      <HomePageEigthScreen />
      <HomePageNinthScreen />
    </div>
  );
}

export default OrderReceived;
