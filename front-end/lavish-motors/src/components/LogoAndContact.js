import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { LogoContactContainer, LogoImage, LogoH3 } from "../StyledComponents/LogoAndContactStyle";
import Logo from "../assets/Logo/Logo1.png";

export default function LogoAndContact() {
  return (
    <LogoContactContainer>
      <LogoImage src={Logo} alt="" />
      <LogoH3>Phone: 800.867.5309</LogoH3>
      <LogoH3>Email: contact@lavishmotors.com</LogoH3>
    </LogoContactContainer>
  );
}
