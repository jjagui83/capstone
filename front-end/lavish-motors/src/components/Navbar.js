import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { createClient } from "@supabase/supabase-js";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavImage, NavSignOutButton, NavContainer } from "../StyledComponents/NavbarStyle";
import logo from '../assets/Logo/logo2.png'



function BootstrapNavbar() {
  const supabase = createClient(
    "https://olnhrurwmonhkejpackd.supabase.co/",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjczMjY3NiwiZXhwIjoxOTUyMzA4Njc2fQ.Tm2RgeX9qDiT8vVT89NMvEj7MDvRzFrGjwPyfV6LGvI"
  );
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    const history = useHistory();

    const signout = async (e) => {
      e.preventDefault();
      const { user, session, error } = await supabase.auth.signOut({
    
      });
      if (error) {
        alert(error)
        ;
      } else {
        history.push("/About")
        ;
      }
    };



  return (
    <NavContainer>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"><NavImage src={logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/Register"}>Account</Nav.Link>
              <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
              <Nav.Link as={Link} to={"/Contact"}>Contact</Nav.Link>
              <Nav.Link as={Link} to={"/Vehicles"}>Vehicles</Nav.Link>
              <Nav.Link as={Link} to={"/Cart"}>Cart</Nav.Link>
            </Nav>
            <Nav>
            <NavSignOutButton onClick={(e) => signout(e)}type="submit">Sign Out</NavSignOutButton>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavContainer>
  );
}

export default BootstrapNavbar;
