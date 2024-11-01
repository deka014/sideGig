import React from 'react';
import { Link } from 'react-router-dom';

function DesignArchive() {
  const articles = [
    {
      title: "5 D2C Ad Trends We’re Seeing on TikTok",
      category: "PERFORMANCE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "August 19, 2024",
      comments: "No Comments",
      image: "https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/immersed-in-social-media-1536x1024.jpg",
      content: "Detailed content for the first article goes here..."
    },
    {
      title: "FB Ad Account Structure Analysis For 12 Accounts At Scale",
      category: "BUSINESS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "August 19, 2024",
      comments: "No Comments",
      image: "https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/home-friends-with-selfie-and-women-with-live-streaming-social-media-and-vlog-with-content-creator-1536x1025.jpg",
      content: "Detailed content for the second article goes here..."
    },
    {
      title: "D2C Facebook/Instagram Prospecting ROAS Benchmarks",
      category: "DATA DRIVEN",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "August 19, 2024",
      comments: "No Comments",
      image: "https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/outdoors-two-businesswomen-and-phone-with-workers-on-a-lunch-break-browsing-social-media-looking-1536x1101.jpg",
      content: "Detailed content for the third article goes here..."
    }
  ];

  return (
    <div className="container py-5"
      style={{
        background: 'linear-gradient(rgb(245, 225, 255), rgb(255, 255, 255))',
        borderRadius: '15px',
        margin: 'auto',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'left'
      }}
    >
      <h2 className="text-center mb-2" style={{ fontSize: '2rem', fontWeight: '700' }}>
        Article & News
      </h2>
      <p className="text-center mb-4" style={{ fontSize: '1rem', color: '#888' }}>
        Archives
      </p>

      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Link
              to={`/articles/${index}`} // Pass index as URL parameter
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="card h-100 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                <div style={{ position: 'relative' }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="card-img-top"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <span
                    className="badge"
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      backgroundColor: '#5a67d8',
                      color: '#fff',
                      borderRadius: '5px',
                      padding: '5px 10px',
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    {article.category}
                  </span>
                </div>
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: '600' }}>
                    {article.title}
                  </h5>
                  <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
                    {article.description}
                  </p>
                </div>
                <div className="card-footer bg-white d-flex justify-content-between align-items-center">
                  <small className="text-muted">{article.date}</small>
                  <small className="text-muted">{article.comments}</small>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignArchive;
