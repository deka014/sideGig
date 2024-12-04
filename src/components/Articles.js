import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Articles() {
  const { id } = useParams();

  const articles = [
    {
      title: "FB Ad Account Structure Analysis For 12 Accounts At Scale",
      category: "BUSINESS",
      content: [
        { type: 'paragraph', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet." },
        { type: 'paragraph', text: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. " },
        { type: 'image', src: "https://via.placeholder.com/600x300", alt: "Sample", caption: "Five multicultural friends watching videos in social media sitting together and having fun." },
        { type: 'paragraph', text: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet." },
        { type: 'paragraph', text: "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum." },
        { type: 'paragraph', text: "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt." },
      ],
      date: "August 19, 2024",
      comments: "No Comments",
      image: "https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/immersed-in-social-media-1536x1024.jpg",
    },
    {
        title: "FB Ad Account Structure Analysis For 12 Accounts At Scale",
        category: "BUSINESS",
        content: [
          { type: 'paragraph', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet." },
          { type: 'paragraph', text: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. " },
          { type: 'image', src: "https://via.placeholder.com/600x300", alt: "Sample", caption: "Five multicultural friends watching videos in social media sitting together and having fun." },
          { type: 'paragraph', text: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet." },
          { type: 'paragraph', text: "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum." },
          { type: 'paragraph', text: "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt." },
        ],
        date: "August 19, 2024",
        comments: "No Comments",
        image: "https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/home-friends-with-selfie-and-women-with-live-streaming-social-media-and-vlog-with-content-creator-1536x1025.jpg",
      },
      {
        title: "FB Ad Account Structure Analysis For 12 Accounts At Scale",
        category: "BUSINESS",
        content: [
          { type: 'paragraph', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet." },
          { type: 'paragraph', text: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. " },
          { type: 'image', src: "https://via.placeholder.com/600x300", alt: "Sample", caption: "Five multicultural friends watching videos in social media sitting together and having fun." },
          { type: 'paragraph', text: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet." },
          { type: 'paragraph', text: "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum." },
          { type: 'paragraph', text: "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt." },
        ],
        date: "August 19, 2024",
        comments: "No Comments",
        image: "https://shine.creativemox.com/sociabiz/wp-content/uploads/sites/16/2024/08/home-friends-with-selfie-and-women-with-live-streaming-social-media-and-vlog-with-content-creator-1536x1025.jpg",
      },
  ];

  const article = articles[id];


  if (!article) {
    return <h2>Article not found!</h2>;
  }

  return (
    <div className="container my-5">
      {/* Article Header */}
      <div className="card text-white">
        <img src={article.image} className="card-img" alt={article.title} style={{ height: '400px', objectFit: 'cover' }} />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
          <span className="badge bg-secondary mb-3" style={{ fontSize: '0.9rem' }}>{article.category}</span>
          <h1 className="card-title text-center" style={{ fontWeight: '700', fontSize: '2.5rem' }}>{article.title}</h1>
          <p className="card-text">
            <small><i className="bi bi-calendar3 me-2"></i>{article.date} &bull; <i className="bi bi-chat-left me-2"></i>{article.comments}</small>
          </p>
        </div>
      </div>
<div style={{maxWidth:'900px' , margin : 'auto'}}>
      {/* Main Content */}
      <div className="card mt-4 shadow-sm">
        <div className="card-body text-start">
          {article.content.map((item, index) => {
            if (item.type === 'paragraph') {
              return <p key={index}>{item.text}</p>;
            }
            if (item.type === 'image') {
              return (
                <figure className="figure float-start me-md-3" style={{ maxWidth: '300px' }} key={index}>
                  <img src={item.src} className="figure-img img-fluid rounded" alt={item.alt} />
                  <figcaption className="figure-caption text-center">{item.caption}</figcaption>
                </figure>
              );
            }
            return null;
          })}

          {/* Social Share Section */}
          <hr />
          <div className="d-flex align-items-center">
            <span className="me-2" style={{ fontWeight: '600' }}>Share this:</span>
            <a href="#" className="text-decoration-none text-primary me-2"><i className="bi bi-facebook fs-4"></i></a>
            <a href="#" className="text-decoration-none text-info me-2"><i className="bi bi-twitter fs-4"></i></a>
            <a href="#" className="text-decoration-none text-primary me-2"><i className="bi bi-linkedin fs-4"></i></a>
            <a href="#" className="text-decoration-none text-success me-2"><i className="bi bi-whatsapp fs-4"></i></a>
          </div>
        </div>
      </div>

      {/* Author Info */}
      <div className="card mt-4 shadow-sm text-start">
        <div className="card-body d-flex flex-wrap align-items-center bg-dark text-white">
          <div className="me-3 mb-3">
            <img src="https://secure.gravatar.com/avatar/dbc9199e994702453cbd1cb9b8734d29?s=300&d=mm&r=g" alt="Author" className="rounded-circle" style={{ width: '60px', height: '60px' }} />
          </div>
          <div style={{ flex: '1 1 0' }}>
            <h5 className="card-title mb-1">Natalie Stanley</h5>
            <p className="card-text mb-0" style={{ fontSize: '0.9rem' }}>
              Hi, this is dummy biographical info for the design template kit mocreative. If any questions do hesitate to send us a message on the profile page ThemeForest.
            </p>
          </div>
        </div>
      </div>

      {/* Comment Section */}
      <div className="card mt-4 shadow-sm">
        <div className="card-body text-start">
          <h5>Leave a Reply</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">Comment</label>
              <textarea className="form-control" id="comment" rows="4"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="saveInfo" />
              <label className="form-check-label" htmlFor="saveInfo">Save my name, email, and website in this browser for the next time I comment.</label>
            </div>
            <button type="submit" className="btn btn-primary">Post Comment</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Articles;
