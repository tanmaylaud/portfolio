import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

function Header(props) {
  const headers: any[] = [];
  for (let i = 0; i < data.headerTagline.length; i++) {
    headers.push(data.headerTagline[i]);
    headers.push(<br></br>);
  }
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
        <p className="header-title">
          {headers}
          <button>
            <a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer">
              Contact
            </a>
          </button>
        </p>
      </Fade>
    </div>
  );
}

export default Header;
