import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFilePdf,
  FaMedium,
} from "react-icons/fa";
import image from "../assets/logo_310x310.png";

function Navbar(props) {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav>
      <ul>
        <li>
          <Link
            className="link"
            activeClass="active"
            to="homw"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={scrollToTop}
          >
            <img className="logo" src={image} alt="Home"></img>
          </Link>
        </li>
        <li>
          <Link
            className="link"
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="link"
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            className="link"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <li>
          <a
            className="link"
            target="_blank"
            rel="noreferrer noopener"
            href="https://drive.google.com/file/d/1VKTVXdpOW-fnf7n0lMUqFbeZshyCPU9p/view"
          >
            <FaFilePdf /> Resume
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a
            className="link"
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/tanmaylaud"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            className="link"
            target="_blank"
            rel="noreferrer noopener"
            href="https://linkedin.com/in/tanmaylaud"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            className="link"
            target="_blank"
            rel="noreferrer noopener"
            href="https://instagram.com/tanmayl"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            className="link"
            target="_blank"
            rel="noreferrer noopener"
            href="https://twitter.com/l_tanmay"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            className="link"
            target="_blank"
            rel="noreferrer noopener"
            href="https://medium.com/@tanmaylaud"
          >
            <FaMedium />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
