import React from 'react';
import './slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import BlobCursor from '../BlobCursor/BlobCursor'
import { faHtml5, faCss3Alt, faJs, faFigma, faReact, faPython, faCuttlefish } from '@fortawesome/free-brands-svg-icons';

const sliders = [
  { name: 'HTML', level: '80%', icon: faHtml5 },
  { name: 'CSS', level: '90%', icon: faCss3Alt },
  { name: 'JavaScript', level: '70%', icon: faJs },
  { name: 'Figma', level: '85%', icon: faFigma },
  { name: 'React', level: '80%', icon: faReact },
  { name: 'Python', level: '85%', icon: faPython },
  { name: 'C++', level: '75%', icon: faCuttlefish },
];

const Slider = () => {
  return (
    <section id="slider" className="sliders-container">
      {/* <BlobCursor/> */}
      <h1 className="sliders-title">skills</h1>
      <div className="sliders-list">
        {sliders.map((slider, index) => (
          <div key={index} className="slider-card">
            <div className="slider-header">
              <FontAwesomeIcon icon={slider.icon} className="slider-icon" />
              <span className="slider-name">{slider.name}</span>
            </div>
            <div className="slider-bar">
              <div className="slider-progress" style={{ width: slider.level }}>
                <span className="slider-level">{slider.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </section>
  );
};

export default Slider;
