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
import Checkout from "./components/Checkout";
import Homepage from "./components/Homepage";
import BootstrapNavbar from "./components/Navbar";
import About from "./components/About";

import store from "./store";
// import "./App.css";
import Copyright from "./components/Copyright";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Anton', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Anton', sans-serif;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Switch>
        <Provider store={store}>
          <div className="">
            <BootstrapNavbar />

            <Route path="/Cart">
              <Cart />
            </Route>
            <Route path="/Checkout">
              <Checkout />
            </Route>
            <Route path="/Vehicles">
              <Vehicles />
            </Route>
            <Route path="/Register">
              <Register />
            </Route>
            <Route path="/About">
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
