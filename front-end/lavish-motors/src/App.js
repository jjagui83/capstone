import React, { Component } from "react";

// import Vehicles from "./components/Vehicles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import Cart from "./components/Cart";
import Vehicles from "./components/Vehicles";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";
import BootstrapNavbar from './components/Navbar';
import About from "./components/About";

import "./App.css";
import Copyright from "./components/Copyright";
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
      
        
        
        <div className="main">
        <div className="App-header">
            <BootstrapNavbar />
 
        <img src="\assets\logo\logo6.png" alt="" />
        </div>
        <div className="container">
        <Route path="/Cart">
                <Cart />
                </Route>
                <Route path="/Contact"> 
                <Contact />
              </Route>
              <Route path="/Vehicles"> 
                <Vehicles />
                </Route>
                <Route path="/About"> 
                <About />
                <Route path="/">
                <Homepage />
                </Route>
          <div className="row">
            <div className="col-md-3">
              <Copyright />
            </div>
          </div>
        </div>
        </div>
       
        </Switch>
        </Router>
    );
  }
}

export default App;