import React, { useEffect, useState } from 'react';
import MobilePopup from './MobilePopup';
import '../styles/Artboard.css';
import artboardImage from '../assets/artboard.png';
import brainstormImage from '../assets/brainstormartboard.png';
import navMapImage from '../assets/navmapartboard.png';
import personasImage from '../assets/personasartboard.png';
import demoVideo from '../assets/final.mp4';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';

function Artboard() {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Check mobile and show popup immediately
    const isMobileView = window.innerWidth <= 768;
    setIsMobile(isMobileView);
    if (isMobileView) {
      setShowPopup(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);
      setShowPopup(isMobileView);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    <div className="case-study">
      <div className="cover-image">
        <img src={artboardImage} alt="artboard app interface" />
      </div>
      <section className="overview">
        <h2>Overview</h2>
        <div className="overview-grid">
          <div className="challenge">
            <h3>Challenge</h3>
            <p>Design a mobile application that makes public art more accessible and engaging for everyday users.</p>
          </div>
          <div className="opportunity">
            <h3>Opportunity</h3>
            <p>Create an interactive platform that encourages users to discover, learn about, and engage with public art in their surroundings while building a community of art enthusiasts.</p>
          </div>
        </div>
        <div className="project-details">
          <div className="timeline">
            <h3>Timeline</h3>
            <p>Feb 2025</p>
          </div>
          <div className="tools">
            <h3>Tools</h3>
            <p>Figma</p>
          </div>
          <div className="responsibilities">
            <h3>Responsibilities</h3>
            <p>UX Research</p>
            <p>UI Design</p>
            <p>Prototyping</p>
          </div>
        </div>
      </section>

      <section className="background">
        <h2>Background</h2>
        <p>Artboard is a mobile application designed to put public art forward, allowing users to explore and connect with the history of art pieces. The app enables users to search for public art by location, save pieces they want to visit, and add those they have seen to their personal gallery.</p>
        <p>To enhance user engagement, Artboard incorporates a gamification system where users earn badges and titles upon reaching specific milestones. Additionally, Artboard fosters a sense of community by allowing users to follow friends, track their activity, and view their most recent achievements.</p>
        <p>Artboard aims to culturally enrich the lives of its users by encouraging them to stop, appreciate, and learn about public art that they might otherwise overlook. It's public art for the soul.</p>
      </section>

      <section className="process">
        <h2>Process</h2>
        <div className="process-grid">
          <div className="pain-points">
            <h3>User Pain Points</h3>
            <ul>
              <li>Many people pass by public art daily without knowing its history or significance.</li>
              <li>Users needed an engaging way to learn about public art without feeling like they were in a classroom.</li>
              <li>Designing a platform that balances accessibility for casual users while providing depth for art enthusiasts.</li>
              <li>Ensuring the UI was intuitive and visually appealing without distracting from the artwork itself.</li>
            </ul>
          </div>
          <div className="process-image">
            <img src={brainstormImage} alt="Brainstorming session for Artboard" />
          </div>
        </div>

        <div className="research">
          <h3>Research-Informed Design Decisions</h3>
          <ul>
            <li>Comparative Research: Inspired by platforms like Letterboxd, Fable, and Pokémon Go, we incorporated a mix of social engagement and gamification elements.</li>
            <li>User Surveys & Testing: Research revealed that users often see public art but don't know its meaning. Testing feedback led to a simplified UI with a strong emphasis on accessibility.</li>
            <li>Persona Development: Created personas for both casual users and art experts to ensure the app remained inclusive and easy to navigate.</li>
            <div className="personas-image">
              <img src={personasImage} alt="User personas for Artboard app" />
            </div>
            <li>Navigation Mapping: Structured the app layout based on user behavior insights, prioritizing intuitive access to key features.</li>
          </ul>
          <div className="nav-map">
            <img src={navMapImage} alt="Navigation map for Artboard app" />
          </div>
        </div>
      </section>

      <section className="redesign">
        <h2>The Solution</h2>
        <div className="impact-section">
          <div className="impact-box">
            <h3>How It's Transformative</h3>
            <p>Artboard revolutionizes how people interact with public art, making it more accessible and engaging. The app seamlessly combines discovery, education, and community features to create a platform that transforms passive observers into active art enthusiasts.</p>
          </div>
          <div className="demo-video">
            <video autoPlay loop muted playsInline src={demoVideo}></video>
          </div>
        </div>
        <div className="feature-grid">
          <div className="feature-item map-feature">
            <div className="feature-text">
              <h4>Interactive Map & Search</h4>
              <p>Users can search for and discover public art near them based on location.</p>
            </div>
            <div className="feature-image large-image">
              <img src={image1} alt="Interactive Map & Search feature" />
            </div>
          </div>
          <div className="feature-item gallery-feature">
            <div className="feature-text">
              <h4>Personal Gallery & Bookmarking</h4>
              <p>Users can save artwork they want to visit and track what they have explored.</p>
            </div>
            <div className="feature-image gallery-image">
              <img src={image2} alt="Personal Gallery & Bookmarking feature" />
            </div>
          </div>
          <div className="feature-item rewards-feature">
            <div className="feature-text">
              <h4>Gamification & Rewards</h4>
              <p>Milestones, badges, and titles incentivize engagement.</p>
            </div>
            <div className="feature-image large-image">
              <img src={image3} alt="Gamification & Rewards feature" />
            </div>
          </div>
          <div className="feature-item social-feature">
            <div className="feature-text">
              <h4>Social Features</h4>
              <p>Users can follow friends, see their activities, and interact through comments and reactions.</p>
            </div>
            <div className="feature-image gallery-image">
              <img src={image4} alt="Social Features feature" />
            </div>
          </div>
        </div>

        <div className="visual-design">
          <h3>Visual Design Choices</h3>
          <ul>
            <li>Minimalist Color Scheme: Inspired by modern art museums, Artboard primarily uses black, white, and subtle color accents to let the artwork stand out.</li>
            <li>Typography: The app utilizes a combination of a dramatic serif font for headings, reminiscent of museum plaques, and a clean sans-serif font for easy readability.</li>
            <li>Rounded UI Elements: Creates a contemporary and approachable aesthetic that appeals to both younger and older audiences.</li>
          </ul>
        </div>
      </section>

      <section className="reflection">
        <h2>Reflection</h2>
        <div className="opportunities">
          <h3>Future Opportunities</h3>
          <ul>
            <li>Integration of augmented reality (AR) to provide interactive historical insights.</li>
            <li>Partnering with museums, city programs, and local artists to expand the database.</li>
            <li>Hosting in-app challenges to encourage exploration and community engagement.</li>
          </ul>
        </div>
        <div className="conclusion">
          <h3>Conclusion</h3>
          <p>Artboard successfully merges cultural enrichment with modern technology to create a rewarding experience for users. By blending discovery, education, and community engagement, Artboard makes public art more accessible, meaningful, and interactive.</p>
        </div>
      </section>
    </div>
    <MobilePopup 
      isOpen={showPopup} 
      onClose={() => setShowPopup(false)} 
    />
    </>
  );
}

export default Artboard;
