import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="container">
      <div className="menu">
        <nav>
          <div id="logo" onClick={handleScrollToTop} href="#" style={{cursor: 'pointer'}}>ZB</div>
          <a href="#about">01. About</a>
          <a href="#experiences">02. Experience</a>
          <a href="#projects">03. Projects</a>
          <a href="#awards">04. Awards</a>
          <a href="/ZhandosBrownCV.pdf" className="resume-link" target="_blank" rel="noopener noreferrer">Resume</a>
        </nav>
      </div>

      <div className="content">
        
        <div className="intro-section">
          <section id="welcome">
            <img src="prof.jpg" alt="Zhandos Brown" />
            <h1>Zhandos Brown.</h1>
            <div className="social-links">
              <a href="https://github.com/zhandolia" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/zhanbrown/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com/zhandolia" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="mailto:zhandos@bu.edu">Email</a>
            </div>
          </section>
        </div>

        <section id="about">
          <h1>01. About 👋</h1>
          
          <div class="description-container">
            <p>I’m Zhandos (“jan-dos”), and I’m a student at Boston University studying Computer Science. I'm a big fan of hackathons and a current Logistics organizer in the BostonHacks team. During my freshman year, I interned at 80edays as a Software Engineer - contributing to the backend server on engineering the mobile app for the biggest EV rally event in Europe. Following at 80edays, I continued my internship as a Full Stack iOS Developer - by developing the mobile app itself. I'm eager to connect with professionals who share my passion for innovation and envision a transformative tech future.</p>
            <p>Feel free to contact me at <a href="mailto:zhandos@bu.edu" class="bold-link">zhandos@bu.edu</a> or via <a target="_blank" href="https://www.linkedin.com/in/zhanbrown/" class="bold-link">LinkedIn</a></p>
          </div>
        </section>
        
        <div class="courses-container">
          <h2>Relevant Courses 📝</h2>
          <div class="course">
            <h3><a class="course-link" target="_blank" href="https://www.bu.edu/academics/cas/courses/cas-cs-111/">CS 111</a>: Intro to CS with Python</h3>
          </div>
          <div class="course">
            <h3><a class="course-link" target="_blank" href="https://www.bu.edu/academics/cas/courses/cas-cs-112/">CS 112</a>: Intro to CS with Java</h3>
          </div>
          <div class="course">
            <h3><a class="course-link" target="_blank" href="https://www.bu.edu/academics/cas/courses/cas-cs-131/">CS 131</a>: Combinatoric Structures</h3>
          </div>
          <div class="course">
            <h3><a class="course-link" target="_blank" href="https://www.bu.edu/academics/cas/courses/cas-cs-132/">CS 132</a>: Geometric Algorithms</h3>
          </div>
          <div class="course">
            <h3><a class="course-link" target="_blank" href="https://www.bu.edu/academics/cas/courses/cas-cs-210/">CS 210</a>: Computer Systems</h3>
          </div>
          <div class="course">
            <h3><a class="course-link" target="_blank" href="https://www.bu.edu/academics/cas/courses/cas-cs-237/">CS 237</a>: Probability in Computing</h3>
          </div>
          <div class="course">
            <h3><a class="course-link" target="_blank" href="https://www.bu.edu/academics/hub/courses/hub-xc-475/">XC 475</a>: Spark! Innovation Program</h3>
          </div>
          <div class="course">
            <h3><a class="course-link" target="_blank" href="https://www.bu.edu/academics/cds/courses/cds-ds-291/">DS 291</a>: Spark! Exploring DEI in Tech</h3>
          </div>
          <div class="course">
            <h3><a class="course-link" target="_blank" href="https://www.bu.edu/academics/cas/courses/cas-ma-121/">MA 121</a>: Calculus I</h3>
          </div>
          <div class="course">
            <h3><a class="course-link" target="_blank" href="https://www.bu.edu/academics/cas/courses/cas-ma-124/">MA 124</a>: Calculus II</h3>
          </div>

         </div>

        <section id="experiences">
          <h1>02. Professional Experience 🧩</h1>
          <div className="experience">
            <h2 class="experience-title">80edays | ChargeHotels | iOS Developer Intern</h2>
            <p class="project-description">Led development of feature-rich iOS application for major electric vehicle rally event, leveraging Swift and Figma to create robust and user-friendly interface. Focused on integrating real-time tracking, event updates, and participant engagement to deliver seamless user experience.</p>
          </div>
          
          <div className="experience">
            <h2 class="experience-title">80edays | EcoRoute | Software Engineering Intern</h2>
            <p class="project-description">Led development of feature-rich iOS application for major electric vehicle rally event, leveraging Swift and Figma to create robust and user-friendly interface. Focused on integrating real-time tracking, event updates, and participant engagement to deliver seamless user experience.</p>
          </div>

          <div className="experience">
            <h2 class="experience-title">GHRCCA | Full Stack Web Development Intern</h2>
            <p class="project-description">Led development of feature-rich iOS application for major electric vehicle rally event, leveraging Swift and Figma to create robust and user-friendly interface. Focused on integrating real-time tracking, event updates, and participant engagement to deliver seamless user experience.</p>
          </div>

          <div className="experience">
            <h2 class="experience-title">Gradcompleks Architectural | 3D Design Intern</h2>
            <p class="project-description">Led development of feature-rich iOS application for major electric vehicle rally event, leveraging Swift and Figma to create robust and user-friendly interface. Focused on integrating real-time tracking, event updates, and participant engagement to deliver seamless user experience.</p>
          </div>

        </section>
        
        <section id="projects">
          <h1>03. Personal Projects 🌳</h1>
          <div className="project">
            <h2 class="project-title">OQIGA.AI | React App | <a href="https://oqiga-ai.vercel.app" target="_blank" rel="noopener noreferrer">oqiga-ai.vercel.app</a></h2>
            <p class="project-description"> Engineered pioneering educational platform using React.js for frontend and Flask for backend, featuring interactive storytelling with parental voice integration achieved through IPython and Google Colab with Jupyter Notebook.</p>
            <p>Achieved second place at MakeHarvard 2024 hackathon, demonstrating project’s innovation and impact in educational technology, and garnering significant interest and acclaim.</p> 
          </div>

          <div className="project">
            <h2 class="project-title">MyGapMentor | React App | <a href="https://mygapmentor.vercel.app" target="_blank" rel="noopener noreferrer">mygapmentor.vercel.app</a></h2>
            <p class="project-description">Developed MyGapMentor, a dynamic OpenAI API-powered platform tailored for gap year students, offering bespoke coaching, strategic opportunity identification, and inventive approaches to bolster university application success.</p>
            <p>Garnered recognition and funding for MyGapMentor, debuting it as a standout project at nFactorial Incubator 2023, a premier A.I.-focused web development boot camp, chosen from over 4500 candidates. Successfully secured over $50,000 in support from Microsoft for Startups Founders Hub, propelling the project’s growth.</p>
          </div>

          <div className="project">
          <h2 class="project-title">GeoTab | Chrome Extension | <a href="https://chromewebstore.google.com/detail/geotab/ifcklilffcpllkallhdaanealofknahe?utm_source=ext_sidebar&hl=en-US" target="_blank" rel="noopener noreferrer">shorturl.at/nxSW8</a></h2>
            <p class="project-description">Designed and launched Chrome extension game for geography education. It invites users to identify flags, capitals, and their locations of countries worldwide, effectively blending leisure with enrichment of geographical knowledge.</p>
            <p>Achieved notable accomplishment by securing place within top 4.5% of over 4,000 candidates for nFactorial Incubator 2022, web development boot camp with innovative project development</p>
          </div>

          <div className="project">
          <h2 class="project-title">N-Body Simulation | Java Simulation | <a href="https://github.com/zhandolia/nbody" target="_blank" rel="noopener noreferrer"> github.com/zhandolia/nbody</a></h2>
            <p class="project-description">Enhanced solar system simulation using Java, blending background imagery, studio-quality sound, and prototypical
            planet models with mathematical precision. Further enhanced by integrating real astronomical data and interactive features, project achieved greater scientific accuracy and user engagement in visualizing orbital mechanics.</p>
          </div>

        </section>

        <section id="awards">
          <h1>04. Competitive Awards 🏆</h1>
          <div class="award">
            <h3>2/20 place at MakeHarvard Hackathon</h3>
          </div>
          <div class="award">
            <h3>$50,000 support from Microsoft for Startups Founders Hub</h3>
          </div>
          <div class="award">
            <h3>2/20 place at Data Science Hackathon</h3>
          </div>
          <div class="award">
            <h3>4/100 place at International Robotics Competition</h3>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;


