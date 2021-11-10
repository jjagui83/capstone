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

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Provider store={store}>
            <div className="">
              <BootstrapNavbar />
<<<<<<< HEAD
              <Route exact path="/">
                <Register />
              </Route>
              <Route path="/Cart">
                <Cart />
=======

              <Route exact path="/Cart">
                <Cart/>
>>>>>>> 5fd1d562ac9ec1d22e0ec0a7aa9bd5c2d1d3afb0
              </Route>
              <Route exact path="/Contact">
                <Contact />
              </Route>
              <Route exact path="/Vehicles">
                <Vehicles />
              </Route>
              <Route exact path="/About">
                <About />
              </Route>
<<<<<<< HEAD
                <Route exact path="/">
=======
                <Route exact path="/Homepage">
>>>>>>> 5fd1d562ac9ec1d22e0ec0a7aa9bd5c2d1d3afb0
                <Homepage />
              </Route>
              <Copyright />
            </div>
          </Provider>
        </Switch>
      </Router>
    );
  }
}

export default App;
