import React, { useState } from 'react';
import '../styles/Photography.css';

function Photography() {
  const [expandedPhoto, setExpandedPhoto] = useState(null);

  const featuredPhotos = [
    {
      id: 1,
      src: '/images/photography/rainbow.jpg',
      alt: 'Double rainbow over mountains',
      size: 'large'
    },
    {
      id: 2,
      src: '/images/photography/chicago.jpg',
      alt: 'Aerial view of Chicago skyline',
      size: 'wide'
    },
    {
      id: 3,
      src: '/images/photography/sunset.jpg',
      alt: 'Sunset over the ocean',
      size: 'tall'
    }
  ];

  const handlePhotoClick = (photo) => {
    setExpandedPhoto(expandedPhoto === photo ? null : photo);
  };

  const handleExpandedClick = (e) => {
    if (e.target === e.currentTarget) {
      setExpandedPhoto(null);
    }
  };

  return (
    <div className="photography">
      <div className="featured-gallery">
        {featuredPhotos.map((photo) => (
          <div
            key={photo.id}
            className={`gallery-item ${photo.size}`}
            onClick={() => handlePhotoClick(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {expandedPhoto && (
        <div className="expanded-photo" onClick={handleExpandedClick}>
          <img src={expandedPhoto.src} alt={expandedPhoto.alt} />
        </div>
      )}

      <div className="behance-link">
        <a 
          href="https://www.behance.net/gallery/223081873/Photography" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          View full project on Behance →
        </a>
      </div>
    </div>
  );
}

export default Photography;
