import React, { Component } from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>
          <Slide right> Contact.</Slide>
        </h1>
        <Fade bottom>
          <div className="contact-content">
            <h1>
              You can reach me on<br></br>
              <span className="amazing-color">following channels</span>
            </h1>
            <a href={`mailto:${data.contactEmail}`} className="email">
              {data.contactEmail}
            </a>
            <ul>
              {data.social.map((link, index) => (
                <li key={index}>
                  <a target="_blank" rel="noopener noreferrer" href={link.url}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Fade>

        <span className="footer">
          Made With ❤ by{" "}
          <a
            href="http://github.com/tanmaylaud"
            target="_blank"
            rel="noreferrer noopener"
          >
            Tanmay Laud
          </a>
        </span>
      </div>
    );
  }
}

export default Contact;
