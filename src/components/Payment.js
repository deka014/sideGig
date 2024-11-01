// src/components/Payment.js
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function Payment() {
  const navigate = useNavigate();
  const {userState} = useContext(UserContext);
  

  useEffect(() => {
    // Check if the user is authenticated and has a phone number
    console.log(userState);
    if (!userState.isAuthenticated || !userState.phoneNumber) {
      console.log("User not authenticated or phone number missing");
      navigate("/login");  // Redirect to login if not authenticated or phone number is missing
    }
  }, [userState, navigate]);

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
