import React from "react";
import {
  AboutContainer,
  ContactTitle,
  AboutTitle,
  AboutImage,
  AboutGridContainer
} from "../StyledComponents/AboutStyle";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Description } from "../StyledComponents/HomepageStyle";

export default function About() {
  return (
    <div>
      <ContactTitle className="shadow p-3 mb-5 bg-light">
        <AboutTitle>ABOUT</AboutTitle>
      </ContactTitle>

      <AboutContainer>
          <AboutGridContainer>
            
                <div className="shadow p-3 mb-5 bg-light">
                  <AboutImage src="https://images.unsplash.com/photo-1580446623001-3abf670c5c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80" alt=""/>
                    <h6>
                    Welcome to Lavish Auto Exotic Car Rental, the premier exotic
                  car rental service and private jet charter (Coming Soon!) in
                  Atlanta, GA and Houston, TX.
                    </h6>
                </div>
             
                <div className="shadow p-3 mb-5 bg-light">
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Text>
                  From
                  manufacturers like Ferrari, Lamborghini, Rolls Royce, Aston
                  Martin, Bentley, Mercedes, Cadillac, Maserati, Range Rover,
                  BMW and Porsche.
                    </Card.Text>
                  </Card.Body>
                </div>

                <div className="shadow p-3 mb-5 bg-light">
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Text>
                    We also provide full-compliment wedding and chauffeur
                  services, as well as in-demand cars for film and photo shoots.
                    </Card.Text>
                  </Card.Body>
                </div>
          </AboutGridContainer>
      </AboutContainer>
    </div>
  );
}
