import React from "react";

const HomePageEigthScreen = () => {
  return (
    <div
      className="position-relative text-center text-white"
      style={{
        backgroundImage: 'url("https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/immersed-in-social-media.jpg")', // Replace with the actual image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh",
        maxHeight: "350px",
      }}
    >
      {/* Overlay for darkening the background */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      ></div>

      {/* Text content */}
      <div
        className="position-absolute bottom-0 start-50 translate-middle-x pb-4"
        style={{ zIndex: 1 }}
      >
        <h1 className="fw-bold" style={{ fontSize: "3rem" }}>
          Let's talk
        </h1>
      </div>
    </div>
  );
};

export default HomePageEigthScreen;
