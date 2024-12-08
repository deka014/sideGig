import React, { useEffect, useState } from 'react';

const DesignerDashboard = () => {
  const [pendingOrders, setPendingOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [loadingPending, setLoadingPending] = useState(false);
  const [loadingCompleted, setLoadingCompleted] = useState(false);

  const dummyPendingOrders = [
    {
      _id: '67520a17c86924a60b391e79',
      orderId: 'ORD-20241201-ABC123',
      selectedDesigns: [
        { designId: '6751ea5f6bacbdb9fa33eb3a', deliverUrl: null },
      ],
      estimatedDeliveryDate: '2024-12-12T20:16:23.810Z',
    },
    {
      _id: '675210b1cab9096c2134382e',
      orderId: 'ORD-20241202-DEF456',
      selectedDesigns: [
        { designId: '6751ea5f6bacbdb9fa33eb3a', deliverUrl: null },
        { designId: '6751ea5f6bacbdb9fa33eb3b', deliverUrl: null },
      ],
      estimatedDeliveryDate: '2024-12-15T20:44:33.798Z',
    },
  ];

  const dummyCompletedOrders = [
    {
      _id: '6752d581ef63d22bd3d30705',
      orderId: 'ORD-20241130-GHI789',
      selectedDesigns: [
        { designId: '6751ea5f6bacbdb9fa33eb3a', deliverUrl: 'https://example.com/frame1' },
      ],
      estimatedDeliveryDate: '2024-12-10T10:44:17.648Z',
    },
  ];

  const fetchPendingOrders = () => {
    setLoadingPending(true);
    setTimeout(() => {
      setPendingOrders(dummyPendingOrders);
      setLoadingPending(false);
    }, 1000);
  };

  const fetchCompletedOrders = () => {
    setLoadingCompleted(true);
    setTimeout(() => {
      setCompletedOrders(dummyCompletedOrders);
      setLoadingCompleted(false);
    }, 1000);
  };

  useEffect(() => {
    fetchPendingOrders();
  }, []);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Designer Dashboard</h1>

      {/* Pending Orders Section */}
      <div className="mb-4">
        <h3 className="text-muted mb-5">Pending Orders</h3>
        {loadingPending ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : pendingOrders.length === 0 ? (
          <p className="text-center text-muted">No pending orders available.</p>
        ) : (
          <div className="row">
            {pendingOrders.map((order) => (
              <div key={order._id} className="col-md-6 col-lg-4 mb-4 text-start">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">Order ID: {order.orderId}</h5>
                    <p className='m-0'>
                      <strong>Delivery Date:</strong>{' '}
                      {new Date(order.estimatedDeliveryDate).toLocaleDateString()}
                    </p>
                    <p className='m-0'>
                      <strong>Designs:</strong> {order.selectedDesigns.length}
                    </p>
                    <div className="mb-3">
                      <strong>Status:</strong> <p className='bg-warning d-inline'> Pending </p>
                      </div>
                    <button className="btn btn-primary w-100 mt-2">
                      View Order
                    </button>
                    
                    
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Completed Orders Section */}
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="text-muted">Completed Orders</h3>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setShowCompleted((prev) => !prev);
              if (!showCompleted && completedOrders.length === 0) {
                fetchCompletedOrders();
              }
            }}
          >
            {showCompleted ? 'Hide Completed Orders' : 'View Completed Orders'}
          </button>
        </div>
        {showCompleted && (
          <div>
            {loadingCompleted ? (
              <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : completedOrders.length === 0 ? (
              <p className="text-center text-muted">No completed orders available.</p>
            ) : (
              <div className="row">
                {completedOrders.map((order) => (
                  <div key={order._id} className="col-md-6 col-lg-4 mb-4 text-start">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="card-title">Order ID: {order.orderId}</h5>
                        <p>
                          <strong>Delivery Date:</strong>{' '}
                          {new Date(order.estimatedDeliveryDate).toLocaleDateString()}
                        </p>
                        <p>
                          <strong>Designs:</strong> {order.selectedDesigns.length}
                        </p>
                        <button className="btn btn-primary w-100 mt-2">
                          View Order
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DesignerDashboard;
