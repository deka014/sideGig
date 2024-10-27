// import React, { useEffect } from "react";
// import AOS from "aos"; // Import AOS
// import "aos/dist/aos.css"; // Import AOS styles

// const HomePageFifthScreen = () => {
//   useEffect(() => {
//     // Initialize AOS
//     AOS.init({
//       duration: 800, // Animation duration in milliseconds
//       once: true, // Animation occurs only once
//     });
//   }, []);

//   return (
//     <div className="container py-5">
//       <div className="row align-items-center">
//         {/* Left Section: Illustration */}
//         <div
//           className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0"
//           data-aos="fade-right" // AOS animation
//         >
//           <img
//             src="https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/Team.png"
//             alt="Illustration"
//             style={{ maxWidth: "100%", height: "auto" }}
//           />
//         </div>

//         {/* Right Section: Content */}
//         <div className="col-lg-6" data-aos="fade-left">
//           <p className="text-uppercase fw-bold" style={{ color: "#6c63ff" }}>
//             Our Solutions
//           </p>
//           <h2 className="fw-bold mb-4" style={{ fontSize: "2rem" }}>
//             Get the best and most creative results.
//           </h2>
//           <p className="text-muted mb-4">
//             Mauris iaculis vel pretium dapibus amet ullamcorper tortor dis mus nulla ornare. 
//             Fermentum cras consectetur vivamus vitae elit orci habitant. 
//           </p>

//           <div className="d-flex mb-3" data-aos="fade-up" data-aos-delay="100">
//             <div
//               className="me-3"
//               style={{
//                 backgroundColor: "#ffebf0",
//                 borderRadius: "50%",
//                 width: "50px",
//                 height: "50px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <i className="bi bi-globe2" style={{ fontSize: "1.5rem", color: "#ff6f91" }}></i>
//             </div>
//             <div>
//               <h5 className="mb-1">Social Media Strategy</h5>
//               <p className="text-muted mb-0">
//                 Netus urna tempor ornare ad risus malesuada venenatis dolor porttitor mauris tortor.
//               </p>
//             </div>
//           </div>

//           <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
//             <div
//               className="me-3"
//               style={{
//                 backgroundColor: "#ffebf0",
//                 borderRadius: "50%",
//                 width: "50px",
//                 height: "50px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <i className="bi bi-bar-chart-line" style={{ fontSize: "1.5rem", color: "#ff6f91" }}></i>
//             </div>
//             <div>
//               <h5 className="mb-1">Analytics and Reporting</h5>
//               <p className="text-muted mb-0">
//                 Netus urna tempor ornare ad risus malesuada venenatis dolor porttitor mauris tortor.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Brands Section */}
//       <div className="text-center mt-5" data-aos="fade-up">
//         <p className="fw-bold mb-4">
//           Trusted by 25,000+ world-class brands and organizations of all sizes
//         </p>
//         <div className="d-flex justify-content-center flex-wrap">
//           <img
//             src="https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/logo-1.png"
//             alt="Brand Logo"
//             className="mx-3 my-2"
//             data-aos="zoom-in" // Additional animation for logos
//             data-aos-delay="100"
//           />
//           <img
//             src="https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/logo-11.png"
//             alt="Brand Logo"
//             className="mx-3 my-2"
//             data-aos="zoom-in"
//             data-aos-delay="200"
//           />
//           <img
//             src="https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/logo-1.png"
//             alt="Brand Logo"
//             className="mx-3 my-2"
//             data-aos="zoom-in"
//             data-aos-delay="300"
//           />
//           <img
//             src="https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/logo-11.png"
//             alt="Brand Logo"
//             className="mx-3 my-2"
//             data-aos="zoom-in"
//             data-aos-delay="400"
//           />
//           <img
//             src="https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/logo-1.png"
//             alt="Brand Logo"
//             className="mx-3 my-2"
//             data-aos="zoom-in"
//             data-aos-delay="500"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePageFifthScreen;



import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS for animations
import "aos/dist/aos.css"; // Import AOS styles

const HomePageFifthScreen = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Only animate once
    });
  }, []);

  return (
    <div className="container py-2">
       {/* <lord-icon
                src="https://cdn.lordicon.com/kiynvdns.json" // Replace with desired Lordicon URL
                trigger="loop"
                style={{ width: "50px", height: "50px" }}
              ></lord-icon> */}
      <h2 className="text-center fw-bold mb-4" style={{ fontSize: "2rem" }} data-aos="fade-up">
     
        Hi, How can we help? 
      </h2>
      

      {/* Search bar */}
      <div className="d-flex justify-content-center mb-4" data-aos="fade-up" data-aos-delay="100">
        <input
          type="text"
          placeholder="Type to start searching..."
          className="form-control w-75"
          style={{
            maxWidth: "500px",
            borderRadius: "20px",
            padding: "0.75rem 1.5rem",
            border: "1px solid #ddd",
          }}
        />
      </div>

      <div className="row text-start">
        {/* Left FAQ Column */}
        <div className="col-lg-6 mb-4" data-aos="fade-up">
          <div className="accordion" id="accordionLeft">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOneLeft">
                <button
                  className="accordion-button fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOneLeft"
                  aria-expanded="true"
                  aria-controls="collapseOneLeft"
                >
What are the key principles of effective design?                </button>
              </h2>
              <div
                id="collapseOneLeft"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOneLeft"
                data-bs-parent="#accordionLeft"
              >
                <div className="accordion-body">
                Effective design revolves around principles like balance, contrast, hierarchy, alignment, and proximity. 
                                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwoLeft">
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwoLeft"
                  aria-expanded="false"
                  aria-controls="collapseTwoLeft"
                >
                  How can color impact the design?
                </button>
              </h2>
              <div
                id="collapseTwoLeft"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwoLeft"
                data-bs-parent="#accordionLeft"
              >
                <div className="accordion-body">
                Color has a significant influence on how people perceive and interact with a design. It can evoke emotions, convey brand identity, and enhance readability                </div>
              </div>
            </div>
            {/* Additional FAQ items can go here */}
          </div>
        </div>

        {/* Right FAQ Column */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div className="accordion" id="accordionRight">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOneRight">
                <button
                  className="accordion-button fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOneRight"
                  aria-expanded="true"
                  aria-controls="collapseOneRight"
                >
What is the importance of responsive design?                </button>
              </h2>
              <div
                id="collapseOneRight"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOneRight"
                data-bs-parent="#accordionRight"
              >
                <div className="accordion-body ">
                Responsive design ensures that a website or application functions well on various devices and screen sizes.               </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwoRight">
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwoRight"
                  aria-expanded="false"
                  aria-controls="collapseTwoRight"
                >
How does user experience (UX) differ from user interface (UI) design?                </button>
              </h2>
              <div
                id="collapseTwoRight"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwoRight"
                data-bs-parent="#accordionRight"
              >
                <div className="accordion-body">
                  Montes justo aliquet himenaeos vulputate orci mauris.
                </div>
              </div>
            </div>
            {/* Additional FAQ items can go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageFifthScreen;
