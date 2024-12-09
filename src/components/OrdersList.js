import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import authHeader from "../services/authHeader"
import ContentLoader from 'react-content-loader'
const OrdersList = () => {

  const [orders,setOrders] = useState();
  const [isLoading,setIsLoading] = useState(true)
  const navigate = useNavigate();
  const Orders = [
    {
      id: "407-8831519-4017961",
      orderDate: "26 November 2024",
      total: "₹8,468.00",
      title: "Booking successful",
      description: "Hyderabad → Guwahati, 07 Dec 2024",
      imageUrl:
        "https://images.unsplash.com/photo-1593175692310-7b1bedb76360?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3JkZXJzfGVufDB8fDB8fHww",
      additionalInfo: "Flight ticket bookings on Amazon",
      status: "Delivered",
    },
    ...Array.from({ length: 14 }, (_, i) => ({
      id: `407-8831519-40179${63 + i}`,
      orderDate: "25 November 2024",
      total: `₹${99 + i * 10}.00`,
      title: `Order #${i + 1}`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam in felis.",
      imageUrl:
        "https://images.unsplash.com/photo-1593175692310-7b1bedb76360?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3JkZXJzfGVufDB8fDB8fHww",
      additionalInfo: "Details available",
      status: i % 2 === 0 ? "In Progress" : "Delivered",
    })),
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = orders?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil((orders?.length || 0) / itemsPerPage);


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(()=>{
    async function fetchOrders() {
      setIsLoading(true);
      try {
        const response = await axios.get('/api/user-orders',{
          headers:{
            // Authorization: 'Bearer '
            ...authHeader()
          }
        })
        if(response.data.orders){
          console.log(response)
          setOrders(response.data.orders)
          setIsLoading(false)
        }
      } catch (error) {
        console.log('An error occured at fetchOrders')
        setOrders(Orders)
      } finally {
        setIsLoading(false)
      }
    }
    fetchOrders();
  },[])

  const OrderCardSkeleton = () => (
    <ContentLoader 
      speed={2}
      width={700}
      height={140}
      viewBox="0 0 700 140"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="10" y="10" rx="5" ry="5" width="120" height="120" />
      <rect x="140" y="15" rx="5" ry="5" width="200" height="20" />
      <rect x="140" y="45" rx="5" ry="5" width="300" height="15" />
      <rect x="140" y="70" rx="5" ry="5" width="250" height="15" />
      <rect x="140" y="100" rx="5" ry="5" width="200" height="15" />
      <rect x="500" y="50" rx="20" ry="20" width="150" height="40" />
    </ContentLoader>
  );

  return (
    <div className="container col-md-12 col-lg-7 py-3">
      <h2 className="mb-4 text-center fw-bold mb-5">Your Orders Inbox</h2>

      {isLoading && (<ContentLoader/>)}
      {/* Orders List */}
      {
        !isLoading && currentOrders?.map((order) => (
        <div
          key={order.id}
          className="border rounded mb-4"
          style={{
            backgroundColor: "#f9f9f9",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          {/* Header Section */}
          <div
            className="row m-0 p-3"
            style={{ backgroundColor: "#f2f2f2", alignItems: "center" }}
          >
            <div className="col-6 col-md-3 mb-2">
              <p className="mb-1" style={{ fontSize: "0.85rem", fontWeight: "bold" }}>
                ORDER PLACED
              </p>
              <p className="mb-0" style={{ fontSize: "0.85rem" }}>
                {order.orderDate}
              </p>
            </div>
            <div className="col-6 col-md-3 mb-2">
              <p className="mb-1" style={{ fontSize: "0.85rem", fontWeight: "bold" }}>
                TOTAL
              </p>
              <p className="mb-0" style={{ fontSize: "0.85rem" }}>
                {order.total}
              </p>
            </div>
            <div className="col-6 col-md-3 mb-2">
              <p className="mb-1" style={{ fontSize: "0.85rem", fontWeight: "bold" }}>
                ORDER #
              </p>
              <p className="mb-0" style={{ fontSize: "0.85rem" }}>
                {order.id}
              </p>
            </div>
            <div className="col-6 col-md-3 text-md-end mb-2">
              <span
                className={`badge ${
                  order.status === "Delivered"
                    ? "bg-success"
                    : order.status === "Cancelled"
                    ? "bg-danger"
                    : "bg-warning text-dark"
                }`}
                style={{
                  fontSize: "0.85rem",
                  padding: "6px 12px",
                  borderRadius: "12px",
                }}
              >
                {order.status}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="row m-0 p-3 align-items-center">
            <div className="col-12 col-md-2 mb-3 mb-md-0 text-center">
              <img
                src={order.imageUrl}
                alt={order.title}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col-12 col-md-8 text-md-start">
              <h5 className="mb-1" style={{ fontWeight: "bold", color: "#333" }}>
                {order.title}
              </h5>
              <p className="mb-2 text-muted" style={{ fontSize: "0.9rem" }}>
                {order.description}
              </p>
              <a
                href="#"
                className="text-primary"
                style={{
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  marginRight: "10px",
                }}
              >
                {order.additionalInfo}
              </a>
            </div>
            <div className="col-12 col-md-2 text-center text-md-end mt-3 mt-md-0">
              <button
                className="btn btn-primary btn-sm"
                onClick={() => {
                    const currentUrl = window.location.origin + "/order-view";
                    window.location.href = currentUrl; // Redirects to the page with a hard refresh
                }}
                style={{
                  borderRadius: "20px",
                  padding: "6px 16px",
                  fontSize: "0.85rem",
                }}
                disabled={order.status !== "Delivered"}
              >
                View Inbox
              </button>
            </div>
          </div>
        </div>
        ))
      }
      <div className="d-flex justify-content-center mt-4">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`btn ${
              currentPage === index + 1 ? "btn-primary" : "btn-outline-secondary"
            } mx-1`}
            style={{
              borderRadius: "20px",
              padding: "6px 12px",
              fontSize: "0.85rem",
            }}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OrdersList;
