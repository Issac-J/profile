import React from "react";
import { Link } from "react-scroll";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="container">
        {/* eslint-disable-next-line */}
        <a href="#" className="Resume">
          My Resume
        </a>
      </div>

      <a
        href="https://github.com/Issac-J"
        target="_blank"
        rel="noreferrer"
        className="icons"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <ul className="nav-links">
        <div className="name-box">
          <li className="Name">
            A <span className="period">.</span>
          </li>
        </div>
        <Link to="About" smooth={true} duration={500}>
          <li>About</li>
        </Link>
        <Link to="Projects" smooth={true} duration={500}>
          <li>Projects</li>
        </Link>
        <Link to="Contact" smooth={true} duration={500}>
          <li>Contact</li>
        </Link>
      </ul>

      <div className="Introduction">
        <h1>Hey, I'm Akshay</h1>
        <h2>
          <span></span>
        </h2>
        <p>
          I'm currently a Full Stack Developer seeking many ways to improve my
          skills through problem-solving and creating various projects! Scroll
          down to learn more about me.
        </p>
        <Link to="Contact" smooth={true} duration={900}>
          <button>Contact Me</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
