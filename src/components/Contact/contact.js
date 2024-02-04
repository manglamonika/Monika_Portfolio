import React, { useRef } from "react";
import "./contact.css";
import FacebookIcon from "../../assets/facebook-icon.png";
import GithubIcon from "../../assets/github.png";
import InstagramIcon from "../../assets/instagram.png";
import YoutubeIcon from "../../assets/youtube.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fep2rdg', 'template_v82qbk6', form.current, 'bgHOWQolBeYw-I9ng')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert('Email Sent !')
      }, (error) => {
            console.log(error.text);
      });
  };
  return (
    <section className="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name"  name="your_name"/>
          <input type="email" className="email" placeholder="Your Email" name="your_email" />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={YoutubeIcon} alt="Youtube" className="link" />
            <img src={GithubIcon} alt="GitHub" className="link" />
            <img src={InstagramIcon} alt="Instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
