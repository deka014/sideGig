import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css"; // Import animation
import "../../css/expand.css";
import { Link } from "react-router-dom";

const HomePageSixthScreen = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Trigger animations only once
    });
  }, []);

  const iconCircleStyle = {
    backgroundImage: `url('https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/memphis1.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "50%",
    width: "70px",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const iconStyle = {
    fontSize: "2.5rem",
    color: "#000",
    marginLeft: "15px",
  };

  const titleStyle = {
    textAlign: "left",
    marginBottom: "25px",
    marginTop: "15px",
  };

  const descriptionStyle = {
    color: "#6c757d", 
    marginBottom: "20px",
    textAlign: "left",
  };

  const articles = [
    {
      title: "Social Media Management",
      iconClass: "bi bi-search",
      category: "PERFORMANCE",
      description:
        "Quisque sollicitudin eget ad pharetra porta feugiat scelerisque augue turpis sapien curabitur",
      date: "August 19, 2024",
      comments: "No Comments",
      image:
        "https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/immersed-in-social-media-1536x1024.jpg",
      content: "Detailed content for Social Media Management...",
    },
    {
      title: "Paid Promote",
      iconClass: "bi bi-layers",
      category: "BUSINESS",
      description:
        "Quisque sollicitudin eget ad pharetra porta feugiat scelerisque augue turpis sapien curabitur",
      date: "August 20, 2024",
      comments: "No Comments",
      image:
        "https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/home-friends-with-selfie-and-women-with-live-streaming-social-media-and-vlog-with-content-creator-1536x1025.jpg",
      content: "Detailed content for Paid Promote...",
    },
    {
      title: "Digital Marketing",
      iconClass: "bi bi-megaphone",
      category: "DATA DRIVEN",
      description: "Quisque sollicitudin eget ad pharetra porta feugiat scelerisque augue turpis sapien curabitur",
      date: "August 21, 2024",
      comments: "No Comments",
      image:
        "https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/outdoors-two-businesswomen-and-phone-with-workers-on-a-lunch-break-browsing-social-media-looking-1536x1101.jpg",
      content: "Detailed content for Digital Marketing...",
    },
    {
      title: "Data Driven",
      iconClass: "bi bi-graph-up",
      category: "PERFORMANCE",
      description: "Quisque sollicitudin eget ad pharetra porta feugiat scelerisque augue turpis sapien curabitur",
      date: "August 22, 2024",
      comments: "No Comments",
      image:
        "https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/immersed-in-social-media-1536x1024.jpg",
      content: "Detailed content for Data Driven...",
    },
    {
      title: "Strategic Consulting",
      iconClass: "bi bi-lightbulb",
      category: "BUSINESS",
      description: "Quisque sollicitudin eget ad pharetra porta feugiat scelerisque augue turpis sapien curabitur",
      date: "August 23, 2024",
      comments: "No Comments",
      image:
        "https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/home-friends-with-selfie-and-women-with-live-streaming-social-media-and-vlog-with-content-creator-1536x1025.jpg",
      content: "Detailed content for Strategic Consulting...",
    },
    {
      title: "Creative Development",
      iconClass: "bi bi-palette",
      category: "DATA DRIVEN",
      description: "Quisque sollicitudin eget ad pharetra porta feugiat scelerisque augue turpis sapien curabitur",
      date: "August 24, 2024",
      comments: "No Comments",
      image:
        "https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/outdoors-two-businesswomen-and-phone-with-workers-on-a-lunch-break-browsing-social-media-looking-1536x1101.jpg",
      content: "Detailed content for Creative Development...",
    },
  ];

  return (
    <div
      className="container py-3"
      style={{
        background: "rgb(238 233 255)",
        marginBottom: "3rem",
      }}
    >
      <h2
        className="text-center fw-bold mb-5"
        style={{ fontSize: "2rem", marginTop: "5rem" }}
        data-aos="fade-up"
      >
        Transforming Social Media into <br /> Social Impact
      </h2>

      <div className="row g-4">
        {articles.map((article, index) => (
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            key={index}
          >
            <Link
              to={`/articles/${index}`}     // Use for dynamic routing
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card h-100 p-3 shadow-sm">
                <div className="d-flex align-items-center mb-3 box">
                  <div className="me-3">
                    <i className="expand-circle" style={iconCircleStyle}></i>
                    <i className={article.iconClass} style={iconStyle}></i>
                  </div>
                </div>
                <h5 className="mb-4" style={titleStyle}>
                  {article.title}
                </h5>
                <p style={descriptionStyle}>{article.description}</p>
                <span className="btn btn-primary">Learn more</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageSixthScreen;
