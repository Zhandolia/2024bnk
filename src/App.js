import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="container">
      <div className="menu">
        <nav>
          <div id="logo" onClick={handleScrollToTop} href="#" style={{cursor: 'pointer'}}>ZB</div>
          <a href="#about">01. About</a>
          <a href="#projects">02. Projects</a>
          <a href="#contact">03. Contact</a>
          <a href="/ZhandosBrownCV.pdf" className="resume-link" target="_blank" rel="noopener noreferrer">Resume</a>
        </nav>
      </div>
      <div className="content">
        <div className="intro-section">
          <section id="welcome">
              <h2>Zhandos Brown.</h2>
          </section>
        </div>
        
        <section id="about">
          <h1>01. About 👋</h1>
          <img src="prof.jpg" alt="picture" />
          {/* <p>
            Hailing from Kazakhstan, Central Asia, I'm a Computer Science sophomore at Boston University, 
            fluent in Kazakh, Russian, and English, with additional skills in Turkish and Arabic. 
            My tech journey began with high school robotics and was amplified at 80edays, Germany, 
            where I played a pivotal role in the ChargeHotels iOS application, both in development 
            and UI design. As the founder of MyGapMentor, I crafted a platform that empowers gap 
            year students using OpenAI, a project that secured significant funding and recognition. 
            I'm eager to connect with professionals who share my passion for innovation and envision 
            a transformative tech future.
          </p> */}

          <div class="description-container">
            <p>I’m Zhandos (“jan-dos”), and I’m a student at Boston University studying Computer Science. I'm a big fan of competing at hackathons and a current Logistics organizer in BostonHacks team.</p>
          </div>
          
          <div class="courses-container">
            <h2>Relevent Courses</h2>
            <div class="course">
              <h3>CS 111: Intro to CS with Python</h3>
            </div>
            <div class="course">
              <h3>CS 112: Intro to CS with Java</h3>
            </div>
            <div class="course">
              <h3>CS 131: Combinatoric Structures</h3>
            </div>
            <div class="course">
              <h3>CS 132: Geometric Algorithms</h3>
            </div>
            <div class="course">
              <h3>CS 210: Computer Systems</h3>
            </div>
            <div class="course">
              <h3>CS 237: Probability in Computing</h3>
            </div>
            <div class="course">
              <h3>MA 121: Calculus I</h3>
            </div>
            <div class="course">
              <h3>MA 124: Calculus II</h3>
            </div>
          </div>

        </section>

        <section id="projects">
          <h1>02. Some Things I've Made</h1>
          <div className="project">
            <h2 class="project-title">MyGapMentor | React App</h2>
            <p class="project-description">React.js, Flask, OpenAI API</p>
          </div>
          <div className="project">
            <h2 class="project-title">GeoTab | Chrome Extension</h2>
            <p class="project-description">JavaScript, HTML/CSS</p>
          </div>
          <div className="project">
            <h2 class="project-title">N-Body Simulation</h2>
            <p class="project-description">Java</p>
          </div>
          <div className="project">
            <h2 class="project-title">Project 4</h2>
            <p class="project-description">Description of project 4.</p>
          </div>
        </section>

        <section id="contact">
          <h1>03. What's Next?</h1>
          <p>Get in Touch</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/zhanbrown/">LinkedIn</a></li>
            <li><a href="mailto: zhandos@bu.edu">Email Me</a></li>
            <li><a href="/ZhandosBrownCV.pdf" className="resume-link" target="_blank" rel="noopener noreferrer">Resume</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;


