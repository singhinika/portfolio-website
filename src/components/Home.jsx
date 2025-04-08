import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="blob-container">
        <div className="blob-shape">
          <div className="content">
            <h1>inika</h1>
            <div className="name-details">
              <p className="pronunciation">/ineeka/</p>
              <p className="word-type">noun</p>
            </div>
            <p className="description">
              <span className="tab">1.</span> user-centered product designer
              <br />
              <span className="tab">2.</span> studying Computational Cognitive Science @ UC Davis
            </p>
            <Link to="/design" className="projects-button">
              projects ▾
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
