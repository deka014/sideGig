// src/components/Confirmation.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';

function Confirmation() {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/content-submission');
  };

  const downloadScreenshot = async () => {
    const element = document.getElementById('confirmation-screen');
    if (element) {
      // Capture the screenshot of the element
      const canvas = await html2canvas(element, { scale: 2 });
      const image = canvas.toDataURL('image/png');

      // Create a temporary anchor to download the screenshot
      const link = document.createElement('a');
      link.href = image;
      link.download = 'Payment_Confirmation.png';
      document.body.appendChild(link);
      link.click();

      // Clean up by removing the temporary anchor
      document.body.removeChild(link);
    }
  };

  return (
    <div
      id="confirmation-screen" // Add an ID to the container for screenshot
      className="d-flex align-items-center justify-content-center px-md-5 py-5"
      style={{
        // minHeight: '100vh',
        // backgroundColor: '#3b7ae3',
      }}
    >
      {/* Main Card Container */}
      <div
        className="rounded shadow-lg"
        style={{
          maxWidth: '400px',
          width: '100%',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        {/* Profile Section */}
        <div
          style={{
            padding: '40px 20px',
            backgroundColor: '#3b7ae3',
            color: '#ffffff',
          }}
        >
          <h2 style={{ fontSize: '2rem', margin: 0 }}>$10,000</h2>
          <p className="mb-1" style={{ fontSize: '1rem', color: '#c1d1f3' }}>Paid to</p>
          <p style={{ fontSize: '1.25rem', fontWeight: '600' }}>Marti Valencia</p>
          <button
            className="btn btn-outline-light"
            style={{
              borderRadius: '20px',
              padding: '8px 20px',
              fontSize: '0.9rem',
            }}
          >
            Transferred to home
          </button>
        </div>

        {/* Payment Details Section */}
        <div style={{ padding: '20px' }}>
          <div
            className="rounded shadow-sm p-3 mb-3"
            style={{
              backgroundColor: '#f8f9fa',
              textAlign: 'left',
              fontSize: '0.9rem',
              lineHeight: '1.4',
            }}
          >
            <div className="d-flex align-items-center mb-2">
              <span className="badge bg-success me-2" style={{ width: '24px', height: '24px' }}>
                ✓
              </span>
              <div>
                <p className="m-0">Paid $10,000</p>
                <p className="m-0 text-muted">Today at 8:23 AM</p>
              </div>
            </div>
            <hr />
            <p className="m-0">
              <strong>UPI Transaction ID:</strong> 0987654321
            </p>
            <p className="m-0">
              <strong>To:</strong> **** 5789
            </p>
            <hr />
            <p className="m-0">
              <strong>UPI Transaction ID:</strong> 0987654321
            </p>
          </div>

          <button
            className="btn btn-outline-primary w-100 mb-2"
            onClick={downloadScreenshot}
            style={{
              borderRadius: '20px',
              fontWeight: '600',
              padding: '10px',
            }}
          >
            Download Receipt
          </button>

          <button
            className="btn btn-outline-primary w-100"
            onClick={handleProceed}
            style={{
              borderRadius: '20px',
              fontWeight: '600',
              padding: '10px',
            }}
          >
            Continue
          </button>

          <p className="mt-3 text-muted" style={{ fontSize: '0.8rem' }}>
            Payments may take up to 3 working days to be reflected in your account.
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="GPay"
            style={{ width: '60px', marginTop: '10px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
