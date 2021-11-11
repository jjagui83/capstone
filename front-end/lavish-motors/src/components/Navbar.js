import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/LM.jpg";
import { NavImage } from "../StyledComponents/NavbarStyle";

function BootstrapNavbar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Placeholder</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/Register"}>Register</Nav.Link>
              <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
              <Nav.Link as={Link} to={"/Contacts"}>Contacts</Nav.Link>
              <Nav.Link as={Link} to={"/Vehicles"}>Vehicles</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to={"/Cart"}>Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BootstrapNavbar;
