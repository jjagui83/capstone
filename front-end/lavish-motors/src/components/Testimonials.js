import React from "react";
import {
  TestGridContainer,
  TestInfoContainer,
  TestImage,
  TestContainer,
  TestMainContainer,
  TestHeading,
  TestName,
  TestQuote
} from "../StyledComponents/TestimonialsStyle";

export default function Testimonials() {
  return (
    <div>
      <TestContainer>
        <TestHeading>TESTIMONIALS</TestHeading>
      </TestContainer>
      <TestMainContainer>
        <TestGridContainer>
          <TestInfoContainer >
            <TestName>Jhene Aiko</TestName>
            <TestImage
              src="https://urbanislandz.com/wp-content/uploads/2019/04/Jhene-Aiko.jpg"
              alt=""
            />
            <TestQuote>"I love the energy here. So worth it."</TestQuote>
          </TestInfoContainer>

          <TestInfoContainer >
            <TestName>Travis Barker</TestName>
            <TestImage
              src="https://i1.sndcdn.com/avatars-000153396504-4rqwv5-t500x500.jpg"
              alt=""
            />
            <TestQuote>"Sick choices dudes."</TestQuote>
          </TestInfoContainer>

          <TestInfoContainer >
            <TestName>Paul Wall</TestName>
            <TestImage
              src="https://img.discogs.com/3Gehc1-bvXiCM4zmX0DcoX0RTRs=/600x764/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-192683-1601145898-8267.jpeg.jpg"
              alt=""
            />
            <TestQuote>"These folks legit, Fasho. Hold it dinnne"</TestQuote>
          </TestInfoContainer>

          <TestInfoContainer >
            <TestName>Kanye West</TestName>
            <TestImage
              src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef"
              alt=""
            />
            <TestQuote>"Lamborghini Countach. Dope."</TestQuote>
          </TestInfoContainer>

        </TestGridContainer>
      </TestMainContainer>
    </div>
  );
}
