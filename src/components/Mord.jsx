import React, { useEffect } from 'react';
import '../styles/Mord.css';
import mordImage from '../assets/mord.png';
import mordmsgImage from '../assets/mordmsg.png';
import homemordImage from '../assets/homemord.png';
import mordnavmapImage from '../assets/mordnavmap.png';
import menuImage from '../assets/menu.png';

function Mord() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study">
      <div className="cover-image">
        <img src={mordImage} alt="MORD app interface" />
      </div>
      
      <section className="overview">
        <h2>Overview</h2>
        <div className="overview-grid">
          <div className="challenge">
            <h3>Challenge</h3>
            <p>Design a mobile application that streamlines communication and resource access for UC Davis freshmen living in dorms.</p>
          </div>
          <div className="opportunity">
            <h3>Opportunity</h3>
            <p>Create a centralized platform that connects students with CAs, campus events, and essential resources while simplifying the transition to dorm life.</p>
          </div>
        </div>
        <div className="project-details">
          <div className="timeline">
            <h3>Timeline</h3>
            <p>Mar 2025</p>
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
        <p>MORD is a mobile application designed to streamline communication and access to resources for UC Davis freshmen living in dorms. The app serves as a centralized hub where students can easily connect with their Community Advisors (CAs), stay informed about campus events, and access essential university resources.</p>
        <p>MORD eliminates the confusion and inefficiencies associated with multiple platforms by integrating messaging, an e-bulletin board, and an automated announcement system, ensuring students stay connected and informed throughout their transition to dorm life.</p>
      </section>

      <section className="strengths">
        <h2>How MORD is Transformative</h2>
        <ul>
          <li>Reduces communication barriers between students and CAs, fostering a stronger dorm community.</li>
          <li>Ensures students never miss important events or deadlines through automated reminders.</li>
          <li>Simplifies access to key resources, making the transition to college life smoother and more efficient.</li>
          <li>Provides a single, reliable platform for all dorm-related information.</li>
        </ul>
      </section>

      <section className="process">
        <h2>Process</h2>
        <div className="research">
          <div className="research-points">
            <div className="research-point">
              <h4>Navigation Flow</h4>
              <div className="research-image">
                <img src={mordnavmapImage} alt="MORD navigation flow diagram" />
              </div>
            </div>
            <div className="research-point">
              <h4>Site Map</h4>
              <div className="research-image">
                <img src={menuImage} alt="MORD site map" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="redesign">
        <h2>The Solution</h2>
        <div className="solution-container">
          <div className="solution-row">
            <div className="solution-text">
              <h3>Streamlined Communication</h3>
              <p>A dedicated messaging system allows seamless interaction between freshmen and CAs.</p>
            </div>
            <div className="solution-image">
              <img src={mordmsgImage} alt="MORD messaging interface" />
            </div>
          </div>
          <div className="solution-row">
            <div className="solution-text">
              <h3>E-Bulletin Board</h3>
              <p>A digital noticeboard for announcements, event updates, and important reminders.</p>
            </div>
            <div className="solution-image">
              <img src={homemordImage} alt="MORD bulletin board interface" />
            </div>
          </div>
        </div>

        <div className="visual-design">
          <h3>Visual Design Choices</h3>
          <ul>
            <li>Bright and UC Davis-Inspired Colors: A refreshed color scheme to better reflect school spirit and create a more inviting experience.</li>
            <li>Intuitive Navigation: A simple and organized layout that prioritizes accessibility for new students.</li>
            <li>Modern, Engaging UI: A balance between functionality and aesthetics, ensuring an efficient yet visually appealing design.</li>
          </ul>
        </div>
      </section>

      <section className="reflection">
        <h2>Reflection</h2>
        <p>MORD effectively addresses the communication and resource access challenges faced by UC Davis freshmen. By centralizing essential information, enhancing messaging capabilities, and automating important announcements, MORD creates a smoother and more connected dorm experience, helping students successfully transition into college life.</p>
      </section>
    </div>
  );
}

export default Mord;
