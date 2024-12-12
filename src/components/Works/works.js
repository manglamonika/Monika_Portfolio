import React from 'react';
import './works.css';
import port1 from '../../assets/port1.png';
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.png';
import price from '../../assets/price.png';
import fantasy from '../../assets/fantasy.png'
import port4 from '../../assets/port-4.png';

const Works = () => {
  return (
    <section id="works" className="worksSection">
      <h2 className="worksTitle">Projects</h2>
      <div className="worksGrid">
        <a href="https://github.com/pankajydv15/Chatting-App" className="card">
          <img src={port1} alt="ChatEase" className="worksImg" />
          <div className="cardContent">
            <h3 className="cardTitle">ChatEase</h3>
            <p className="cardSubtitle">(Realtime Chatting Application)</p>
          </div>
        </a>
        <a href="https://github.com/pankajydv15/Aqua" className="card">
          <img src={port2} alt="Aqua" className="worksImg" />
          <div className="cardContent">
            <h3 className="cardTitle">Aqua</h3>
            <p className="cardSubtitle">(Voice Assistant)</p>
          </div>
        </a>
        <a href="https://vitereactlearning.netlify.app/" className="card">
          <img src={port4} alt="Blog" className="worksImg" />
          <div className="cardContent">
            <h3 className="cardTitle">React Learning</h3>
            <p className="cardSubtitle">(Website)</p>
          </div>
        </a>
        
        <a href="https://ui-component-assignment.netlify.app" className="card">
          <img src={price} alt="Blog" className="worksImg" />
          <div className="cardContent">
            <h3 className="cardTitle">Price Design</h3>
            <p className="cardSubtitle">(Design)</p>
          </div>
        </a>
        <a href="https://github.com/pankajydv15/vlog" className="card">
          <img src={port3} alt="Blog" className="worksImg" />
          <div className="cardContent">
            <h3 className="cardTitle">Blog</h3>
            <p className="cardSubtitle">(Bootstrap Website)</p>
          </div>
        </a>
        {/* <a href="https://github.com/pankajydv15/vlog" className="card">
          <img src={port3} alt="Blog" className="worksImg" />
          <div className="cardContent">
            <h3 className="cardTitle">Blog</h3>
            <p className="cardSubtitle">(Website)</p>
          </div>
        </a> */}
        <a href="https://fantasygame-app.netlify.app" className="card">
          <img src={fantasy} alt="Blog" className="worksImg" />
          <div className="cardContent">
            <h3 className="cardTitle">Fantasy Game</h3>
            <p className="cardSubtitle">(Website)</p>
          </div>
        </a>
        {/* <a href="https://fantasygame-app.netlify.app" className="card">
          <img src={fantasy} alt="Blog" className="worksImg" />
          <div className="cardContent">
            <h3 className="cardTitle">Fantasy Game</h3>
            <p className="cardSubtitle">(Website)</p>
          </div>
        </a> */}
        
      </div>
    </section>
  );
};

export default Works;
