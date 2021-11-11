import React, { Component } from "react";
import { Provider } from "react-redux";
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
import BootstrapNavbar from "./components/Navbar";
import About from "./components/About";

import store from "./store";
// import "./App.css";
import Copyright from "./components/Copyright";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register";

function App() {
  
    return (
      <Router>
        <Switch>
          <Provider store={store}>
            <div className="">
              <BootstrapNavbar />

              <Route  path="/Cart">
                <Cart/>
              </Route>
              <Route path="/Contact">
                <Contact />
              </Route>
              <Route  path="/Vehicles">
                <Vehicles />
              </Route>
              <Route  path="/Register">
                <Register />
              </Route>
              <Route  path="/About">
                <About />
              </Route>
                <Route exact path="/">
                <Homepage />
              </Route>
              <Copyright />
            </div>
          </Provider>
        </Switch>
      </Router>
    );
  }


export default App;
