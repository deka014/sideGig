import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import frame1 from '../images/basic.png';
import frame2 from '../images/basic-premium.png';
import frame3 from '../images/basic-logo.png';
import rhino from '../images/rhino.jpg';
import authHeader from '../services/authHeader';

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

  const[isSubmitting,setIsSubmitting] = useState(false)
  const[error,setError] = useState({isError:false,message:''})
  const[submitSuccess,setSubmitSuccess] = useState(false)
  const [selectedPreviews, setSelectedPreviews] = useState([0]); // Preview 1 pre-selected by default

  const canvasRefs = useRef([]);

  const handleInputChange = (e) => {
    if(submitSuccess) {setSubmitSuccess(false); setError({isError:false,message:''})}
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  function validateFields() { //needs to be replaced with a validator (ZOD or react-hook-form)
    const {name,title} = formData
    if(!name || !title) {
      setError({isError:true,message:'YourName and Title fields are required'})
      return false;
    }
    else{
      setError({isError:false,message:''})
      return true;
    }
  }

  const handleSubmit = async () => {
    setSubmitSuccess(false)

    const isValid = validateFields();
    if(!isValid) {return}

    setIsSubmitting(true)

    const formDataToSubmit = new FormData() //formDataToSubmit is a FormData object.
    
    for (const key in formData) { //iterating through the formDataToSubmit object
      formDataToSubmit.append(key,formData[key])
    }

    formDataToSubmit.append('selectedPreviews', JSON.stringify(selectedPreviews)) //append selected previews

    try {
      const response = await fetch('http://localhost:4000/api/content-submission',{
        method:'POST',
        headers:{
          ...authHeader()
        },
        body:formDataToSubmit
      })
      const responseBody = await response.json();
      if(!response.ok) {
        console.log(responseBody)
        throw responseBody;
      }
      console.log(responseBody)
      setSubmitSuccess(true)
      setFormData({
        name: '',
        title: '',
        logo: null,
        photo: null,
        facebook: '',
        instagram: '',
        thread: '',
        xlink: '',
        website: '',
      })
    } catch (error) {
      console.log(error);
      setError({isError:true,message:error.error || 'Filed to submit form'})
    } finally {
      setIsSubmitting(false)
    }
  };

  const handlePreviewClick = (index) => {
    setSelectedPreviews((prevSelected) => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter((i) => i !== index);
      } else {
        return [...prevSelected, index];
      }
    });
  };

  const renderCanvas = async (index, frame, image) => {
    const canvas = canvasRefs.current[index];
    if (!canvas) return;
  
    const ctx = canvas.getContext('2d');
  
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
        img.src = src;
      });
    };
  
    try {
      const [mainImage, frameImage] = await Promise.all([
        loadImage(image),
        loadImage(frame),
      ]);
  
      const maxCanvasWidth = 1000; // Max canvas dimensions
      const maxCanvasHeight = 500;
  
      // Get frame aspect ratio and dimensions
      const frameAspectRatio = frameImage.width / frameImage.height;
  
      // Set canvas size based on frame aspect ratio
      canvas.width = maxCanvasWidth;
      canvas.height = maxCanvasWidth / frameAspectRatio;
  
      // Calculate main image dimensions to fit within the frame
      const mainImageAspectRatio = mainImage.width / mainImage.height;
      let mainImageWidth, mainImageHeight;
  
      if (mainImageAspectRatio > frameAspectRatio) {
        // Main image is wider than the frame
        mainImageWidth = canvas.width;
        mainImageHeight = canvas.width / mainImageAspectRatio;
      } else {
        // Main image is taller or equal in aspect ratio
        mainImageHeight = canvas.height;
        mainImageWidth = canvas.height * mainImageAspectRatio;
      }
  
      // Center the main image within the frame
      const mainImageX = (canvas.width - mainImageWidth) / 2;
      const mainImageY = (canvas.height - mainImageHeight) / 2;
  
      // Clear canvas before rendering
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Draw the main image
      // ctx.drawImage(mainImage, mainImageX, mainImageY, mainImageWidth, mainImageHeight);
  
      // Draw the frame over the main image
      ctx.drawImage(frameImage, 0, 0, canvas.width, canvas.height);
    } catch (error) {
      console.error('Error loading images:', error);
      ctx.fillStyle = '#FF0000';
      ctx.font = '20px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        'Failed to load images',
        canvas.width / 2,
        canvas.height / 2
      );
    }
  };
  
  
  useEffect(() => {
    const frames = [frame1, frame2, frame3];
    frames.forEach((frame, idx) => {
      renderCanvas(idx, frame, rhino);
    });
  }, []);


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
        {[...Array(3)].map((_, idx) => (
          <div
            key={idx}
            onClick={() => handlePreviewClick(idx)}
            className={` mx-md-1 col-lg-4 col-sm-12 d-flex align-items-center justify-content-center position-relative ${selectedPreviews.includes(idx) ? 'border-primary' : 'border-secondary'}`}
            style={{
              // maxHeight: '400px',
              maxWidth: '400px',
              borderRadius: '10px',
              backgroundColor: selectedPreviews.includes(idx) ? '#e0f7fa' : '#f1f1f1',
              border: selectedPreviews.includes(idx) ? '2px solid #007bff' : '1px solid #ddd',
              textAlign: 'center',
              cursor: 'pointer',
              boxShadow: selectedPreviews.includes(idx) ? '0 4px 12px rgba(0, 123, 255, 0.4)' : '0 2px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, background-color 0.2s',
            }}
          >
            <canvas
              ref={(el) => (canvasRefs.current[idx] = el)}
              style={{
                display: 'block',
                maxWidth: '100%',
                maxHeight: '100%',
                borderRadius: '10px',
                padding : '3px',
              }}
            >

            </canvas>

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
        {
        error.isError && (
          <div style={{color: 'red',fontSize:'0.85rem', textAlign:"center"}}>{error.message}</div>)
        }
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
              id='fileinput1'
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
            id='fileinput2'
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

        {/* ... other input fields ... */}

        <div className="text-center mt-5">
          <button
            onClick={handleSubmit}
            className="btn btn-primary w-50"
            style={{
              borderRadius: '25px',
              padding: '12px 20px',
              backgroundColor: `${isSubmitting ? '#00a8ff' : '#3b7ae3' }`,
              fontWeight: '700',
              fontSize: '1rem',
            }}
            disabled={isSubmitting}
          >
            { isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
        {submitSuccess && <div style={{textAlign:"center", fontSize:'0.8rem', color: 'green'}}><p>Form Submitted Successfully</p></div>}
      </div>
    </div>
  );
}

export default ContentSubmission;
