import React, { useState, useEffect, useRef } from "react";
import basic from "../images/basic.png";
import basicPremium from "../images/basic-premium.png";
import basicLogo from "../images/basic-logo.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import ContentLoader from 'react-content-loader'
import authHeader from "../services/authHeader";
import handleError from "../services/handleError";
import {toast} from 'react-toastify';
// const mockCreativeData = [
//   {
//     eventId: 1,
//     title: "Tea Bottle",
//     description: "Class enim elementum litora platea dictum commodo vestibulum",
//     randomDesign: {
//       id : '1234',
//       imageUrl: "https://i.ibb.co/Z2vr3k2/ganesh.jpg",
//     },
//     eventDate: "2024-12-01",
//   },
//   {
//     eventId: 2,
//     title: "Bobo Furniture",
//     description: "Class enim elementum litora platea dictum commodo vestibulum",
//     randomDesign: {
//       id : '12345',
//       imageUrl: "https://i.ibb.co/YdJsRCX/nationalsportsday.jpg",
//     },
//     eventDate: "2024-12-02",
//   },
//   {
//     eventId: 3,
//     title: "FitLife Gym",
//     description: "Class enim elementum litora platea dictum commodo vestibulum",
//     randomDesign: {
//       id : '123456',
//       imageUrl: "https://i.ibb.co/fDQCNWq/TEACHERSDAY.jpg",
//     },
//     eventDate: "2024-12-03",
//   },
//   {
//     eventId: 4,
//     title: "Palash Pratim Dutta Jayanti",
//     description: "Class enim elementum litora platea dictum commodo vestibulum",
//     randomDesign: {
//       id : '1234567',
//       imageUrl: "https://i.ibb.co/LJjqPnS/apj.jpg",
//     },
//     eventDate: "2024-12-03",
//   },
//   {
//     eventId: 5,
//     title: "Pencil",
//     description: "Class enim elementum litora platea dictum commodo vestibulum",
//     randomDesign: {
//       id : '123456112',
//       imageUrl: "https://i.ibb.co/fDQCNWq/TEACHERSDAY.jpg",
//     },
//     eventDate: "2024-12-03",
//   },
//   {
//     eventId: 6,
//     title: "FitLife Gym",
//     description: "Class enim elementum litora platea dictum commodo vestibulum",
//     randomDesign: {
//       id : '123456234',
//       imageUrl: "https://i.ibb.co/2qJX9pG/rhino.jpg",
//     },
//     eventDate: "2024-12-03",
//   },
//   {
//     eventId: 7,
//     title: "This is a test",
//     description: "Class enim elementum litora platea dictum commodo vestibulum",
//     randomDesign: {
//       id : '123452346',
//       imageUrl: "https://i.ibb.co/fDQCNWq/TEACHERSDAY.jpg",
//     },
//     eventDate: "2024-12-03",
//   },
//   {
//     eventId: 8,
//     title: "YOLO",
//     description: "Class enim elementum litora platea dictum commodo vestibulum",
//     randomDesign: {
//       id : '123456',
//       imageUrl: "https://i.ibb.co/2qJX9pG/rhino.jpg",
//     },
//     eventDate: "2024-12-03",
//   },
// ];



