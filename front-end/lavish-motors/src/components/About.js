import React from "react";
import {
  AboutContainer,
  ContactTitle,
  AboutTitle,
  AboutImage,
  AboutGridContainer,
  AboutInfoContainer
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
            
                <AboutInfoContainer className="shadow p-3 mb-5 bg-light">
                  <AboutImage src="https://images.unsplash.com/photo-1580446623001-3abf670c5c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80" alt=""/>
                    <h6>
                    Welcome to Lavish Auto Exotic Car Rental, the premier exotic
                  car rental service and private jet charter (Coming Soon!) in
                  Atlanta, GA and Houston, TX.
                    </h6>
                </AboutInfoContainer>
             
                <AboutInfoContainer className="shadow p-3 mb-5 bg-light">
                  <AboutImage src="" alt=""/>
                    <h6>
                  From
                  manufacturers like Ferrari, Lamborghini, Rolls Royce, Aston
                  Martin, Bentley, Mercedes, Cadillac, Maserati, Range Rover,
                  BMW and Porsche.
                    </h6>
                </AboutInfoContainer>

                <AboutInfoContainer className="shadow p-3 mb-5 bg-light">
                  <AboutImage src="" alt="" />
                    <h6>
                    We also provide full-compliment wedding and chauffeur
                  services, as well as in-demand cars for film and photo shoots.
                    </h6>
                </AboutInfoContainer>
          </AboutGridContainer>
      </AboutContainer>
    </div>
  );
}
