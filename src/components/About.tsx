import React from "react";
import Fade from "react-reveal/Fade";
import data from "../myData";
import image from "../assets/Tanmay_Laud_smaller.jpg";
import { FaGithub } from "react-icons/fa";

function About(props) {
  return (
    <div className="about">
      <div className="about-content">
        <h1>
          <Fade bottom cascade>
            About.
          </Fade>
        </h1>
        <Fade bottom>
          <p>
            {data.abouttext}{" "}
            <a
              className="link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/tanmaylaud"
            >
              here
              <FaGithub />
            </a>
          </p>
        </Fade>
      </div>
      {data.ShowAboutImage ? <img src={image} alt="about image"></img> : null}
    </div>
  );
}

export default About;
