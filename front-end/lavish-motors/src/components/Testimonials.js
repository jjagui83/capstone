import React from "react";
import { TestimonialsContainer } from "../StyledComponents/TestimonialStyle";
import { Container, Row, Col } from "react-bootstrap";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <TestimonialsContainer>
      <Container>
        <Row>
          <Col><TestimonialCard/></Col>
        </Row>
      </Container>
    </TestimonialsContainer>
  );
}
