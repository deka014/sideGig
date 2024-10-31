// src/components/ContentSubmission.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContentSubmission() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    logo: null,
    photo: null,
    facebook: '',
    instagram: '',
    thread: '',
    xlink: '',
    website: '',
  });

  const [selectedPreviews, setSelectedPreviews] = useState([0]); // Preview 1 pre-selected by default
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = () => {
    // TODO: Submit formData to backend
    navigate('/');
  };

  const handlePreviewClick = (index) => {
    setSelectedPreviews((prevSelected) => {
      if (prevSelected.includes(index)) {
        // If already selected, remove it
        return prevSelected.filter((i) => i !== index);
      } else {
        // If not selected, add it
        return [...prevSelected, index];
      }
    });
  };

  return (
    <div
      className="container py-5"
      style={{
        background: 'linear-gradient(rgb(245, 225, 255), rgb(255, 255, 255))',
        borderRadius: '15px',
        margin: 'auto',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 className="text-center mb-4" style={{ fontWeight: '700', color: '#333' }}>
        Welcome! Let’s Know Your Requirements
      </h2>

      {/* Image Preview Section */}
      <div className="row mb-5 justify-content-center g-3">
        {[...Array(5)].map((_, idx) => (
          <div
            key={idx}
            onClick={() => handlePreviewClick(idx)}
            className={`mx-1 col-lg-2 col-md-4 col-sm-12 d-flex align-items-center justify-content-center position-relative ${selectedPreviews.includes(idx) ? 'border-primary' : 'border-secondary'}`}
            style={{
              height: '100px',
              borderRadius: '10px',
              backgroundColor: selectedPreviews.includes(idx) ? '#e0f7fa' : '#f1f1f1',
              border: selectedPreviews.includes(idx) ? '2px solid #007bff' : '1px solid #ddd',
              textAlign: 'center',
              cursor: 'pointer',
              boxShadow: selectedPreviews.includes(idx) ? '0 4px 12px rgba(0, 123, 255, 0.4)' : '0 2px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, background-color 0.2s',
            }}
          >
            <p style={{ fontSize: '0.8rem', margin: 0, color: '#666' }}>Preview {idx + 1}</p>

            {/* Checkmark overlay when selected */}
            {selectedPreviews.includes(idx) && (
              <span
                className="position-absolute top-0 end-0 m-1 bg-primary rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '24px',
                  height: '24px',
                  color: 'white',
                  fontSize: '1rem',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                }}
              >
                ✓
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Input Fields Section */}
      <div className="row g-4">
        {/* Row 1 */}
        <div className="col-md-4 col-12">
          <div className="p-3 rounded shadow-sm" style={{ backgroundColor: '#fafafa' }}>
            <label className="form-label" style={{ fontSize: '0.85rem', color: '#888' }}>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-control"
              style={{ borderRadius: '8px', fontSize: '0.9rem', padding: '10px' }}
            />
          </div>
        </div>
        
        <div className="col-md-4 col-12">
          <div className="p-3 rounded shadow-sm" style={{ backgroundColor: '#fafafa' }}>
            <label className="form-label" style={{ fontSize: '0.85rem', color: '#888' }}>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleInputChange}
              className="form-control"
              style={{ borderRadius: '8px', fontSize: '0.9rem', padding: '10px' }}
            />
          </div>
        </div>
        
        <div className="col-md-4 col-12">
          <div className="p-3 rounded shadow-sm" style={{ backgroundColor: '#fafafa' }}>
            <label className="form-label" style={{ fontSize: '0.85rem', color: '#888' }}>Upload Your Photo</label>
            <input
              type="file"
              name="photo"
              onChange={handleInputChange}
              className="form-control"
              style={{ borderRadius: '8px' }}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="col-md-4 col-12">
          <div className="p-3 rounded shadow-sm" style={{ backgroundColor: '#fafafa' }}>
            <label className="form-label" style={{ fontSize: '0.85rem', color: '#888' }}>Upload Your Logo</label>
            <input
              type="file"
              name="logo"
              onChange={handleInputChange}
              className="form-control"
              style={{ borderRadius: '8px' }}
            />
          </div>
        </div>
        
        <div className="col-md-4 col-12">
          <div className="p-3 rounded shadow-sm" style={{ backgroundColor: '#fafafa' }}>
            <label className="form-label" style={{ fontSize: '0.85rem', color: '#888' }}>Facebook Link</label>
            <input
              type="text"
              name="facebook"
              placeholder="Facebook Link"
              value={formData.facebook}
              onChange={handleInputChange}
              className="form-control"
              style={{ borderRadius: '8px', fontSize: '0.9rem', padding: '10px' }}
            />
          </div>
        </div>
        
        <div className="col-md-4 col-12">
          <div className="p-3 rounded shadow-sm" style={{ backgroundColor: '#fafafa' }}>
            <label className="form-label" style={{ fontSize: '0.85rem', color: '#888' }}>X Link</label>
            <input
              type="text"
              name="xlink"
              placeholder="X Link"
              value={formData.xlink}
              onChange={handleInputChange}
              className="form-control"
              style={{ borderRadius: '8px', fontSize: '0.9rem', padding: '10px' }}
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="col-md-4 col-12">
          <div className="p-3 rounded shadow-sm" style={{ backgroundColor: '#fafafa' }}>
            <label className="form-label" style={{ fontSize: '0.85rem', color: '#888' }}>Instagram Link</label>
            <input
              type="text"
              name="instagram"
              placeholder="Instagram Link"
              value={formData.instagram}
              onChange={handleInputChange}
              className="form-control"
              style={{ borderRadius: '8px', fontSize: '0.9rem', padding: '10px' }}
            />
          </div>
        </div>
        
        <div className="col-md-4 col-12">
          <div className="p-3 rounded shadow-sm" style={{ backgroundColor: '#fafafa' }}>
            <label className="form-label" style={{ fontSize: '0.85rem', color: '#888' }}>Thread Link</label>
            <input
              type="text"
              name="thread"
              placeholder="Thread Link"
              value={formData.thread}
              onChange={handleInputChange}
              className="form-control"
              style={{ borderRadius: '8px', fontSize: '0.9rem', padding: '10px' }}
            />
          </div>
        </div>
        
        <div className="col-md-4 col-12">
          <div className="p-3 rounded shadow-sm" style={{ backgroundColor: '#fafafa' }}>
            <label className="form-label" style={{ fontSize: '0.85rem', color: '#888' }}>Website or WhatsApp Link</label>
            <input
              type="text"
              name="website"
              placeholder="Website or WhatsApp Link"
              value={formData.website}
              onChange={handleInputChange}
              className="form-control"
              style={{ borderRadius: '8px', fontSize: '0.9rem', padding: '10px' }}
            />
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <button
          onClick={handleSubmit}
          className="btn btn-primary w-50"
          style={{
            borderRadius: '25px',
            padding: '12px 20px',
            backgroundColor: '#3b7ae3',
            fontWeight: '700',
            fontSize: '1rem',
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContentSubmission;
