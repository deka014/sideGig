// src/components/Payment.js
import React, {useEffect } from 'react';
import { useNavigate , useLocation} from 'react-router-dom';
import authService from '../services/authService';

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  

  useEffect(() => {
    // Check if the user is authenticated and has a phone number
    if (!authService.getCurrentUser()){
      console.log("User not authenticated or phone number missing");
      navigate("/login");  // Redirect to login if not authenticated or phone number is missing
    }
  }, [navigate]);

  const handlePayment = () => {
    // TODO: Integrate payment gateway (PhonePe/GPay)
    // Simulate successful payment
    navigate('/confirmation');
  };

  return (
    <div>
      <h2>Payment {location.state?.test ? "test" : "nope"} </h2>
      <p>Proceed to secure payment gateway through PhonePe or Google Pay (GPay).</p>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default Payment;
