import React, { useEffect, useRef, useState } from 'react';
import basic from '../images/basic.png';
import rhino from '../images/rhino.jpg';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import authHeader from '../services/authHeader';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

const dummyOrderData = {
  orderId: 'ORD-202412141714-HVFEEU',
  selectedDesigns: [
    {
      designId: '6751ea5f6bacbdb9fa33eb3c',
      designImage: rhino
    },
    {
      designId: '675c689e82da62409d6dc3ed',
      designImage: 'https://i.ibb.co/YdJsRCX/nationalsportsday.jpg',
    },
  ],
  orderPreviewUrl: basic,
};

const OrderViewPage = () => {
  const { orderId } = useParams(); // Retrieve the orderId from the route params
  const [orderData, setOrderData] = useState(null); // Store fetched order data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const canvasRefs = useRef([]);

  // Fetch order details from the API
  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:4000/api/view-order/${orderId}`, {
        // Add the authorization header here
        headers : {
          ...authHeader()
        }
      });
        setOrderData(response.data.order);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setOrderData(dummyOrderData);
        setLoading(false);
      }
    };
    fetchOrderData();
  }, [orderId]);

  // Render overlay on canvases
  useEffect(() => {
    if (!orderData || !orderData.selectedDesigns) return;

    orderData.selectedDesigns.forEach((design, index) => {
      const canvas = canvasRefs.current[index];
      const ctx = canvas.getContext('2d');

      const loadImages = async () => {
        try {
          const [designImage, overlayImage] = await Promise.all([
            loadImage(design.designImage),
            loadImage(orderData.orderPreviewUrl || ''),
          ]);

          canvas.width = designImage.width;
          canvas.height = designImage.height;

          // Draw the base design
          ctx.drawImage(designImage, 0, 0, canvas.width, canvas.height);

          // Draw the overlay if available
          if (orderData.orderPreviewUrl) {
            const scaleX = designImage.width / overlayImage.width;
            const scaleY = designImage.height / overlayImage.height;
            const scale = Math.min(scaleX, scaleY);

            const x = (designImage.width - overlayImage.width * scale) / 2;
            const y = (designImage.height - overlayImage.height * scale) / 2;

            ctx.drawImage(
              overlayImage,
              x,
              y,
              overlayImage.width * scale,
              overlayImage.height * scale
            );
          }
        } catch (error) {
          console.error('Error loading images:', error);
          ctx.fillStyle = '#FF0000';
          ctx.font = '20px Arial';
          ctx.textAlign = 'center';
          ctx.fillText('Failed to load images', canvas.width / 2, canvas.height / 2);
        }
      };

      const loadImage = (src) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        });

      loadImages();
    });
  }, [orderData]);

  const handleDownload = (canvas, title) => {
    const url = canvas.toDataURL('image/jpeg', 1.0);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">
        Content <span className="mark">Delivery</span>
      </h1>

      <div className="row g-4 text-start">
        {orderData.selectedDesigns.map((design, index) => (
          <div key={design.designId} className="col-lg-4 col-md-6 col-12">
            <div className="card h-100 shadow-sm" style={{ borderRadius: '15px' }}>
              {/* Canvas for Design with Overlay */}
              <canvas
                ref={(el) => (canvasRefs.current[index] = el)}
                className="card-img-top"
                style={{
                  width: '100%',
                  borderTopLeftRadius: '15px',
                  borderTopRightRadius: '15px',
                }}
              />

              {/* Card Footer */}
              <div className="card-footer d-flex justify-content-between align-items-center">
                {/* Social Share Buttons */}
                <FacebookShareButton
                  url={design.designImage}
                  quote={`Check out this design from order ${orderData.orderId}`}
                  hashtag="#CreativeDesign"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>

                <TwitterShareButton
                  url={design.designImage}
                  title={`Creative design from order ${orderData.orderId}`}
                  hashtags={['CreativeDesign']}
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>

                <WhatsappShareButton
                  url={design.designImage}
                  title={`Creative design from order ${orderData.orderId}`}
                  separator=":: "
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>

                {/* Download Button */}
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() =>
                    handleDownload(canvasRefs.current[index], `Design ${index + 1}`)
                  }
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderViewPage;
