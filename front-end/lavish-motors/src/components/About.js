import React from "react";
import {
  AboutContainer,
  ContactTitle,
  AboutTitle,
  AboutImage,
  AboutGridContainer,
  AboutInfoContainer,
} from "../StyledComponents/AboutStyle";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Description } from "../StyledComponents/HomepageStyle";
import AboutGrid from "./AboutGrid";
import Testimonials from "./Testimonials";

export default function About() {
  return (
    <div>
      <ContactTitle className="shadow p-3 mb-5 bg-light">
        <AboutTitle>ABOUT</AboutTitle>
      </ContactTitle>

      <AboutContainer>
        <AboutGrid />
      </AboutContainer>
      
      <Testimonials/>
    </div>
  );
}
