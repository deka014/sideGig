import React from "react";

const HomePageEigthScreen = () => {
  return (
    <div
      className="position-relative text-center text-white"
      style={{
        backgroundImage: 'url("https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/immersed-in-social-media.jpg")', // Replace with the actual image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        //height issue fixed
        paddingTop: "30.25%", // For a 16:9 aspect ratio
        height: "auto",
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
        <h1 className="fw-bold" style={{ 
            textAlign: "center",
            position: "relative",
            top: "-275%",
            // right: "50%",
            // left: "50px",
            letterSpacing: -1,
            zIndex: 1,
            fontSize: "6rem", // Very large size
            fontWeight: "bold",
            fontFamily: "sans-serif",
            color: "white", // Light and translucent
            whiteSpace: "nowrap" 
          }}>
          Let's talk
        </h1>
      </div>
    </div>
  );
};

export default HomePageEigthScreen;
