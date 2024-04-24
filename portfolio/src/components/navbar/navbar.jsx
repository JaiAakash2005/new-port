/* Adjusting React code */

import React, { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  // const navScroll = () => {
  //   ScrollReveal().reveal(".navbar", {
  //     duration: 2000,
  //     distance: "70px",
  //     easing: "ease-in-out",
  //     origin: "right",
  //     reset: true,
  //   });
  // };
  // useEffect(() => {
  //   navScroll();
  // }, []);
  const handleDownload = (e) => {
    e.preventDefault();
    window.open(Resume, "_blank");
  };

  const toggleNavbar = () => {
    const newIsSideNavOpen = !isSideNavOpen;
    setIsSideNavOpen(newIsSideNavOpen);

    const navbarToggle = document.querySelector(".navbar-toggle");
    if (navbarToggle) {
      navbarToggle.style.display = newIsSideNavOpen ? "flex" : "block";
    }
  };

  return (
    <>
      <nav className="navbar">
        <div
          className="navbar-logo h1"
          style={{ overflow: "hidden", fontWeight: "900" }}
        >
          Portfolio
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="" type="button" onClick={handleDownload}>
              Resume
            </a>
          </li>
        </ul>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`sidenav ${isSideNavOpen ? "open" : ""}`}>
        <h3>Portfolio</h3>
        <a href="#">Home</a>
        <a href="#">About</a>

        <a href="#">Contact</a>
        <a href="" onClick={handleDownload}>
          Resume
        </a>
      </div>
    </>
  );
};

export default Navbar;
