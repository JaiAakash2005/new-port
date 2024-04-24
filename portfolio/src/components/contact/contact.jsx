import React, { useEffect } from "react";
import "./contact.css";

const ContactForm = () => {
  const contactMe = () => {
    ScrollReveal().reveal(".contact-form", {
      duration: 1000,
      distance: "20px",
      easing: "ease-in-out",
      origin: "bottom",
      reset: true,
    });
  };
  const Details = () => {
    ScrollReveal().reveal(".details", {
      duration: 1000,
      distance: "70px",
      easing: "ease-in-out",
      origin: "right",
      reset: true,
    });
  };
  useEffect(() => {
    contactMe();
    Details();
  }, []);
  //useEffect(() => {}, []);
  return (
    <div className="contact-form">
      <h1 style={{ overflow: "hidden" }}>Contact Me</h1>
      <form action="https://formsubmit.co/jaiaakash57@gmail.com" method="post">
        <input
          type="text"
          placeholder="Full Name"
          className="col-md-6 inputs"
        />
        <input type="email" placeholder="Email" className="col-md-6 inputs" />
        <input
          type="number"
          placeholder="Mobile Number"
          className="col-md-6 inputs"
        />
        <input
          type="text"
          placeholder="Email Subject"
          className="col-md-6 inputs"
          style={{ color: "black" }}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your Message"
          className="col-11"
          style={{ color: "black" }}
        ></textarea>
        <div className="btn-container">
          <button type="submit" className="gradient-button">
            Send Message
          </button>
        </div>
      </form>
      <div
        className="details row"
        style={{ width: "100%", overflowX: "hidden" }}
      >
        <div className="col-md-6 col-12" style={{ overflow: "hidden" }}>
          <h4 style={{ overflow: "hidden" }}>Let's Work Together</h4>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ul
              className=""
              style={{
                marginBottom: "0",
                order: "2",
                marginTop: "10px",
                overflow: "hidden",
              }}
            >
              <li>&#10148; Contact Me: +916369871904</li>

              <li>&#10148; Email: jaiaakash57@gmail.com</li>
            </ul>
            <p
              style={{
                marginTop: "0",
                marginBottom: "0",
                order: "1",
                overflow: "hidden",
              }}
            >
              I've had the privilege of collaborating with diverse teams,
              including Company on their dynamic e-commerce platform. As a key
              member of Agency, I contributed to innovative web solutions for
              various clients. Additionally, I helped bring Project to life,
              crafting elegant designs for seamless user experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
