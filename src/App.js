import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
// import About from "./components/about";
// import Projects from "./components/projects";
// import Timeline from "./components/timeline";
// import Contact from "./components/contact";

class App extends Component {
  render() {
    return (
      <div id="page">
        <div id="wrap">
          <Header></Header>
          <div id="main">
            {/*
            <About></About>
            <Projects></Projects>
            <Timeline></Timeline>
            <Contact></Contact> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
