import React from 'react'

import { BrowserRouter as Router, } from "react-router-dom";
  import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap'

import Logo from "../assets/logo/logo2.png"
import NavbarLinksData from "./NavbarLinksData"
import { NavbarContainer, NavImage } from '../StyledComponents/NavbarStyle';
import { sidebardata } from "./NavbarLinks.js";

class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                        <Router>
                            <NavbarContainer>
                                <Navbar className="NavbarContainer" bg="#282C34" variant="dark" expand="lg" sticky="top">
                                    <NavImage src={Logo} alt="" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                            {sidebardata?.map((linkData) => (
                                                <NavbarLinksData linkData={linkData}
                                        />
                                            ))}
                                            {/* <SearchBox className="form-inline my-2 my-lg-0">
                                            <Form className="form-inline my-2 my-lg-0" inline>
                                                    <FormControl type="text" placeholder="Search" className="m-4" />
                                                    <Button variant="outline-success" class-="btn">Search</Button>
                                            </Form>  
                                        </SearchBox> */}
                                        </Nav>
                                         
                                </Navbar.Collapse>
                            </Navbar>
                            </NavbarContainer>
                            <br />
                        </Router>
                    </div>
                </div>
        )  
    }
}

export default BootstrapNavbar;