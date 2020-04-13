import React from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Education from "./components/Education";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="App">
        <div className="App-header">
          <Header />
        </div>

        <div className="About">
          <About />
        </div>
        <div className="work">
          <Education />
        </div>
        <div className="work">
          <Work />
        </div>
        <div className="contact">
          <Contact />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
