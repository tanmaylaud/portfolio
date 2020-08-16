import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import data from "../myData";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";
import "./DownloadButton.css";

function Header(props) {
  const headers: any[] = [];
  for (let i = 0; i < data.headerTagline.length; i++) {
    headers.push(data.headerTagline[i]);
  }
  const [isContactVisible, setContactVisible] = useState(false);
  const [counter, setCounter] = useState(0);
  const onComplete = () => {
    setCounter(counter + 1);
    if (counter == headers.length - 1) setContactVisible(true);
  };

  return (
    <div>
      <h1 className="heading-background">Innovate</h1>
      <header>
        <h1>
          <Fade bottom cascade>
            {data.name}
          </Fade>
        </h1>
      </header>

      <Fade bottom>
        <div className="title-container">
          <p className="header-title">
            <Typewriter
              string={headers[0]}
              stopBlinkinOnComplete
              onComplete={onComplete}
              delay={60}
            />
            <br></br>
            {counter > 0 ? (
              <Typewriter
                string={headers[1]}
                stopBlinkinOnComplete
                onComplete={onComplete}
                delay={60}
              />
            ) : null}
            <br></br>
            {counter > 1 ? (
              <Typewriter
                string={headers[2]}
                onComplete={onComplete}
                stopBlinkinOnComplete
                delay={60}
              />
            ) : null}
            <br></br>
            {counter > 2 ? (
              <Typewriter
                string={headers[3]}
                onComplete={onComplete}
                delay={60}
              />
            ) : null}
            <br></br>
            {isContactVisible ? (
              <a
                className="resumeButton buttonDownload"
                href="https://drive.google.com/file/d/1XUk0DLi04vVwa8XMHO3caNklzd0yLEPd/view"
                rel="noopener noreferrer"
                target="_blank"
              >
                Resume
              </a>
            ) : null}
          </p>
        </div>
        {/* <div className="resume-container">
          <Resume />
        </div>
            */}
      </Fade>
    </div>
  );
}

export default Header;
