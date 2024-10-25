import React from "react";

const HomePageThirdScreen = () => {
  return (
    <div
      className="container pb-5"
      style={{
        
      }}
    >
      <h2 className="text-center fw-bold mb-5" style={{ fontSize: '2rem' }}>
        We deliver revenue-generating <br /> digital marketing solutions.
      </h2>
      
      <div className="row">
        {/* Card 1 */}
        <div className="col-lg-4  mb-4">
          <div className="card h-100 text-center shadow-sm p-3 rounded">
            <img
              src="https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/idea.png" // Replace with actual image URL
              alt="Social Media Strategy"
              className="card-img-top"
              style={{ maxHeight: '200px', objectFit: 'contain' }}
            />
            <div className="card-body">
              <h5 className="card-title">Social Media Strategy</h5>
              <p className="card-text text-muted">
                Auctor viverra massa lacinia conubia placerat dictum litora malesuada mattis porta sapien
              </p>
              <a href="#" className="btn btn-primary">
                Learn more
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100 text-center shadow-sm p-3 rounded">
            <img
              src="https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/Marketing.png" // Replace with actual image URL
              alt="Digital Marketing"
              className="card-img-top"
              style={{ maxHeight: '200px', objectFit: 'contain' }}
            />
            <div className="card-body">
              <h5 className="card-title">Digital Marketing</h5>
              <p className="card-text text-muted">
                Auctor viverra massa lacinia conubia placerat dictum litora malesuada mattis porta sapien
              </p>
              <a href="#" className="btn btn-primary">
                Learn more
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100 text-center shadow-sm p-3 rounded">
            <img
              src="https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/Brand.png" // Replace with actual image URL
              alt="Brand Development"
              className="card-img-top"
              style={{ maxHeight: '200px', objectFit: 'contain' }}
            />
            <div className="card-body">
              <h5 className="card-title">Brand Development</h5>
              <p className="card-text text-muted">
                Auctor viverra massa lacinia conubia placerat dictum litora malesuada mattis porta sapien
              </p>
              <a href="#" className="btn btn-primary">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageThirdScreen;
