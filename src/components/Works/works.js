import React from 'react';
import './works.css';
// import Spline from '@splinetool/react-spline';
import port1 from '../../assets/port1.png';
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.png';
import price from '../../assets/price.png';
import fantasy from '../../assets/fantasy.png';
import port4 from '../../assets/port-4.png';
// import projects from '../../assets/projects.png'
const Works = () => {
  return (
    <section id="works" className="worksSection">
      <div className="Work-projects">
  <h2 className="worksTitle">My Projects</h2>
  
</div>


      <div className="worksGrid">
        <div className="card">
          <img src={port1} alt="Project 1" className="worksImg" />
          <div className="cardContent">
            <h3 className="cardTitle">Job Portal (MERN Stack)</h3>
            <p className="cardSubtitle">A Job Portal Web Application.</p>
            <a href="https://github.com/manglamonika/jobLearning">View Project</a>
          </div>
        </div>
        
       
        <div className="card">
          <img src={port2} alt="Project 2" className="worksImg" />
          <div className="cardContent">
            <h3 className="cardTitle">Be-Blogger</h3>
            <p className="cardSubtitle">Bloggiing Website  </p>
            <a href="https://github.com/itsAnjanaMourya/Be-Blogger">View Project</a>
          </div>
        </div>

        
        <div className="card">
          <img src={port3} alt="Project 3" className="worksImg" />
          <div className="cardContent">
            <h3 className="cardTitle">FlipKart-Clone</h3>
            <p className="cardSubtitle">Clonning Website</p>
            <a href="https://github.com/manglamonika/FlipKart-Clone">View Project</a>
          </div>
        </div>
        <div className="card">
          <img src={price} alt="Project 4" className="worksImg" />
          <div className="cardContent">
            <h3 className="cardTitle">Page Design</h3>
            <p className="cardSubtitle">A Selling Page Design</p>
            <a href="https://ui-component-assignment.netlify.app/">View Project</a>
          </div>
        </div>
        <div className="card">
          <img src={fantasy} alt="Project 5" className="worksImg" />
          <div className="cardContent">
            <h3 className="cardTitle">Fantasy Game</h3>
            <p className="cardSubtitle">CRUD App Showcasing MERN Stack Expertise</p>
            <a href="https://fantasygame-app.netlify.app/">View Project</a>
          </div>
        </div>
        <div className="card">
          <img src={port4} alt="Project 6" className="worksImg" />
          <div className="cardContent">
            <h3 className="cardTitle">React Learning </h3>
            <p className="cardSubtitle">A unique description of Project 6.</p>
            <a href="https://vitereactlearning.netlify.app/">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
