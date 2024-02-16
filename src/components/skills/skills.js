import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import Appdesign from "../../assets/app-design.png";
import { useState } from "react";

const Skills = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const aboutMeText = `Hello, I'm Pankaj Kumar, currently pursuing my Master's in Computer Applications (MCA). My journey in the world of IT began with a Bachelor's in Computer Applications (BCA), 
  laying the foundation for my passion in this dynamic field. I possess a diverse skill set that encompasses Java, C++, Python, HTML, JavaScript, CSS, React, and Bootstrap. 
  My proficiency extends to front-end development, where I enjoy crafting user-friendly and visually appealing interfaces. Throughout my academic and professional journey, 
  I've had the opportunity to work on various projects, including a chatting application and a voice assistant using Python.
  These experiences have not only honed my technical skills but have also instilled in me a problem-solving mindset and a commitment to delivering innovative solutions. 
  I am enthusiastic about leveraging technology to address real-world challenges and continuously seek opportunities to expand my knowledge and skill repertoire. 
  Join me as I embark on this exciting and ever-evolving adventure in the realm of information technology.`;

  const trimmedText = showMore ? aboutMeText : aboutMeText.slice(0, 300);
  return (
    <section id="skills">
      <span className="skillTitle">About Me</span>
      {/* <span className='skillDesc'>I'm a Professional WebDevloper. Our Main goal to help & satisfied the Local & Global Clients By web Devplopment Solutions</span> */}
      <span className="skillDesc">{trimmedText}</span>
      {!showMore && (
        <button className="readMoreButton" onClick={toggleShowMore}>
          Read More
        </button>
      )}
      <div className="SkillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>This is Demo Text, You can Write your own content here.</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2> WebDesign</h2>
            <p>
              This Demo text can be changed while making the production ready
              website.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={Appdesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>You can Write text related to mobile app Devplopment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
