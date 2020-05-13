import React from "react";
import Fade from "react-reveal/Fade";

function Project(props) {
  return (
    <Fade bottom>
      <div className="project">
        <a href={props.url} target="_blank" rel="noreferrer noopener">
          <img src={props.imageSrc} alt={props.title}></img>
        </a>
        <h1>{props.title}</h1>
        <span>{props.service}</span>
      </div>
    </Fade>
  );
}

export default Project;
