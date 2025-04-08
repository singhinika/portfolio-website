import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Design.css';
import artboardImage from '../assets/artboard.png';
import myucdavisImage from '../assets/myucdavis.png';
import mordImage from '../assets/mord.png';
import MobilePopup from './MobilePopup';

function Design() {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleProjectClick = (e, link) => {
    if (isMobile) {
      navigate(link);
      // Show popup after a short delay to allow navigation to complete
      setTimeout(() => {
        setShowPopup(true);
      }, 100);
    } else {
      navigate(link);
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Artboard',
      description: 'Making public art accessible.',
      image: artboardImage,
      link: '/artboard'
    },
    {
      id: 2,
      title: 'myucdavis',
      description: 'A mobile solution for students navigating campus',
      image: myucdavisImage,
      link: '/myucdavis'
    },
    {
      id: 3,
      title: 'MORD',
      description: 'Dorm life, rewritten',
      image: mordImage,
      link: '/mord'
    }
  ];

  return (
    <div className="design">
      <div className="projects-container">
        {projects.map((project) => (
          <Link 
            key={project.id} 
            to={project.link} 
            className="project-button"
            onClick={(e) => handleProjectClick(e, project.link)}
          >
            <img src={project.image} alt={project.title} className="project-image" />
          </Link>
        ))}
      </div>
      <MobilePopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      />
    </div>
  );
}

export default Design;
