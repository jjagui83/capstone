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
          <TestInfoContainer className="shadow p-3 mb-5 bg-dark rounded">
            <h5>Scott Jenkins</h5>
            <TestImage
              src="https://image1.masterfile.com/getImage/NzAwLTAwMzQyMDY0ZW4uMDAwMDAwMDA=AJ0QBX/700-00342064en_Masterfile.jpg"
              alt=""
            />
            <h1>Blah blah blah</h1>
          </TestInfoContainer>

          <TestInfoContainer className="shadow p-3 mb-5 bg-light">
            <h5>Margeret Redfield</h5>
            <TestImage
              src="https://hooversun.com/downloads/19884/download/Alex%20Newman.png?cb=ee76b3d1e57bffbabfbe860ebfe78d1d&w=640"
              alt=""
            />
            <h1>"Excellent service. Drove my dream car in style"</h1>
          </TestInfoContainer>

          <TestInfoContainer className="shadow p-3 mb-5 bg-light">
            <h5>Paul Wall</h5>
            <TestImage
              src="https://img.discogs.com/3Gehc1-bvXiCM4zmX0DcoX0RTRs=/600x764/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-192683-1601145898-8267.jpeg.jpg"
              alt=""
            />
            <h1></h1>
          </TestInfoContainer>
        </TestGridContainer>
      </TestMainContainer>
    </div>
  );
}
