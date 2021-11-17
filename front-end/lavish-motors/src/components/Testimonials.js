import React from "react";
import { TestimonialsContainer } from "../StyledComponents/TestimonialStyle";
import { CardContainer, CardHeader, CardImage, CardTitle, CardPosition } from '../StyledComponents/TestimonialStyle';
import { Container, Row, Col } from "react-bootstrap";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <TestimonialsContainer>
      <Container>
        <Row>
          <Col>
          <CardContainer>
            <CardHeader>"blah blah blah"</CardHeader>
            <CardImage src="https://www.glam.com/wp-content/uploads/2021/07/Screenshot-2021-07-09-6.32.47-PM.png" alt=""/>
            <CardTitle>fhgfghfgfh</CardTitle>
            <CardPosition>CEO</CardPosition>
        </CardContainer>
          </Col>

          <Col>
          <CardContainer>
            <CardHeader>"blah blah blah"</CardHeader>
            <CardImage src="https://www.glam.com/wp-content/uploads/2021/07/Screenshot-2021-07-09-6.32.47-PM.png" alt=""/>
            <CardTitle>fhgfghfgfh</CardTitle>
            <CardPosition>CEO</CardPosition>
        </CardContainer>
          </Col>

            <Col>
            <CardContainer>
            <CardHeader>"blah blah blah"</CardHeader>
            <CardImage src="https://www.glam.com/wp-content/uploads/2021/07/Screenshot-2021-07-09-6.32.47-PM.png" alt=""/>
            <CardTitle>fhgfghfgfh</CardTitle>
            <CardPosition>CEO</CardPosition>
        </CardContainer>
            </Col>
        </Row>
      </Container>
    </TestimonialsContainer>
  );
}
