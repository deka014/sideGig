import React, { useState, useEffect, useRef } from "react";
import basic from "../images/basic.png";
import basicPremium from "../images/basic-premium.png";
import basicLogo from "../images/basic-logo.png";

const mockCreativeData = [
  {
    id: 1,
    title: "Tea Bottle",
    description: "Class enim elementum litora platea dictum commodo vestibulum",
    imageUrl: "https://i.ibb.co/Z2vr3k2/ganesh.jpg",
    releaseDate: "2024-12-01",
  },
  {
    id: 2,
    title: "Bobo Furniture",
    description: "Class enim elementum litora platea dictum commodo vestibulum",
    imageUrl: "https://i.ibb.co/YdJsRCX/nationalsportsday.jpg",
    releaseDate: "2024-12-02",
  },
  {
    id: 3,
    title: "FitLife Gym",
    description: "Class enim elementum litora platea dictum commodo vestibulum",
    imageUrl: "https://i.ibb.co/fDQCNWq/TEACHERSDAY.jpg",
    releaseDate: "2024-12-03",
  },
  {
    id: 4,
    title: "Palash Pratim Dutta Jayanti",
    description: "Class enim elementum litora platea dictum commodo vestibulum",
    imageUrl: "https://i.ibb.co/LJjqPnS/apj.jpg",
    releaseDate: "2024-12-03",
  },
  {
    id: 5,
    title: "Pencil",
    description: "Class enim elementum litora platea dictum commodo vestibulum",
    imageUrl: "https://i.ibb.co/fDQCNWq/TEACHERSDAY.jpg",
    releaseDate: "2024-12-03",
  },
  {
    id: 6,
    title: "FitLife Gym",
    description: "Class enim elementum litora platea dictum commodo vestibulum",
    imageUrl: "https://i.ibb.co/2qJX9pG/rhino.jpg",
    releaseDate: "2024-12-03",
  },
  {
    id: 7,
    title: "This is a test",
    description: "Class enim elementum litora platea dictum commodo vestibulum",
    imageUrl: "https://i.ibb.co/fDQCNWq/TEACHERSDAY.jpg",
    releaseDate: "2024-12-03",
  },
  {
    id: 8,
    title: "YOLO",
    description: "Class enim elementum litora platea dictum commodo vestibulum",
    imageUrl: "https://i.ibb.co/2qJX9pG/rhino.jpg",
    releaseDate: "2024-12-03",
  },
];

