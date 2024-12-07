import React from 'react';
import { Link } from 'react-router-dom';

function DesignArchive() {
  const articles = [
    {
      title: "5 D2C Ad Trends We’re Seeing on TikTok & Snapchat",
      category: "PERFORMANCE",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
      date: "August 19, 2024",
      comments: "No Comments",
      image: "https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/immersed-in-social-media-1536x1024.jpg",
      content: "Detailed content for the first article goes here..."
    },
    {
      title: "FB Ad Account Structure Analysis For 12 Accounts At Scale",
      category: "BUSINESS",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
      date: "August 19, 2024",
      comments: "No Comments",
      image: "https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/home-friends-with-selfie-and-women-with-live-streaming-social-media-and-vlog-with-content-creator-1536x1025.jpg",
      content: "Detailed content for the second article goes here..."
    },
    {
      title: "D2C Facebook/Instagram Prospecting ROAS Benchmarks",
      category: "DATA DRIVEN",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
      date: "August 19, 2024",
      comments: "No Comments",
      image: "https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/outdoors-two-businesswomen-and-phone-with-workers-on-a-lunch-break-browsing-social-media-looking-1536x1101.jpg",
      content: "Detailed content for the third article goes here..."
    },
    // articles added
    {
      title: "How AI is Revolutionizing E-commerce Ad Campaigns",
      category: "TECHNOLOGY",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
      date: "August 20, 2024",
      comments: "No Comments",
      image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/bc81f7f2-9a7d-4c6e-a76f-e42b37db7772/f68cca54-2f3c-45ed-bf4f-a5209c7c0e37.png",
      content: "Detailed content for the fourth article goes here..."
    },
    {
      title: "Top 10 Tips for Scaling Paid Social Campaigns in 2024",
      category: "MARKETING",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
      date: "August 20, 2024",
      comments: "No Comments",
      image: "https://influencermarketinghub.com/wp-content/uploads/2024/08/Best-Paid-Social-Marketing-Campaigns.png",
      content: "Detailed content for the fifth article goes here..."
    },
    {
      title: "Creative Strategies for High-Converting TikTok Ads",
      category: "CREATIVE",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
      date: "August 21, 2024",
      comments: "No Comments",
      image: "https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/social-media-1536x1152.jpg",
      content: "Detailed content for the sixth article goes here..."
    },
    {
      title: "Why Snapchat Ads Are Growing in Popularity for D2C Brands",
      category: "TRENDS",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
      date: "August 22, 2024",
      comments: "No Comments",
      image: "https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/remote-worker-girl-procrastinate-at-workplace-sit-at-desk-with-closed-laptop-chat-in-social-media-1536x1024.jpg",
      content: "Detailed content for the seventh article goes here..."
    },
    {
      title: "Facebook Ad Optimization: Lessons from 15 Campaigns",
      category: "OPTIMIZATION",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
      date: "August 22, 2024",
      comments: "No Comments",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SYD8c1YJzUUH5d5EHb9ACbHZ8-Cqj3Jznw&s",
      content: "Detailed content for the eighth article goes here..."
    },
    {
      title: "Instagram Reels: The Future of Visual Storytelling",
      category: "SOCIAL MEDIA",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
      date: "August 23, 2024",
      comments: "No Comments",
      image: "https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/social-media-addiction-1536x1024.jpg",
      content: "Detailed content for the ninth article goes here..."
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
      <h2 className="text-center mb-5" style={{ fontSize: '48px', fontWeight: '600', fontFamily : 'Lexend' }}>
        Creative IDEAS
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
                  <h5 className="card-title my-3" style={{ fontWeight: '500' , fontSize: '20px' ,fontFamily: 'Lexend' }}>
                    {article.title}
                  </h5>
                  <p className="card-text mb-3 text-muted" style={{ fontSize: '16px', fontFamily: 'Inter' }}>
                    {article.description}
                  </p>
                </div>
                <div className="card-footer bg-white d-flex justify-content-between align-items-center" style={{fontSize: '14px' ,fontFamily : 'DM Sans',lineHeight: '1.5 rem'}} >
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
