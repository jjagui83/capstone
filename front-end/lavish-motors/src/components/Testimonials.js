import React from "react";
import {
  TestGridContainer,
  TestInfoContainer,
  TestImage,
  TestContainer,
  TestMainContainer,
  TestHeading
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
            <h5>Jhene Aiko</h5>
            <TestImage
              src="https://urbanislandz.com/wp-content/uploads/2019/04/Jhene-Aiko.jpg"
              alt=""
            />
            <h1>Blah blah blah</h1>
          </TestInfoContainer>

          <TestInfoContainer >
            <h5>Margeret Redfield</h5>
            <TestImage
              src="https://hooversun.com/downloads/19884/download/Alex%20Newman.png?cb=ee76b3d1e57bffbabfbe860ebfe78d1d&w=640"
              alt=""
            />
            <h1>"Excellent service. Drove my dream car in style"</h1>
          </TestInfoContainer>

          <TestInfoContainer >
            <h5>Paul Wall</h5>
            <TestImage
              src="https://img.discogs.com/3Gehc1-bvXiCM4zmX0DcoX0RTRs=/600x764/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-192683-1601145898-8267.jpeg.jpg"
              alt=""
            />
            <h1></h1>
          </TestInfoContainer>

          <TestInfoContainer >
            <h5>Kanye West</h5>
            <TestImage
              src="https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=48593c6e6f5b91d6eb7d14680d10d0ef"
              alt=""
            />
            <h1>"Lamborghini Kuntosh. Dope."</h1>
          </TestInfoContainer>

        </TestGridContainer>
      </TestMainContainer>
    </div>
  );
}
