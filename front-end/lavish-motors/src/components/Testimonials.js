import React from "react";
import { TestimonialsContainer } from "../StyledComponents/TestimonialStyle";
import {
  CardContainer,
  CardHeader,
  CardImage,
  CardTitle,
  CardPosition,
} from "../StyledComponents/TestimonialStyle";
import { Container, Row, Col } from "react-bootstrap";

export default function Testimonials() {
  return (
    <TestimonialsContainer>
      <Container>
        <Row>
          <Col>
            <CardContainer class="shadow p-1 mb-5 bg-dark rounded">
              <CardHeader>"blah blah blah"</CardHeader>
              <CardImage
                src="https://www.glam.com/wp-content/uploads/2021/07/Screenshot-2021-07-09-6.32.47-PM.png"
                alt=""
              />
              <CardTitle>fhgfghfgfh</CardTitle>
              <CardPosition>CEO</CardPosition>
            </CardContainer>
          </Col>

          <Col>
            <CardContainer class="shadow p-1 mb-5 bg-dark rounded">
              <CardHeader>"blah blah blah"</CardHeader>
              <CardImage
                src="https://d1bvpoagx8hqbg.cloudfront.net/259/e7f1793a4005be07cbd0f0e978cdb69a.jpg"
                alt=""
              />
              <CardTitle>fhgfghfgfh</CardTitle>
              <CardPosition>CEO</CardPosition>
            </CardContainer>
          </Col>

          <Col>
            <CardContainer class="shadow p-1 mb-5 bg-dark rounded">
              <CardHeader>"blah blah blah"</CardHeader>
              <CardImage
                src="https://www.glam.com/wp-content/uploads/2021/07/Screenshot-2021-07-09-6.32.47-PM.png"
                alt=""
              />
              <CardTitle>fhgfghfgfh</CardTitle>
              <CardPosition>CEO</CardPosition>
            </CardContainer>
          </Col>
        </Row>
      </Container>
    </TestimonialsContainer>
  );
}
