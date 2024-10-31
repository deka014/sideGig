// src/components/Payment.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const navigate = useNavigate();

  const handlePayment = () => {
    // TODO: Integrate payment gateway (PhonePe/GPay)
    // Simulate successful payment
    navigate('/confirmation');
  };

  return (
    <div>
      <h2>Payment</h2>
      <p>Proceed to secure payment gateway through PhonePe or Google Pay (GPay).</p>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default Payment;
