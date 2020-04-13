import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class School extends Component<any> {
  state = {};
  render() {
    return (
      <Fade bottom>
        <div className="project">
          <h1>
            <a href={this.props.url} target="_blank" rel="noreferrer noopener">
              {this.props.title}
            </a>
          </h1>
          <span>{this.props.degree}</span>
          <span>{this.props.grade}</span>
        </div>
      </Fade>
    );
  }
}

export default School;
