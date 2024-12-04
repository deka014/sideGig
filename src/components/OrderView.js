import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const mockOrderData = [
  {
    id: 1,
    title: "Tea Bottle",
    description: "Class enim elementum litora platea dictum commodo vestibulum",
    imageUrl: "https://res.cloudinary.com/demo/image/upload/leather_bag_gray.jpg",
    releaseDate: "2024-12-01",
  },
  {
    id: 2,
    title: "Bobo Furniture",
    description: "Class enim elementum litora platea dictum commodo vestibulum",
    imageUrl: "https://images.unsplash.com/photo-1593175692310-7b1bedb76360?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    releaseDate: "2024-12-02",
  },
  {
    id: 3,
    title: "Something Else",
    description: "Class enim elementum litora platea dictum commodo vestibulum",
    imageUrl: "https://i.ibb.co/Z2vr3k2/ganesh.jpg",
    releaseDate: "2024-12-02",
  }
];

const OrderViewPage = () => {
  const handleDownload = async (design) => {
    try {
      const response = await fetch(design.imageUrl, { mode: "cors" });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${design.title}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the file:", error);
      alert("Failed to download the file.");
    }
  };
  

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">
        Content <span className="mark">Delivery</span>
      </h1>

      <div className="row g-4 text-start">
        {mockOrderData.map((design) => (
          <div key={design.id} className="col-lg-4 col-md-6 col-12">
            <div className="card h-100 shadow-sm" style={{ borderRadius: "15px" }}>
              <img
                src={design.imageUrl}
                alt={design.title}
                className="card-img-top"
                style={{
                  height: "100%",
                  objectFit: "cover",
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{design.title}</h5>
                <p className="card-text text-muted" style={{ flexGrow: 1 }}>
                  {design.description}
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                {/* Facebook Share Button */}
                <FacebookShareButton
                  url={design.imageUrl}
                  quote={design.title}
                  hashtag="#Dgin.in #CreativeDesign"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>

                {/* Twitter Share Button */}
                <TwitterShareButton
                  url={design.imageUrl}
                  title={design.title}
                  hashtags={["CreativeDesign", "Graphic"]}
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>

                {/* WhatsApp Share Button */}
                <WhatsappShareButton
                  url={design.imageUrl}
                  title={design.title}
                  separator=":: "
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>

                {/* Download Button */}
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleDownload(design)}
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderViewPage;
