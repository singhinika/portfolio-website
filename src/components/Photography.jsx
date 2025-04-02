import React from 'react';
import '../styles/Photography.css';

function Photography() {
  return (
    <div className="photography">
      <div className="bento-grid">
        <div className="bento-item large">
          <img src="/placeholder1.jpg" alt="Photography work" />
        </div>
        <div className="bento-item">
          <img src="/placeholder2.jpg" alt="Photography work" />
        </div>
        <div className="bento-item tall">
          <img src="/placeholder3.jpg" alt="Photography work" />
        </div>
        <div className="bento-item">
          <img src="/placeholder4.jpg" alt="Photography work" />
        </div>
        <div className="bento-item">
          <img src="/placeholder5.jpg" alt="Photography work" />
        </div>
        <div className="bento-item wide">
          <img src="/placeholder6.jpg" alt="Photography work" />
        </div>
        <div className="bento-item">
          <img src="/placeholder7.jpg" alt="Photography work" />
        </div>
      </div>

      <div className="category-buttons">
        <button className="category-btn">City × Landscape</button>
        <button className="category-btn">Event</button>
        <button className="category-btn">Film</button>
      </div>
    </div>
  );
}

export default Photography;
