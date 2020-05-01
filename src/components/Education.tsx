import React from "react";
import Slide from "react-reveal/Slide";
import data from "../yourdata";
import School from "./School";

function Education(props) {
  return (
    <React.StrictMode>
      <div>
        <h1 className="heading">
          <Slide right>Education.</Slide>
        </h1>
        <div className="edu-content">
          {data.education.map((school) => (
            <School
              key={school.id}
              title={school.title}
              degree={school.degree}
              grade={school.grade}
              url={school.url}
            />
          ))}
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Education;
