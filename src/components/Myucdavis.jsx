import React, { useEffect } from 'react';
import '../styles/Myucdavis.css';

import myucdavisImage from '../assets/myucdavis.png';
import myucdhomeImage from '../assets/myucdhome.png';
import myucdfinalVideo from '../assets/myucdfinal.mp4';
import userImage from '../assets/user.png';
import wireframe1 from '../assets/wireframe1.png';
import wireframe2 from '../assets/wireframe2.png';
import wireframe3 from '../assets/wireframe3.png';
import myucdorgImage from '../assets/myucdorg.png';

function Myucdavis() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study">
      <div className="cover-image">
        <img src={myucdavisImage} alt="myucdavis app interface" />
      </div>
      <section className="overview">
        <h2>Overview</h2>
        <div className="overview-grid">
          <div className="challenge">
            <h3>Challenge</h3>
            <p>Redesign the website my.ucdavis.edu for Design Interactive's Fellowship.</p>
          </div>
          <div className="opportunity">
            <h3>Opportunity</h3>
            <p>We wanted to redesign the myucdavis platform into a mobile app that was <strong>more intuitive, user-friendly,</strong> and <strong>accessible</strong> -- an app that could significantly improve the student experience.</p>
          </div>
        </div>
        <div className="project-details">
          <div className="timeline">
            <h3>Timeline</h3>
            <p>Apr - May 2024</p>
          </div>
          <div className="tools">
            <h3>Tools</h3>
            <p>Figma</p>
          </div>
          <div className="responsibilities">
            <h3>Responsibilities</h3>
            <p>UX Research</p>
            <p>Wireframing & Prototyping</p>
          </div>
        </div>
      </section>

      <section className="background">
        <h2>Background</h2>
        <p>The original myucdavis website was designed primarily for desktop use, and its mobile version was not optimized for small screens. The website's user interface was cluttered, with too many options displayed in a non-intuitive layout. Many students found it difficult to navigate the various sections of the site, and it was unclear what each function was for. As a result, students often felt frustrated and had to rely on multiple websites and external resources for the services they needed.</p>
      </section>

      <section className="process">
        <h2>Process</h2>
        <div className="pain-points-container">
          <div className="pain-points">
            <h3>User Pain Points</h3>
            <ul>
            <li><strong>Cluttered Interface:</strong> Students felt overwhelmed by the number of options and sections on the homepage.</li>
            <li><strong>Unclear Functionality:</strong> Many students were unsure about what many features of the website did.</li>
            <li><strong>Mobile Experience:</strong> The website was not optimized for mobile, so students had a poor experience when trying to access it on their phones.</li>
            <li><strong>Accessibility Issues:</strong> There were complaints about the website's color scheme, font size, and the difficulty of reading text for users with visual impairments.</li>
          </ul>
          </div>
          <div className="pain-points-image">
            <img src={myucdorgImage} alt="Original myucdavis website interface" />
          </div>
        </div>

        <div className="persona">
          <h3>Persona and User Journey</h3>
          <div className="persona-details">
            <div className="avatar-placeholder">
              <img src={userImage} alt="User avatar" />
            </div>
            <div className="persona-info">
              <h4>Persona: Sarah</h4>
              <ul>
                <li>Age: 20</li>
                <li>Major: Computer Science</li>
                <li>Tech Savviness: High</li>
                <li>Needs: Easy access to class schedules, grades, campus news, and financial information.</li>
              </ul>
              <div className="user-journey">
                <h4>Sarah's User Journey:</h4>
                <ol>
                  <li>Goal: Sarah needs to check her schedule, when campus restaurants close and make a payment for an upcoming fee.</li>
                  <li>Challenge: She opens the myucdavis website on her phone, but the site's cluttered homepage makes it hard to find anything useful.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ideation">
        <h2>Ideation</h2>
        <h3>Developing a Solution</h3>
        <p>During the ideation phase, we worked on several concepts to address the issues. Our focus was on simplifying the interface and improving accessibility while ensuring the design was modern and visually appealing.</p>
        <p>We explored different layouts, navigation styles (tab bar, hamburger menu, etc.), and color schemes. We prioritized simplicity, ease of navigation, and accessibility in our designs.</p>
        <div className="wireframes-grid">
          <img src={wireframe1} alt="Initial wireframe design" />
          <img src={wireframe2} alt="Refined wireframe design" />
          <img src={wireframe3} alt="Final wireframe design" />
        </div>
      </section>

      <section className="redesign">
        <h2>The Redesign</h2>
        <h3>Major Redesigns</h3>
        <div className="redesign-row">
          <div className="redesign-text">
            <div className="redesign-point">
              <h4>Improved Mobile Optimization</h4>
              <p>The app was designed for mobile users, ensuring that all pages loaded quickly and were easy to navigate on a small screen-- unlike the website which doesn't function on mobile as well as it does on desktop.</p>
            </div>
          </div>
          <div className="redesign-video">
            <video 
              src={myucdfinalVideo}
              autoPlay 
              loop 
              muted 
              playsInline 
              className="demo-video"
            />
          </div>
        </div>
      </section>

      <section className="reflection">
        <h2>Reflection</h2>
        <div className="next-steps">
          <h3>Next Steps</h3>
          <ul>
            <li><strong>Accessibility Features:</strong> We want to continue to improve upon accessibility and incorporate color-blind friendly palettes, adjustable font sizes, and voice-guided navigation to enhance accessibility for all students.</li>
            <li><strong>User Testing:</strong> We would conduct further rounds of user testing with a broader sample of students to ensure the app meets the needs of all user groups, including those with disabilities.</li>
            <li><strong>Feature Expansion:</strong> Based on further user feedback, we could add more features, such as personalized notifications, integration with third-party tools, or academic progress tracking.</li>
          </ul>
        </div>
      </section>

      <section className="conclusion">
        <h2>Conclusion</h2>
        <p>This redesign was an opportunity to create a more effective and accessible solution for UC Davis students. The app's improved navigation, accessibility, and aesthetics reflect the valuable insights we gathered from students, and we believe it will help make their college lives easier and more organized.</p>
      </section>
    </div>
  );
}

export default Myucdavis;
