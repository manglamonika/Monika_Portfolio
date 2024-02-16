import React from "react";
import "./intro.css";
import bg from "../../assets/pic 1.png";
import btnImg from "../../assets/hireme.png";
// import { Link } from "react-scroll";
import smoke from "../../assets/smoke.mp4";
// import pic from "../../assets/img.png"
import resume from "../../assets/Pankaj_Resume.pdf"

const Intro = () => {
  return (
    <>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm<span className="introName"> Pankaj</span> <br />
            Website desginer
          </span>
          <p className="introPara">
            I'm a Passionate web Developer who transfer ideas
            <br /> into Tangible Solutions.
          </p>
          <a href={resume} download={"Pankaj_Resume.pdf"}>
            <button className="button">
              {" "} 
              <img src={btnImg} alt="hire" className="btnImg" />
              Download_Resume
            </button>
          </a>
        </div>
        
        <div className="imgCont">
          <img src={bg} alt="Profile Pic" className="bg" />
        </div>

        <div className="smoke">
          <video src={smoke} autoPlay loop muted />
        </div>
      </section>
    </>
  );
};

export default Intro;
