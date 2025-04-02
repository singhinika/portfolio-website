import React, { useEffect } from 'react';
import '../styles/CaseStudy.css';
import mordImage from '../assets/mord.png';

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
        <h1>Overview</h1>
        <div className="overview-grid">
          <div className="challenge">
            <h2>Challenge</h2>
            <p>Design a mobile application that streamlines communication and resource access for UC Davis freshmen living in dorms.</p>
          </div>
          <div className="opportunity">
            <h2>Opportunity</h2>
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

      <section className="solution">
        <h2>Solution</h2>
        <div className="solution-points">
          <div className="point">
            <h3>Streamlined Communication</h3>
            <p>A dedicated messaging system allows seamless interaction between freshmen and CAs.</p>
          </div>
          <div className="point">
            <h3>Centralized Resource Hub</h3>
            <p>Provides easy access to important UC Davis resources in one location.</p>
          </div>
          <div className="point">
            <h3>E-Bulletin Board</h3>
            <p>A digital noticeboard where students can find announcements, event updates, and important reminders.</p>
          </div>
          <div className="point">
            <h3>Automated Announcements</h3>
            <p>Important updates, such as upcoming finals and tuition deadlines, are automatically posted.</p>
          </div>
          <div className="point">
            <h3>User-Friendly Interface</h3>
            <p>Designed with a focus on ease of use to ensure smooth navigation and accessibility.</p>
          </div>
        </div>
      </section>

      <section className="strengths">
        <h2>How It's Transformative</h2>
        <ul>
          <li>Reduces communication barriers between students and CAs, fostering a stronger dorm community.</li>
          <li>Ensures students never miss important events or deadlines through automated reminders.</li>
          <li>Simplifies access to key resources, making the transition to college life smoother and more efficient.</li>
          <li>Provides a single, reliable platform for all dorm-related information.</li>
        </ul>
      </section>

      <section className="process">
        <h2>Process</h2>
        <div className="pain-points">
          <h3>Challenges</h3>
          <ul>
            <li>Freshmen often miss important campus events due to fragmented and disorganized communication channels.</li>
            <li>Connecting with CAs and peers is frustrating due to the lack of a streamlined messaging system.</li>
            <li>Finding essential university resources is difficult, making the transition to dorm life overwhelming for new students.</li>
          </ul>
        </div>

        <div className="research">
          <h3>Research-Informed Design Decisions</h3>
          <ul>
            <li>User Persona Development: Focused on the needs of UC Davis freshmen living in dorms, ensuring features directly address their biggest challenges.</li>
            <li>Pain Point Analysis: Identified key struggles through student feedback, leading to prioritized feature development.</li>
            <li>User Flow Optimization: Emphasized streamlined communication and resource accessibility to create an intuitive user experience.</li>
            <li>Feedback-Driven Iterations: Future updates will incorporate student suggestions, such as additional commenting capabilities on posts.</li>
          </ul>
        </div>
      </section>

      <section className="redesign">
        <h2>The Solution</h2>
        <div className="redesign-points">
          <div className="point">
            <h4>Streamlined Communication</h4>
            <p>A dedicated messaging system allows seamless interaction between freshmen and CAs.</p>
          </div>
          <div className="point">
            <h4>Centralized Resource Hub</h4>
            <p>Provides easy access to important UC Davis resources in one location.</p>
          </div>
          <div className="point">
            <h4>E-Bulletin Board</h4>
            <p>A digital noticeboard for announcements, event updates, and important reminders.</p>
          </div>
          <div className="point">
            <h4>Automated Announcements</h4>
            <p>Important updates, such as upcoming finals and tuition deadlines, are automatically posted.</p>
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

      <section className="conclusion">
        <h2>Conclusion</h2>
        <p>MORD effectively addresses the communication and resource access challenges faced by UC Davis freshmen. By centralizing essential information, enhancing messaging capabilities, and automating important announcements, MORD creates a smoother and more connected dorm experience, helping students successfully transition into college life.</p>
      </section>
    </div>
  );
}

export default Mord;
