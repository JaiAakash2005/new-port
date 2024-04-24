import React, { useEffect } from "react";
import "./skill.css";
import app from "../../assets/app.jpeg";
import R from "../../assets/R.png";
import web from "../../assets/website-design.png";

const Skill = () => {
  const skillScroll = () => {
    ScrollReveal().reveal(".skill-section", {
      duration: 2000,
      distance: "300px",
      easing: "ease-in-out",
      origin: "right",
      reset: true,
    });
  };
  useEffect(() => {
    skillScroll();
  }, []);
  return (
    <>
      <section className="skill-section">
        <div
          className="h1 d-flex justify-content-center "
          style={{ overflow: "hidden" }}
        >
          My
          <span className="text d-flex justify-content-center">Services</span>
        </div>
        <div className="row service">
          <div className="col-lg-4  col-12 skill-me">
            <img src={R} alt="" className="Digital-marketing" />
            <p>
              As a passionate digital marketer, I specialize in crafting
              tailored solutions that propel businesses to new heights in the
              digital realm. From strategic SEO campaigns to engaging social
              media strategies, I am dedicated to helping my clients achieve
              their goals and stand out in the crowded online landscape
            </p>
          </div>
          <div className="col-lg-4 col-12 skill-me">
            <img src={web} alt="" className="web-design" />
            <p>
              As a seasoned web designer, I bring a blend of creativity and
              technical expertise to every project. Specializing in crafting
              visually stunning and user-friendly websites, I am dedicated to
              bringing your brand to life in the digital world. Whether it's a
              sleek portfolio site or a robust e-commerce platform, I'm
              committed to delivering bespoke solutions that exceed your
              expectations.
            </p>
          </div>
          <div className=" col-lg-4 col-12 skill-me">
            <img src={app} alt="" className="Digital-marketing" />
            <p>
              As an aspiring app developer, I am fueled by a passion for
              creating intuitive and impactful digital experiences. While I am
              currently honing my skills through ongoing learning, my commitment
              to excellence and dedication to staying at the forefront of
              emerging technologies remain unwavering. From conceptualization to
              deployment, I strive to craft mobile applications that not only
              meet but exceed user expectations
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
