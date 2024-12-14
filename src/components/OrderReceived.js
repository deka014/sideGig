import React, { useEffect } from "react";
import HomePageNinthScreen from './homepage/HomePageNinthScreen';
import HomePageEigthScreen from './homepage/HomePageEigthScreen';
import { useNavigate, useLocation } from 'react-router-dom';

const OrderReceived = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract query parameters
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get("orderId") || "N/A";
  const eta = queryParams.get("eta")
    ? new Date(queryParams.get("eta")).toLocaleString()
    : "N/A";

  return (
    <div className="container text-center" style={{ padding: '20px' }}>
      <div
        className="mb-4"
        style={{
          borderRadius: '10px',
          padding: '30px',
        }}
      >
        <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
          We Received your <span style={{ color: '#FF3E6C' }}>{orderId}</span>
        </h3>
        <p style={{ fontSize: '18px', color: '#333', marginBottom: '5px' }}>
          Sit tight, your creatives will be delivered to your inbox by{' '}
          <span style={{ fontWeight: 'bold', color: '#FF3E6C' }}>{eta}</span>
        </p>
        <button
          className="btn btn-primary mt-3"
          onClick={() => {
            navigate('/orders-list');
          }}
        >
          View Orders List
        </button>
      </div>

      <HomePageEigthScreen />
      <HomePageNinthScreen />
    </div>
  );
};

export default OrderReceived;
