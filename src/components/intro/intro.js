import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./intro.css";
// import bg from "../../assets/pic 1.png";
import btnImg from "../../assets/hireme.png";
import smoke from "../../assets/smoke.mp4";
import resume from "../../assets/monika_cv1.pdf";

const blurText = (text) => {
  const springs = text.split("").map((char, i) =>
    useSpring({
      from: { filter: "blur(5px)" },
      to: { filter: "blur(0px)" },
      delay: i * 200, // Adjust the delay for a staggered animation effect
    })
  );

  return (
    <span>
      {text.split("").map((char, i) => (
        <animated.span key={i} style={springs[i]}>
          {char}
        </animated.span>
      ))}
    </span>
  );
};

const Intro = () => {
  return (
    <>
      <section id="intro">
        <div className="introContent">
          {/* Use blurText for animated greeting */}
          <span className="hello">{blurText("Hello,")}</span>
          <span className="introText">
            I'm<span className="introName"> {blurText("Monika")}</span> <br />
            {blurText("Website Designer")}
          </span>
          <p className="introPara">
            {blurText("I'm a Passionate web Developer who transforms ideas")}
            <br /> {blurText("into Tangible Solutions.")}
          </p>
          <a href={resume} download={"Monika_resume.pdf"}>
            <button className="button">
              <img src={btnImg} alt="hire" className="btnImg" />
              Download_Resume
            </button>
          </a>
        </div>

        {/* <div className="imgCont">
          <img src={bg} alt="Profile Pic" />
        </div> */}

        <video src={smoke} autoPlay loop muted />
      </section>
    </>
  );
};

export default Intro;
