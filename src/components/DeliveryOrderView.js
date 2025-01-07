import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import authHeader from '../services/authHeader';

const DeliveryOrderView = () => {

  const {orderId} = useParams();
  const id = orderId.replace(':',''); 

  const [frameUrl, setFrameUrl] = useState('');
  const [isFrameSubmitted, setIsFrameSubmitted] = useState(false);
  const [AssignedOrderWithLatestContentSubmission,setAssignedOrderWithLatestContentSubmission] = useState()
  const [orderPreviewUrl, setOrderPreviewUrl] = useState(
    '' // Placeholder URL
  );
  const [editSuccess,setEditSuccess]  =useState(false)
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);

  const dummyOrderData = {
    orderId: 'ORD123456',
    status: 'Confirmed',
    estimatedDeliveryDate: '2024-12-13T10:44:17.648Z',
    createdAt: '2024-12-06T10:44:17.650Z',
    contentSubmission: {
      name: 'John Doe',
      title: 'Promotional Campaign',
      logo: 'https://plus.unsplash.com/premium_photo-1709311448806-fd5bec585626?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder logo
      photo: 'https://res.cloudinary.com/generative-ai-demos/image/upload/v1722014427/bgr/bgr1_mhjw0n.jpg', // Placeholder photo
      facebook: 'facebook.com/johndoe',
      instagram: 'instagram.com/johndoe',
      website: 'www.johndoe.com',
    },
    orderPreviewUrl : null, // Placeholder URL
  };

  const handleFrameUpload = async () => {
    if (!frameUrl) {
      alert('Please provide a valid frame URL.');
      return;
    }
    const data = {orderPreviewUrl:frameUrl}

    try {
      const response = await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/api/delivery/view-order/update-orderPreviewUrl/${id}`,data,
        {
          headers:{ 
            ...authHeader()
          }
        }
      )
      if(response.data) {
        setOrderPreviewUrl(response.data.orderPreviewUrl);
        setIsFrameSubmitted(true);
        setEditSuccess(true)
      }
    } catch (error) {
      console.log('ERROR in handleFrameUpload',error)
    }
  };

  const handleCompleteOrder = async () => {
    if (!orderPreviewUrl) {
      alert('Please upload the frame URL before completing the order.');
      return;
    }
    const data = {status:'Delivered'}
    try {
      const response = await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/api/delivery/view-order/update-status/${id}`,data,
        {
          headers:{ 
            ...authHeader()
          }
        }
      )
      if(response.data) {
        setIsOrderCompleted(true)
        setOrderPreviewUrl('')
      }
    } catch (error) {
      console.log('ERROR in handleFrameUpload',error)
    }
  };

  const handleEditFrameUrl = () => {
    setEditSuccess(false)
    setIsFrameSubmitted(false);
    setFrameUrl(orderPreviewUrl);
  };

  const handleDownload = async (fileUrl, filename) => {
    try {
      const response = await fetch(fileUrl, { mode: 'cors' });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading the file:', error);
      alert('Failed to download the file.');
    }
  };

  useEffect(()=>{
    async function fetchOrder( ) {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/delivery/order/${id}`,
          {
            headers:{
              ...authHeader()
            }
          }
        )
        setAssignedOrderWithLatestContentSubmission(response.data);
        if(response.data.orderPreviewUrl) {
          setIsFrameSubmitted(true);
          setOrderPreviewUrl(response.data.orderPreviewUrl);
          setFrameUrl('')
        }

        if(response.data.status==='Delivered') {
          setIsOrderCompleted(true)
        }
      } catch (error) {
        console.log('An error occured at fetchOrder',error)
      }
    }
    fetchOrder();
  },[id,editSuccess===true,isOrderCompleted===true])

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Delivery Order View</h1>

      <div className="row">
        {/* Order Information */}
        <div className="col-md-6">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Order Information</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Order ID:</strong> {AssignedOrderWithLatestContentSubmission?.orderId}
                </li>
                <li className="list-group-item">
                  <strong>Status:</strong> {AssignedOrderWithLatestContentSubmission?.status}
                </li>
                <li className="list-group-item">
                  <strong>Estimated Delivery Date:</strong>{' '}
                  {new Date(AssignedOrderWithLatestContentSubmission?.estimatedDeliveryDate).toLocaleDateString()}
                </li>
                <li className="list-group-item">
                  <strong>Created At:</strong>{' '}
                  {new Date(AssignedOrderWithLatestContentSubmission?.createdAt).toLocaleDateString()}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content Submission */}
        <div className="col-md-6">
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Content Submission</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Name:</strong> {AssignedOrderWithLatestContentSubmission?.contentSubmission.name}
                </li>
                <li className="list-group-item">
                  <strong>Title:</strong> {AssignedOrderWithLatestContentSubmission?.contentSubmission.title}
                </li>
                <li className="list-group-item">
                  <strong>Facebook:</strong>{' '}
                  <a
                    href={`https://${AssignedOrderWithLatestContentSubmission?.contentSubmission.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {AssignedOrderWithLatestContentSubmission?.contentSubmission.facebook}
                  </a>
                </li>
                <li className="list-group-item">
                  <strong>Instagram:</strong>{' '}
                  <a
                    href={`https://${AssignedOrderWithLatestContentSubmission?.contentSubmission.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {AssignedOrderWithLatestContentSubmission?.contentSubmission.instagram}
                  </a>
                </li>
                <li className="list-group-item">
                  <strong>Website:</strong>{' '}
                  <a
                    href={`https://${AssignedOrderWithLatestContentSubmission?.contentSubmission.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {AssignedOrderWithLatestContentSubmission?.contentSubmission.website}
                  </a>
                </li>
              </ul>
              <div className="mt-4">
                <div className="mb-3">
                  <strong>Logo:</strong>
                  <div className="d-flex align-items-center mt-2">
                    <img
                      src={AssignedOrderWithLatestContentSubmission?.contentSubmission.logo}
                      alt="Logo"
                      className="img-thumbnail me-3"
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() =>
                        handleDownload(
                          AssignedOrderWithLatestContentSubmission?.contentSubmission.logo,
                          `${AssignedOrderWithLatestContentSubmission?.contentSubmission.name} Logo`
                        )
                      }
                    >
                      Download Logo
                    </button>
                  </div>
                </div>
                <div className="mb-3">
                  <strong>Photo:</strong>
                  <div className="d-flex align-items-center mt-2">
                    <img
                      src={AssignedOrderWithLatestContentSubmission?.contentSubmission.photo}
                      alt="Photo"
                      className="img-thumbnail me-3"
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() =>
                        handleDownload(
                          AssignedOrderWithLatestContentSubmission?.contentSubmission.photo,
                          `${AssignedOrderWithLatestContentSubmission?.contentSubmission.name} Photo`
                        )
                      }
                    >
                      Download Photo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frame Upload */}
      <div className="card shadow-sm mt-4">
        <div className="card-body">
          <h5 className="card-title">Upload Frame URL</h5>
          <div className="d-flex align-items-center">
            {orderPreviewUrl && isFrameSubmitted ? (
              <div className="text-center w-100">
                <h6>Preview:</h6>
                <div className="mb-3">
                <img
                  src={orderPreviewUrl}
                  alt="Order Preview"
                  className="img-thumbnail mb-3"
                  style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                />
                </div>
                <button className="btn btn-warning me-2" onClick={handleEditFrameUrl}>
                  Edit Frame URL
                </button>
              </div>
              
            ) : (
              <>
                <input
                  type="text"
                  className="form-control me-3"
                  placeholder="Enter frame URL"
                  value={frameUrl}
                  onChange={(e) => setFrameUrl(e.target.value)}
                />
                <button
                  className="btn btn-primary"
                  onClick={handleFrameUpload}
                  disabled={isFrameSubmitted}
                >
                  Submit
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Complete Order */}
      <div className="text-center mt-4">
        <button
          className="btn btn-success"
          onClick={handleCompleteOrder}
          // disabled={!orderPreviewUrl || isOrderCompleted}
          disabled={isOrderCompleted || AssignedOrderWithLatestContentSubmission?.status==='Delivered'}
        >
          {isOrderCompleted ? 'Order Completed' : 'Complete Order'}
        </button>
      </div>
    </div>
  );
};

export default DeliveryOrderView;
