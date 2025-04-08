import React from 'react';
import '../styles/MobilePopup.css';

function MobilePopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="mobile-popup-overlay" onClick={onClose}>
      <div className="mobile-popup" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <p>For a better experience, please view on a larger screen device.</p>
      </div>
    </div>
  );
}

export default MobilePopup;
