import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const images = [
    'nbody1.png',
    'nbody2.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
              <h1>Hello, my name is</h1>
              <h2>Zhandos Brown.</h2>
              <h3>I'm an artist and </h3>
              <h3>software engineer.</h3>
              <p>I'm currently a computer science student at Boston University 
                who loves to create things and solve problems. Get to know me and my work below.</p>
          </section>
          <div className="slideshow">
            <img src={images[currentIndex]} alt="Slide" />
          </div>
        </div>
        
        <section id="about">
          <h1>01. About Me</h1>
          <img src="aboutme.jpeg" alt="picture" />
          <p>
            Hailing from Kazakhstan, Central Asia, I'm a Computer Science sophomore at Boston University, 
            fluent in Kazakh, Russian, and English, with additional skills in Turkish and Arabic. 
            My tech journey began with high school robotics and was amplified at 80edays, Germany, 
            where I played a pivotal role in the ChargeHotels iOS application, both in development 
            and UI design. As the founder of MyGapMentor, I crafted a platform that empowers gap 
            year students using OpenAI, a project that secured significant funding and recognition. 
            I'm eager to connect with professionals who share my passion for innovation and envision 
            a transformative tech future.
          </p>
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