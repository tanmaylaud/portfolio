import "./Resume.css";
import React, { useState } from "react";
export function Resume() {
  const [chkbox, setChkbox] = useState(0);
  const handleClick = () => {
    setTimeout(() => {
      setChkbox(chkbox + 1);
      window.open(
        "https://drive.google.com/file/d/1VKTVXdpOW-fnf7n0lMUqFbeZshyCPU9p/view",
        "_blank"
      );
    }, 4000);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div id="ms-container">
          <label htmlFor="ms-download">
            <div className="ms-content">
              <div className="ms-content-inside" key={chkbox}>
                <input onClick={handleClick} type="checkbox" id="ms-download" />
                <div className="ms-line-down-container">
                  <div className="ms-line-down"></div>
                </div>
                <div className="ms-line-point"></div>
              </div>
            </div>
            Resume
          </label>
        </div>
      </div>
    </div>
  );
}