const CreativeSelect = () => {
  const [Designs, setDesigns] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [selectedCreatives, setSelectedCreatives] = useState([]);
  const [previewCreative, setPreviewCreative] = useState(null); // Holds the creative for preview
  const [selectedFrame, setSelectedFrame] = useState(basic); // Default frame for canvas
  const canvasRef = useRef(null);

  const handlePlaceOrder = async()=>{
    try {
      // Placeholder for pricing and additional info
      const price = 100; // Example price
      const additionalInfo = "Additional details about the order";

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/place-order`,
        {
          selectedDesigns : selectedCreatives, // Send selected designs
          price, // Add pricing information
          additionalInfo, // Add any additional information
        },
        {
          headers: authHeader(), // Send the JWT token for authentication
        }
      );

      console.log("Order placed:", response.data);

      // Redirect to the order-received page
      window.location.href = `/order-received?orderId=${response.data.order.orderId}&eta=${response.data.order.estimatedDeliveryDate}`;
    } catch (error) {
      // Check if error response exists
      if (error.response && error.response.data && error.response.data.message) {
        console.error("Error placing order:", error.response.data.message);
        alert(error.response.data.message); // Show the message to the user
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from server:", error.request);
        alert("The server is currently unreachable. Please try again later.");
        window.location.href = `/order-received?orderId=testOrder&eta=${new Date().toISOString()}`;
      } else {
        // Something else went wrong in setting up the request
        console.error("Error placing order:", error.message);
        alert("An unexpected error occurred. Please try again later.");
      }
    }
  }


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
          loadImage(previewCreative.randomDesign.imageUrl),
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

  useEffect(()=>{
    async function fetchCreatives() {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/upcoming-events` , 
          {headers : {
            ...authHeader()
          }
        }
        )
        console.log('fetchCreatives response',response)
        setDesigns(response.data)
        setIsLoading(false)
      
      } catch (error) {
        setIsLoading(false)
        handleError(error)
        const errorMessage = error.response?.data?.message || 'An error occurred!';
        toast.error(errorMessage);
        // setDesigns(mockCreativeData) //For testing purposes because we dont have a live BE.
      }
    }
    fetchCreatives();
  },[])

  //loading skeleton
  const SkeletonCard = () => (
    <ContentLoader
      speed={2}
      width={300}
      height={400}
      viewBox="0 0 300 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="20" y="10" rx="10" ry="10" width="280" height="180" /> {/* Image */}
      <rect x="20" y="200" rx="5" ry="5" width="200" height="20" /> {/* Title */}
      <rect x="20" y="230" rx="5" ry="5" width="250" height="15" /> {/* Description */}
      <rect x="20" y="260" rx="5" ry="5" width="150" height="15" /> {/* Release Date */}
      <rect x="20" y="290" rx="5" ry="5" width="100" height="30" /> {/* Button */}
    </ContentLoader>
  );

  
  return (
    
    <div className="container py-5">
      <h1 className="text-center mb-5">
        Select Your <span className="mark">Creatives</span>
      </h1>
    {isLoading ? 
     (<div className="row">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <SkeletonCard />
            </div>
          ))}
      </div>) 
      : 
      (<div>
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
        {Designs?.map((creative) => (
          <div key={creative.eventId} className="col-lg-4 col-md-6 mb-4">
            <div
              className={`card shadow-sm position-relative ${
                selectedCreatives.includes(creative.randomDesign.id) ? "border-primary" : ""
              }`}
              style={{
                cursor: "pointer",
                borderRadius: "15px",
                overflow: "hidden",
              }}
              onClick={() => handleSelect(creative.randomDesign.id)}
            >
              {/* Top Right Circular Icon */}
              <div
                className="position-absolute top-0 end-0 m-3 d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: selectedCreatives.includes(creative.randomDesign.id)
                    ? "#007bff"
                    : "#f1f1f1",
                  color: selectedCreatives.includes(creative.randomDesign.id) ? "#fff" : "#888",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <i
                  className={`bi ${
                    selectedCreatives.includes(creative.randomDesign.id) ? "bi-check" : "bi-arrow-up-right"
                  }`}
                  style={{ fontSize: "1.2rem" }}
                ></i>
              </div>

              {/* Image */}
              <img
                src={creative.randomDesign.imageUrl}
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
                  <small>Release Date: {new Date(creative.eventDate).toDateString()}</small>
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
  onClick={handlePlaceOrder}
>
  Confirm Selection
</button>

      </div>
      {selectedCreatives.length === 3 && (
        <div className="text-center mt-3 text-danger">
          You have reached the maximum selection limit (3).
        </div>
      )}
    </div>)}
    </div>
  );
};

export default CreativeSelect;
