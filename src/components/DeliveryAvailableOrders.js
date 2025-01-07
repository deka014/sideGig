import React, { useEffect, useState } from 'react';
import axios from 'axios';
import authHeader from '../services/authHeader';
import { toast } from 'react-toastify';
const DeliveryAvailableOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  // Dummy Data
  const dummyOrders = [
    {
      _id: '6752ec88c19d0ad8ada9c94b',
      orderId: 'ORD-202412061222-NUMCAG',
      status: 'Progress',
      orderPreviewUrl:
        'https://images.unsplash.com/photo-1593175692310-7b1bedb76360?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3JkZXJzfGVufDB8fDB8fHww',
      estimatedDeliveryDate: '2024-12-13T12:22:32.114Z',
      createdAt: '2024-12-06T12:22:32.116Z',
    },
    {
        _id: '6752ec88c19d0ad8ada9c94b',
        orderId: 'ORD-202412061222',
        status: 'Progress',
        orderPreviewUrl:
          'https://images.unsplash.com/photo-1593175692310-7b1bedb76360?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3JkZXJzfGVufDB8fDB8fHww',
        estimatedDeliveryDate: '2024-12-13T12:22:32.114Z',
        createdAt: '2024-12-06T12:22:32.116Z',
      },
  
  ];

  // // Fetch orders (simulated with dummy data)
  // const fetchOrders = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setOrders(dummyOrders); // Replace with API call
  //     setLoading(false);
  //   }, 1000);
  // };

  // Fetch orders
const fetchOrders = async () => {
  setLoading(true);

  try {

    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/delivery/available-orders`, {
      headers: {
        ...authHeader(),
      },
    });
    setOrders(response.data); // Update state with the fetched orders
  } catch (error) {
    console.error('Error fetching orders:', error);
  } finally {
    setLoading(false);
  }
};

  // // Accept order
  // const handleAcceptOrder = (orderId) => {
  //   // Simulated accept order logic
  //   // console.log(`Accepted order: ${orderId}`);
  //   // alert(`Order ${orderId} has been accepted!`);
  //   // Simulate removing the accepted order from the list
  //   // setOrders((prevOrders) => prevOrders.filter((order) => order.orderId !== orderId));
  // };

// Accept order using the API
const handleAcceptOrder = async (orderId) => {
  try {
   
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/delivery/accept-order/${orderId}`, {}, {
      headers: {
        ...authHeader(), // Send the token in the header for authentication
      },
    });

    // Handle successful response
    console.log('Order accepted:', response.data);
    toast.success(
      'Order Successfully Accepted!',
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      }
    )

    fetchOrders(); // Fetch orders again to update the list
  } catch (error) {
    // Handle error in case something goes wrong
    console.error('Error accepting order:', error);
    alert(error.response?.data?.message || 'Failed to accept the order.');
    toast.error(
      error.response?.data?.message || 'Failed to accept the order.',
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
  })}
};


  // Auto-refresh every 60 seconds
  useEffect(() => {
    fetchOrders();
    const interval = setInterval(() => {
      fetchOrders();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Available Orders</h1>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : orders.length === 0 ? (
        <p className="text-center text-muted">No available orders at the moment.</p>
      ) : (
        <div className="row">
          {orders.map((order) => (
            <div key={order._id} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm" style={{ borderRadius: '8px' }}>
                {/* <img
                  src={order.orderPreviewUrl}
                  alt={`Preview for Order ${order.orderId}`}
                  className="card-img-top"
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                  }}
                /> */}
                <div className="card-body text-start">
                  <h5 className="card-title mb-3">Order ID: {order.orderId}</h5>
                  <p className="card-text text-muted">
                    <strong>Status:</strong> {order.status}
                  </p>
                  <p className="card-text text-muted">
                    <strong>Estimated Delivery:</strong>{' '}
                    {new Date(order.estimatedDeliveryDate).toLocaleDateString()}
                  </p>
                  <p className="card-text text-muted">
                    <strong>Created At:</strong>{' '}
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => handleAcceptOrder(order._id)}
                  >
                    Accept Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DeliveryAvailableOrders;
