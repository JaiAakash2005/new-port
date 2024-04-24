import "./about.css";
import React, { useEffect } from "react";

const About = () => {
  const aboutReveal = () => {
    ScrollReveal().reveal(".aboutme", {
      duration: 2000,
      distance: "100px",
      easing: "ease-in-out",
      origin: "left",
      reset: true,
    });
  };
  useEffect(() => {
    aboutReveal();
  }, []);
  return (
    <>
      <section className="section-about" id="about">
        <div className="aboutme container-fluid">
          <h1
            className="d-flex justify-content-center"
            style={{ overflow: "hidden" }}
          >
            About{" "}
            <span className="mme" style={{ overflow: "hidden" }}>
              {" "}
              Me
            </span>
          </h1>
          <h2 className="text-#59b2f4" style={{ overflow: "hidden" }}>
            To Become a Full Stack Developer!
          </h2>
          <p>
            Jai Aakash is a second-year B.TECH IT student at Jeppiaar
            Engineering College, driven by a passion for coding and continuous
            skill acquisition. My passion lies in creating captivating website
            designs and implementing from through frontend development.I take a
            pride in staying up-to-date with current design trends and
            leveraging my creativity to produce my visual appealing.Throughout
            my career, I have developed a deep understanding of user
            experience(UX) and user interface(UI) principles. By putting myself
            in the shoes of the end-users, I strive to create intuitive and
            seamless browsing experiences. I believe that a well-designed
            website should not only look visually appealing but also provide a
            smooth and enjoyable interaction for visitors. When starting a new
            project, I thoroughly research and analyze the target audience and
            the client's specific requirements. This enables me to tailor my
            designs to meet their expectations and Bevera unique online presence
            that aligns with their brand identity.. With a diverse skill set
            encompassing HTML, CSS, JavaScript, Python, React, Bootstrap,
            Tailwind, jQuery, SQL, as well as proficiency in Java and C
            programming, Aakash is well-equipped for the dynamic world of
            software development. Actively engaged in problem-solving on
            platforms like LeetCode and other competitive coding arenas, Aakash
            is committed to honing their programming prowess. With a keen
            interest in interning within the software engineering domain, Aakash
            is poised to make meaningful contributions to the field of
            technology.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
