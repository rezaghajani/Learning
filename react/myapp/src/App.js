import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
