import React from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Blog from "./components/Blog";
import News from "./components/News";

function App() {
  return (
    <React.Fragment>
      <Navbar />
        <div className="App">
          <div className="App-header">
            <Header />
          </div>
          <div className="container">
          <div className="news">
              <News />
            </div>
            <div className="About">
              <About />
            </div>
            <div className="work">
              <Work />
            </div>
            <div className="blog work">
              <Blog />
            </div>
            <div className="work edu">
              <Education />
            </div>
            <div className="contact">
              <Contact />
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;
