import React from "react";
import { TestimonialsContainer } from "../StyledComponents/TestimonialStyle";
import {
  CardContainer,
  CardHeader,
  CardImage,
  CardTitle,
  CardPosition,
} from "../StyledComponents/TestimonialStyle";
import { Container, Row, Col, Card, Carousel} from "react-bootstrap";
import logo from "../assets/Logo/logo1.png"

export default function Testimonials() {
  return (
    <TestimonialsContainer>
   
      {/* <Container>
        <Row>
          <Col>
            <CardContainer >
              <CardHeader>"Great experience and customer service"</CardHeader>
              <CardImage
                src="https://www.glam.com/wp-content/uploads/2021/07/Screenshot-2021-07-09-6.32.47-PM.png"
                alt=""
              />
              <CardTitle>Amber King</CardTitle>
              <CardPosition></CardPosition>
            </CardContainer>
          </Col>

          <Col>
            <CardContainer >
              <CardHeader>"Best luxury rental in the area!"</CardHeader>
              <CardImage
                src="https://d1bvpoagx8hqbg.cloudfront.net/259/e7f1793a4005be07cbd0f0e978cdb69a.jpg"
                alt=""
              />
              <CardTitle>Darius Camp</CardTitle>
              <CardPosition></CardPosition>
            </CardContainer>
          </Col>

          <Col>
            <CardContainer class="shadow p-1 mb-5 bg-dark rounded">
              <CardHeader>"The best place to drive all my dream cars"</CardHeader>
              <CardImage
                src="https://media.istockphoto.com/photos/the-joyful-face-of-a-middleaged-man-over-50-years-picture-id1189586669?k=20&m=1189586669&s=612x612&w=0&h=EiTurFzDZIiRFNgCrjmakAnZzCVKigOHfvZ8ygDKlq0="
                alt=""
              />
              <CardTitle>Mike Lebegue</CardTitle>
              <CardPosition></CardPosition>
            </CardContainer>
          </Col>

        </Row>
      </Container> */}
    </TestimonialsContainer>
  );
}
