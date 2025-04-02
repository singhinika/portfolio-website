import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Design.css';
import artboardImage from '../assets/artboard.png';
import myucdavisImage from '../assets/myucdavis.png';
import mordImage from '../assets/mord.png';

function Design() {
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
          <Link key={project.id} to={project.link} className="project-button">
            <img src={project.image} alt={project.title} className="project-image" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Design;
