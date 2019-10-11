import React from 'react';
import Navbar from "./components/Utility/Navbar";
import Me from "./components/Me-card"
import Project from "./components/Projects"
import About from "./components/about"
import Skill from "./components/skills"
import Contact from "./components/contact"
import Footer from "./components/Utility/footer"

import { BrowserRouter as Router, Route } from "react-router-dom"

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="main-page">
        <Me />
        <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/skill" component={Skill} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
