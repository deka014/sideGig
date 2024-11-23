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
            
            {/* FAQ Item 1 */}
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
                  What is dgin.in?
                </button>
              </h2>
              <div
                id="collapseOneLeft"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOneLeft"
                data-bs-parent="#accordionLeft"
              >
                <div className="accordion-body">
                  dgin.in is a platform that offers low-cost social media creative and content services through monthly subscription plans. We help businesses and individuals manage their online presence with high-quality designs and engaging content.
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
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
                  What types of content do you create?
                </button>
              </h2>
              <div
                id="collapseTwoLeft"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwoLeft"
                data-bs-parent="#accordionLeft"
              >
                <div className="accordion-body">
                  We create:
                  <ul>
                    <li>Social media posts (images, videos, carousels)</li>
                    <li>Captions and hashtags</li>
                    <li>Monthly content calendars</li>
                    <li>Custom graphics tailored to your brand</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThreeLeft">
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThreeLeft"
                  aria-expanded="false"
                  aria-controls="collapseThreeLeft"
                >
                  What platforms do you create content for?
                </button>
              </h2>
              <div
                id="collapseThreeLeft"
                className="accordion-collapse collapse"
                aria-labelledby="headingThreeLeft"
                data-bs-parent="#accordionLeft"
              >
                <div className="accordion-body">
                  We create content optimized for all major platforms, including:
                  <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>LinkedIn</li>
                    <li>Twitter (X)</li>
                    <li>YouTube</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFourLeft">
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFourLeft"
                  aria-expanded="false"
                  aria-controls="collapseFourLeft"
                >
                  Can I request custom designs or themes?
                </button>
              </h2>
              <div
                id="collapseFourLeft"
                className="accordion-collapse collapse"
                aria-labelledby="headingFourLeft"
                data-bs-parent="#accordionLeft"
              >
                <div className="accordion-body">
                  Absolutely! We tailor our designs to match your brand’s identity, including colors, fonts, and themes. You can also share specific ideas or references.
                </div>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFiveLeft">
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFiveLeft"
                  aria-expanded="false"
                  aria-controls="collapseFiveLeft"
                >
                  How soon will I receive my content?
                </button>
              </h2>
              <div
                id="collapseFiveLeft"
                className="accordion-collapse collapse"
                aria-labelledby="headingFiveLeft"
                data-bs-parent="#accordionLeft"
              >
                <div className="accordion-body">
                  Once you subscribe and provide your requirements, we’ll deliver your first batch of content within 3–5 business days. Regular content delivery schedules are shared during onboarding.
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* Right FAQ Column */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div className="accordion" id="accordionRight">
            {/* FAQ 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How do your subscription plans work?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionRight"
              >
                <div className="accordion-body">
                  Our plans are simple and flexible. You choose a monthly subscription that fits your needs, and we deliver customized social media content—designs, captions, or both—directly to you. No long-term commitments required!
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Who can benefit from dgin.in services?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionRight"
              >
                <div className="accordion-body">
                  Our services are perfect for:
                  <ul>
                    <li>Small businesses</li>
                    <li>Startups</li>
                    <li>Freelancers</li>
                    <li>Influencers</li>
                    <li>Professionals building their personal brand</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What if I’m not satisfied with the content?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionRight"
              >
                <div className="accordion-body">
                  We’re committed to your satisfaction. If you’re unhappy with any content, we offer revisions to ensure it aligns with your expectations.
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  How do I contact dgin.in for support or queries?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionRight"
              >
                <div className="accordion-body">
                  You can reach out to us through:
                  <ul>
                    <li>Email: </li>
                    <li>WhatsApp: </li>
                    <li>Contact Form: [Link to Form]</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Is there a cancellation policy?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionRight"
              >
                <div className="accordion-body">
                  Yes, you can cancel your subscription anytime before the next billing cycle. There are no cancellation charges.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageFifthScreen;
