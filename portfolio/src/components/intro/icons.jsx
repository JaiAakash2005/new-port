import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./icons.css";
import Resume from "./Resume.pdf";

const Icons = () => {
  const handleDownload = (e) => {
    e.preventDefault();
    window.open(Resume, "_blank");
  };
  return (
    <div className="icons">
      <Link
        to="https://www.linkedin.com/in/aakash-jai-b0143b264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        className="linked-in"
      >
        <FaLinkedin />
      </Link>

      <Link
        to="https://www.instagram.com/jai_sky_aakash?igsh=MXAxMGhodnNhZHJ4Yg=="
        target="_blank"
        rel="noopener noreferrer"
        type="button"
        className="insta"
      >
        <FaInstagram />
      </Link>
      <Link
        to="https://github.com/JaiAakash2005"
        target="_blank"
        rel="noopener noreferrer"
        className="github"
      >
        <FaGithub />
      </Link>
      <Link
        to="https://x.com/JaiAakash2005?t=0C15Q_g59JQcvGjGLM3yTg&s=08"
        target="_blank"
        rel="noopener noreferrer "
        className="twitter"
      >
        <FaTwitter />
      </Link>
      <button
        className="gradient-button"
        style={{ color: "black" }}
        onClick={handleDownload}
      >
        Resume
      </button>
    </div>
  );
};

export default Icons;
