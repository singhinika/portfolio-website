import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div className="blob-container">
        <div className="blob-shape">
          <div className="content">
            <h1>inika</h1>
            <p className="pronunciation">/ineeka/</p>
            <p className="description">
              1. user-centered product designer
              <br />
              2. studying cognitive science @ UC Davis
            </p>
            <p className="bio">
              Passionate about creating intuitive and accessible digital experiences
              that bridge the gap between human cognition and technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
