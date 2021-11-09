import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    // Route,
  } from "react-router-dom";
  import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap'
//   import Home from './Homepage';
// import Contact from './Contact';
import Logo from "../assets/logo/logo2.png"
import NavbarLinksData from "./NavbarLinksData"
import { NavbarContainer, SearchBox, Image } from '../StyledComponents/NavbarStyle';
import { sidebardata } from "./NavbarLinks.js";

class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <NavbarContainer>
                                <Navbar className="NavbarContainer" bg="#282C34" variant="dark" expand="lg" sticky="top">
                                    <Image src={Logo} alt="" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                            {sidebardata?.map((linkData) => (
                                                <NavbarLinksData linkData={linkData}
                                        />
                                            ))}
                                            <SearchBox className="form-inline my-2 my-lg-0">
                                            <Form className="form-inline my-2 my-lg-0" inline>
                                                    <FormControl type="text" placeholder="Search" className="m-4" />
                                                    <Button variant="outline-success" class-="btn">Search</Button>
                                            </Form>  
                                        </SearchBox>
                                        </Nav>
                                         
                                </Navbar.Collapse>
                            </Navbar>
                            </NavbarContainer>
                            <br />
                            <Switch>
                                {/* <Route exact path="/Homepage">
                                    <Home />
                                </Route>
                                <Route path="/Contact">
                                    <Contact />
                                </Route> */}
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar;