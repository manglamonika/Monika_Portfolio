import React, { useRef } from "react";
import "./contact.css";
import GmailIcon from "../../assets/gmail-icon.png.png";
import GithubIcon from "../../assets/github.png";
import InstagramIcon from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedIn.png";
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

            <a href="https://mail.google.com/mail/u/1/#inbox">
              <img src={GmailIcon} alt="Gmail" className="link" />
            </a>
            <a href="https://www.linkedin.com/in/manglamonika123/">
              <img src={LinkedIn} alt="Youtube" className="link" />
            </a>
            <a href="https://github.com/manglamonika">
              <img src={GithubIcon} alt="GitHub" className="link"  id="linkk"/>
            </a>  
            <a href="https://www.instagram.com/manglamonika123/?hl=en">
              <img src={InstagramIcon} alt="Instagram" className="link" />
            </a>


          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
