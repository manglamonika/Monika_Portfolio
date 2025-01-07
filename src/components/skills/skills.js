import React, { useState } from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import Appdesign from "../../assets/app-design.png";
import AboutMe from "../../assets/aboutMe.png"

const Skills = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const aboutMeText = `Hello, I'm Pankaj Kumar, a passionate MERN stack developer with a strong foundation in web development. My expertise includes React.js for crafting dynamic user interfaces, Node.js and Express.js for building robust backends, and MongoDB for efficient database management. 
  I enjoy working on full-stack projects and solving complex problems with clean, efficient code. Some of my notable projects include a real-time chat application, a voice assistant, and a blog platform. These experiences have honed my technical skills and fueled my enthusiasm for creating innovative solutions. 
  I'm always eager to learn new technologies and explore ways to leverage them to address real-world challenges. Let's build something amazing together!`;

  const trimmedText = showMore ? aboutMeText : aboutMeText.slice(0, 300);

  return (
    <section id="skills" className="skills-section">
  <h2 className="section-title">About Me</h2>
  <div className="about-container">
    <p className="about-text">{trimmedText}</p>
    
    <div className="rdm">
      <img src={AboutMe} alt="design" className="rdm-img" />
    </div>
  </div>

  {!showMore && (
      <button className="read-more-btn" onClick={toggleShowMore}>
        Read More
      </button>
    )}
  <div className="skills-container">
    <div className="skill-card">
      <img src={UIDesign} alt="Frontend Development" className="skill-icon" />
      <h3 className="skill-title">Frontend Development</h3>
      <p className="skill-description">
        Proficient in React.js, JavaScript, HTML, and CSS to create responsive and visually appealing web interfaces.
      </p>
    </div>
    <div className="skill-card">
      <img src={WebDesign} alt="Backend Development" className="skill-icon" />
      <h3 className="skill-title">Backend Development</h3>
      <p className="skill-description">
        Skilled in Node.js, Express.js, and MongoDB to develop secure and scalable server-side applications.
      </p>
    </div>
    <div className="skill-card">
      <img src={Appdesign} alt="Full Stack Development" className="skill-icon" />
      <h3 className="skill-title">Full Stack Development</h3>
      <p className="skill-description">
        Expertise in integrating frontend and backend technologies to deliver end-to-end solutions.
      </p>
    </div>
  </div>
</section>

  );
};

export default Skills;
