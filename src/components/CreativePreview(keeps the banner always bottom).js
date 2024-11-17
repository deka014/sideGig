import React, { useEffect, useRef, useState } from 'react';
import frame1 from '../images/banner1.png';
import frame2 from '../images/banner2.png';
import frame3 from '../images/banner3.png';
import basiclogo from '../images/basic-logo.png';
import basic from '../images/basic.png';
import basicPremium from '../images/basic-premium.png';

const CreativePreview = ({
  mainImageSrc = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}) => {
  const canvasRef = useRef(null);
  const [selectedFrame, setSelectedFrame] = useState(basic); // Default frame
  const [instructions, setInstructions] = useState(''); // Additional instructions

  useEffect(() => {
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

        const maxCanvasWidth = 800; // Max canvas dimensions
        const maxCanvasHeight = 600;

        const mainImageAspectRatio = mainImage.width / mainImage.height;
        let canvasWidth, canvasHeight;

        if (mainImage.width > mainImage.height) {
          canvasWidth = maxCanvasWidth;
          canvasHeight = maxCanvasWidth / mainImageAspectRatio;
        } else {
          canvasHeight = maxCanvasHeight;
          canvasWidth = maxCanvasHeight * mainImageAspectRatio;
        }

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        // Draw the scaled main image
        ctx.drawImage(mainImage, 0, 0, canvasWidth, canvasHeight);

        // Scale the frame image to fit the canvas width while preserving its aspect ratio
        const frameAspectRatio = frameImage.width / frameImage.height;
        const frameWidth = canvasWidth;
        const frameHeight = canvasWidth / frameAspectRatio;

        // Position the frame at the bottom of the canvas
        const frameX = 0; // Always aligned to the left edge
        const frameY = canvasHeight - frameHeight; // Align the bottom edge

        ctx.drawImage(frameImage, frameX, frameY, frameWidth, frameHeight);
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
        <h2 className="m-4">Creative Preview</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
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
        <div className="col-12 col-lg-6 text-center">
          <p className="mb-4"><strong>Choose a Frame:</strong></p>
          <div className="d-flex justify-content-between">
            <button
              className={`btn btn-outline-primary ${selectedFrame === basic ? 'active' : ''}`}
              onClick={() => setSelectedFrame(basic)}
            >
              Frame 1
            </button>
            <button
              className={`btn btn-outline-success ${selectedFrame === basiclogo ? 'active' : ''}`}
              onClick={() => setSelectedFrame(basiclogo)}
            >
              Frame 2
            </button>
            <button
              className={`btn btn-outline-danger ${selectedFrame === basicPremium ? 'active' : ''}`}
              onClick={() => setSelectedFrame(basicPremium)}
            >
              Frame 3
            </button>
            <button
              className={`btn btn-outline-danger ${selectedFrame === frame1 ? 'active' : ''}`}
              onClick={() => setSelectedFrame(frame1)}
            >
              Frame 4
            </button>
          </div>
        </div>
      </div>

      {/* Title and Description */}
      <div className="row justify-content-center mb-2">
        <div className="col-12 col-lg-6">
          <h3 className="text-start mb-4">Happy Autumn</h3>
          <p className="text-muted text-start">
            This creative represents a beautiful design that blends functionality and aesthetics.
            It is a perfect example of how creativity can enhance user engagement.
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
