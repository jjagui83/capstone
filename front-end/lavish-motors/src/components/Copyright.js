import React, { Component } from "react";
import {CopyrightContainer, Links} from "../StyledComponents/CopyrightStyle";
import { NavImage } from "../StyledComponents/NavbarStyle";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../assets/logo/Logo2.png";




export default function Copyright () {
  
    return (
      <CopyrightContainer>
        {/* <h4>Other Links</h4>
        <ul>
          <li>
            <Links href="https://github.com/jjagui83/capstone">
              Github{" "}
            </Links>
          </li>
          </ul>
          
        <div>
          <p>
          Copyright © 2021 Lavish Motors Exotic Rentals. All rights reserved.
          </p>
        </div> */}

<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/"><NavImage src={Logo}/></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home"><Links href="https://github.com/jjagui83/capstone">
              Github{" "}
            </Links></Nav.Link>
      <Nav.Link href="">Copyright © 2021 Lavish Motors Exotic Rentals. All rights reserved</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      </CopyrightContainer>

    );
  }
