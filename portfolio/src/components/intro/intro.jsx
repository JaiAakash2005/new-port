import React, { useEffect, useRef } from "react";
import "./intro.css";
import ak from "../../assets/aakash.jpg";
import Icons from "./icons.jsx";

const Intro = () => {
  const imgReveal = () => {
    ScrollReveal().reveal(".image", {
      duration: 1000,
      distance: "50px",
      easing: "ease-in-out",
      origin: "right",
      reset: true,
    });
  };
  const contentReveal = () => {
    ScrollReveal().reveal(".about", {
      duration: 2000,
      distance: "70px",
      easing: "ease-in-out",
      origin: "top",
      reset: true,
    });
  };
  useEffect(() => {
    imgReveal();
    contentReveal();
  }, []);

  // useEffect(() => {}, []);
  const typedTextRef = useRef(null);

  useEffect(() => {
    if (typedTextRef.current) {
      const typed = new Typed(typedTextRef.current, {
        strings: ["Frontend-Developer", "Web Designer"],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section className="about container-fluid">
      <div className="row container">
        <div className="col-md-6 me ">
          <span className="h2">
            Hi, Myself
            <br /> Jai Aakash <br /> and I'm a
            <span className="dev" ref={typedTextRef}>
              {" "}
            </span>
          </span>
          <p>
            I am a skilled passionate web-designer with experience in creating
            visually appealing and user-friendly websites
            <Icons />
          </p>
        </div>

        <div className="col-md-6 image">
          <img src={ak} className="aakash" alt="Jai Aakash" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
