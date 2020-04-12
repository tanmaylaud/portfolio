import React, { Component } from "react";
import Project from "./project";
import Slide from "react-reveal/Slide";
import data from "../yourdata";

class Work extends Component {
  state = {};
  render() {
    return (
      <React.StrictMode>
        <div>
          <h1 className="heading">
            <Slide left>Work.</Slide>
          </h1>
          <div className="work-content">
            {data.projects.map((project) => (
              <Project
                key={project.id}
                title={project.title}
                service={project.service}
                imageSrc={project.imageSrc}
                url={project.url}
              ></Project>
            ))}
          </div>
        </div>
      </React.StrictMode>
    );
  }
}

export default Work;
