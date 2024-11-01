// src/components/Login.js
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const {userState, setUserState} = useContext(UserContext);

  const sendOtp = () => {
    // TODO: Integrate OTP sending via backend API
    setOtpSent(true);
  };

  const verifyOtp = () => {
    // TODO: Integrate OTP verification via backend API

    setUserState({
      ...userState,
      isAuthenticated: true,
      phoneNumber: phoneNumber,
    });

    console.log(userState);

    navigate('/pricing');
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center py-5 px-md-5"
      style={{
        background: 'linear-gradient(to bottom, #f5e1ff, #ffffff)',
      }}
    >
      <div className="row w-100 align-items-center">
        {/* Left Section: Login Form */}
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div
            className="p-4 rounded shadow bg-white"
            style={{
              maxWidth: '350px',
              width: '100%',
            }}
          >
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '20px', color: '#333' }}>
              Get going with Ride On
            </h2>

            {!otpSent ? (
              <>
                <div
                  className="d-flex align-items-center mb-4"
                  style={{
                    borderBottom: '1px solid #ddd',
                  }}
                >
                  <span style={{ fontSize: '1rem', marginRight: '10px', color: '#555' }}>+91</span>
                  <input
                    type="text"
                    placeholder="Enter your mobile number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    style={{
                      width: '100%',
                      border: 'none' ,
                      outline: 'none',
                      padding: '10px 0',
                      fontSize: '1rem',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                <button
                  onClick={sendOtp}
                  className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: '#2d2a6e',
                    fontWeight: '600',
                    borderRadius: '5px',
                    padding: '10px',
                  }}
                >
                  Next <span style={{ fontSize: '1.2rem', marginLeft: '5px' }}>&#x2192;</span>
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  style={{
                    width: '100%',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    padding: '10px',
                    marginBottom: '20px',
                    fontSize: '1rem',
                  }}
                />
                <button
                  onClick={verifyOtp}
                  className="btn btn-primary w-100"
                  style={{
                    backgroundColor: '#2d2a6e',
                    fontWeight: '600',
                    borderRadius: '5px',
                    padding: '10px',
                  }}
                >
                  Verify OTP
                </button>
              </>
            )}

            <p style={{ fontSize: '0.8rem', color: '#777', marginTop: '15px' }}>
              By continuing you may receive an SMS for verification. Message and data rates may apply.
            </p>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="col-12 col-md-6 text-center d-none d-md-block">
          <img
            src="https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/img_1.png" // Replace with actual URL
            alt="User with phone"
            style={{
              maxWidth: '16rem',
              height: 'auto',
              // borderRadius: '50%',
              // transform: 'translateY(10%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
