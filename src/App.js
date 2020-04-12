import React from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="App">
        <div className="App-header">
          <Header></Header>
        </div>

        <div className="About">
          <About></About>
        </div>
        <div className="work">
          <Work></Work>
        </div>
        <div className="contact">
          <Contact></Contact>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