const CreativeSelect = () => {
  const [selectedCreatives, setSelectedCreatives] = useState([]);
  const [previewCreative, setPreviewCreative] = useState(null); // Holds the creative for preview
  const [selectedFrame, setSelectedFrame] = useState(basic); // Default frame for canvas
  const canvasRef = useRef(null);

  const handleSelect = (id) => {
    if (selectedCreatives.includes(id)) {
      // Deselect if already selected
      setSelectedCreatives((prev) => prev.filter((creativeId) => creativeId !== id));
    } else if (selectedCreatives.length < 3) {
      // Add to selection if not selected and limit is not reached
      setSelectedCreatives((prev) => [...prev, id]);
    }
  };

  const handlePreview = (creative) => {
    setPreviewCreative(creative); // Set the creative for preview
  };

  const closePreview = () => {
    setPreviewCreative(null); // Close the preview
  };

  useEffect(() => {
    if (!previewCreative) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const loadImages = async () => {
      try {
        const [mainImage, frameImage] = await Promise.all([
          loadImage(previewCreative.imageUrl),
          loadImage(selectedFrame),
        ]);

        const maxCanvasWidth = 1000;
        const maxCanvasHeight = 1000;

        canvas.width = maxCanvasWidth;
        canvas.height = maxCanvasHeight;

        // Draw main image centered in the canvas
        ctx.drawImage(mainImage, 0, 0, canvas.width, canvas.height);

        // Overlay the frame
        ctx.drawImage(frameImage, 0, 0, canvas.width, canvas.height);
      } catch (error) {
        console.error("Error loading images:", error);
        ctx.fillStyle = "#FF0000";
        ctx.font = "20px Arial";
        ctx.textAlign = "center";
        ctx.fillText("Failed to load preview", canvas.width / 2, canvas.height / 2);
      }
    };

    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    };

    loadImages();
  }, [previewCreative, selectedFrame]);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">
        Select Your <span className="mark">Creatives</span>
      </h1>

      {/* Preview Overlay */}
      {previewCreative && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1050,
          }}
          onClick={closePreview} // Close modal when clicking outside
        >
          <div
            className="bg-white p-4 rounded shadow-lg"
            style={{
              maxWidth: "800px",
              width: "90%",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <div className="text-end">
              <button className="btn btn-danger mb-3" onClick={closePreview}>
                Close
              </button>
            </div>
            <div className="m-auto"
             style={{ maxWidth: "350px" }}
             >
              <canvas
                ref={canvasRef}
                className="img-fluid rounded mb-3"
                style={{ border: "1px solid #ccc" }}
              ></canvas>
            </div>

            <h3>{previewCreative.title}</h3>
            <p>{previewCreative.description}</p>

            {/* Frame Selection */}
            <div className="d-flex justify-content-between mt-3">
              <button
                className={`btn btn-outline-primary ${selectedFrame === basic ? "active" : ""}`}
                onClick={() => setSelectedFrame(basic)}
              >
                Frame 1
              </button>
              <button
                className={`btn btn-outline-success ${selectedFrame === basicPremium ? "active" : ""}`}
                onClick={() => setSelectedFrame(basicPremium)}
              >
                Frame 2
              </button>
              <button
                className={`btn btn-outline-danger ${selectedFrame === basicLogo ? "active" : ""}`}
                onClick={() => setSelectedFrame(basicLogo)}
              >
                Frame 3
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Creative Cards */}
      <div className="row text-start">
        {mockCreativeData.map((creative) => (
          <div key={creative.id} className="col-lg-4 col-md-6 mb-4">
            <div
              className={`card shadow-sm position-relative ${
                selectedCreatives.includes(creative.id) ? "border-primary" : ""
              }`}
              style={{
                cursor: "pointer",
                borderRadius: "15px",
                overflow: "hidden",
              }}
              onClick={() => handleSelect(creative.id)}
            >
              {/* Top Right Circular Icon */}
              <div
                className="position-absolute top-0 end-0 m-3 d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: selectedCreatives.includes(creative.id)
                    ? "#007bff"
                    : "#f1f1f1",
                  color: selectedCreatives.includes(creative.id) ? "#fff" : "#888",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <i
                  className={`bi ${
                    selectedCreatives.includes(creative.id) ? "bi-check" : "bi-arrow-up-right"
                  }`}
                  style={{ fontSize: "1.2rem" }}
                ></i>
              </div>

              {/* Image */}
              <img
                src={creative.imageUrl}
                className="card-img-top"
                alt={creative.title}
                style={{
                //   height: "350px",
                  objectFit: "cover",
                }}
              />

              {/* Card Body */}
              <div className="card-body">
                <h5 className="card-title">{creative.title}</h5>
                <p className="card-text text-muted">{creative.description}</p>
                <p className="card-text text-muted">
                  <small>Release Date: {new Date(creative.releaseDate).toDateString()}</small>
                </p>
                {/* Preview Button */}
                <button
                  className="btn btn-outline-primary btn-sm mt-3"
                  onClick={() => handlePreview(creative)}
                >
                  Preview
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="text-center mt-5">
        <button
          className="btn btn-primary btn-lg"
          disabled={selectedCreatives.length === 0}
          onClick={() => alert(`Selected Creatives: ${selectedCreatives.join(", ")}`)}
        >
          Confirm Selection
        </button>
      </div>
      {selectedCreatives.length === 3 && (
        <div className="text-center mt-3 text-danger">
          You have reached the maximum selection limit (3).
        </div>
      )}
    </div>
  );
};

export default CreativeSelect;
