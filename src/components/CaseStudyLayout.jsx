import React, { useEffect, useState } from 'react';
import MobilePopup from './MobilePopup';

function CaseStudyLayout({ children }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 768) {
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    };

    // Check immediately
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {children}
      <MobilePopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      />
    </>
  );
}

export default CaseStudyLayout;
