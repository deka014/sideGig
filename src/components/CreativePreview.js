import React, { useEffect, useRef, useState } from 'react';
import frame1 from '../images/banner1.png';
import frame2 from '../images/banner2.png';
import frame3 from '../images/banner3.png';
import basiclogo from '../images/basic-logo.png';
import basic from '../images/basic.png';
import basicPremium from '../images/basic-premium.png';
import rhino from '../images/rhino.jpg';
import { useLocation, useNavigate } from "react-router-dom";

const CreativePreview = () => {

  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve event data from state, or provide fallback values
  const { state } = location;
  console.log(state);

  // if(state == null) {
  //   navigate('/select-creative');
  // }

  const eventData = state || {
    image: rhino,
    title: "Default Title",
    description: "Default Description",
  };
  


  const mainImageSrc = eventData.image;
  const eventTitle = eventData.title;
  const eventDescription = eventData.description;

  const canvasRef = useRef(null);
  const [selectedFrame, setSelectedFrame] = useState(basic); // Default frame
  const [instructions, setInstructions] = useState(''); // Additional instructions

  useEffect(() => {

    if (!state) {
      navigate("/select-creative", { replace: true }); // Redirect to home or any default page
    }

    let isMounted = true;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const loadImages = async () => {
      try {
        const [mainImage, frameImage] = await Promise.all([
          loadImage(mainImageSrc),
          loadImage(selectedFrame),
        ]);

        if (!isMounted) return;

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

        // Draw the main image
        ctx.drawImage(mainImage, mainImageX, mainImageY, mainImageWidth, mainImageHeight);

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

    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
        img.src = src;
      });
    };

    loadImages();

    return () => {
      isMounted = false;
    };
  }, [mainImageSrc, selectedFrame]);

  return (
    <div className="container my-3 mb-4">
      {/* Preview Section */}
      <div className="text-center mb-5">
        <h3 className="m-4">Creative <span className='mark'>Preview</span> </h3>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-4">
            <canvas
              ref={canvasRef}
              className="img-fluid m-auto shadow rounded"
              style={{ display: 'block', border: '2px solid #ccc' }}
            />
          </div>
        </div>
      </div>
      {/* Notes Section */}
      <div className="row justify-content-center mb-2">
        <div className="col-12  col-lg-6 text-start">
          <p className="text-muted">
            <strong>Note:</strong> The preview above is just an example. You can request multiple revisions
            for the final product from the designer.
          </p>
        </div>
      </div>

      {/* Frame Selection */}
      <div className="row justify-content-center mb-5">
        <div className="col-12 col-lg-6 text-start">
          <p className="mb-4"><strong>Choose a Frame:</strong></p>
          <div className="d-flex justify-content-md-center justify-content-between">
            <button
              className={`btn btn-outline-primary me-md-4 ${selectedFrame === basic ? 'active' : ''}`}
              onClick={() => setSelectedFrame(basic)}
            >
              Frame 1
            </button>
            <button
              className={`btn btn-outline-success me-md-4 ${selectedFrame === basicPremium? 'active' : ''}`}
              onClick={() => setSelectedFrame(basicPremium)}
            >
              Frame 2
            </button>
            <button
              className={`btn btn-outline-danger me-md-4 ${selectedFrame === basiclogo? 'active' : ''}`}
              onClick={() => setSelectedFrame(basiclogo)}
            >
              Frame 3
            </button>
            {/* <button
              className={`btn btn-outline-danger ${selectedFrame === frame1 ? 'active' : ''}`}
              onClick={() => setSelectedFrame(frame1)}
            >
              Frame 4
            </button> */}
          </div>
        </div>
      </div>

      {/* Title and Description */}
      <div className="row justify-content-center mb-2">
        <div className="col-12 col-lg-6">
          <h3 className="text-start mb-4">{eventTitle}</h3>
          <p className="text-muted text-start">
           {eventDescription}
          </p>
        </div>
      </div>

      {/* Additional Instructions Section */}
      <div className="row justify-content-center mb-4 text-start">
        <div className="col-12 col-lg-6">
          <label htmlFor="instructions" className="form-label mb-3">
            <strong>(Optional) Additional Instructions for the Designer</strong>
          </label>
          <textarea
            id="instructions"
            className="form-control"
            rows="4"
            placeholder="Explain your Requirements..."
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>
        </div>
      </div>

      {/* Place Order Button */}
      <div className="row justify-content-center">
        <div className="col-12 col-lg-6 text-center">
          <button
            className="btn btn-primary btn-lg w-100 shadow"
            onClick={() => alert(`Instructions: ${instructions}`)}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreativePreview;
