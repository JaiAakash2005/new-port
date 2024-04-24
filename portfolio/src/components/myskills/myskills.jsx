import React, { useEffect } from "react";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.webp";
import python from "../../assets/python.jpeg";
import react from "../../assets/react-logo.jpeg";
import MyComponent from "./circular.jsx";
import "./myskills.css";

const MySkills = () => {
  const skillSection = () => {
    ScrollReveal().reveal(".section-class", {
      duration: 2000,
      distance: "30px",
      easing: "ease-in-out",
      origin: "left",
      reset: true,
    });
  };
  useEffect(() => {
    skillSection();
  }, []);
  return (
    <>
      <section className="section-class">
        <h1 style={{ overflow: "hidden" }}>My Skills</h1>

        <div className="row">
          <div className="col-lg-6 col-12 progressor">
            <h3 style={{ overflow: "hidden", textDecoration: "underline" }}>
              Technical Skills
            </h3>
            <div className="skill-img">
              <img src={html} alt="HTML" className="skill-img" />
            </div>
            <div
              className="progress"
              role="progressbar"
              aria-label="HTML"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-info text-dark"
                style={{ width: "90%" }}
              >
                90%
              </div>
            </div>
            <div className="skill-img">
              <img src={css} alt="CSS" className="skill-img" />
            </div>

            <div
              className="progress"
              role="progressbar"
              aria-label="CSS"
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-info text-dark"
                style={{ width: "85%" }}
              >
                85%
              </div>
            </div>
            <div className="skill-img">
              <img src={js} alt="Javascript" className="skill-img" />
            </div>

            <div
              className="progress"
              role="progressbar"
              aria-label="JavaScript"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-info text-dark"
                style={{ width: "80%" }}
              >
                80%
              </div>
            </div>
            <div className="skill-img">
              <img src={python} alt="Python" className="skill-img" />
            </div>

            <div
              className="progress"
              role="progressbar"
              aria-label="Python"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-info text-dark"
                style={{ width: "75%" }}
              >
                75%
              </div>
            </div>
            <div className="skill-img">
              <img src={react} alt="React" className="skill-img" />
            </div>

            <div
              className="progress"
              role="progressbar"
              aria-label="React"
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-info text-dark"
                style={{ width: "85%" }}
              >
                85%
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 circular">
            <h3
              style={{
                marginTop: "35px",
                overflow: "hidden",
                textDecoration: "underline",
              }}
            >
              Professional skills
            </h3>
            <MyComponent />
          </div>
        </div>
      </section>
    </>
  );
};

export default MySkills;
