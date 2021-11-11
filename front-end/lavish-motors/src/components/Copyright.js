import React, { Component } from "react";
import {CopyrightContainer, Links} from "../StyledComponents/CopyrightStyle";
import { Navbar, Nav, Container } from "react-bootstrap";




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
    <Nav className="me-auto">
      <Nav.Link href="#home"><Links href="https://github.com/jjagui83/capstone">
              Github{" "}
            </Links></Nav.Link>
      <Nav.Link href="">Copyright © 2021 Lavish Motors Exotic Rentals. All rights reserved.</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      </CopyrightContainer>

    );
  }
