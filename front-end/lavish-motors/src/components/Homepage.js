import React from "react";
import {
  Description,
  HomeContainer,
  HomeH1,
  HomeImage,
  LogInContainer,
  LogoContainer,
  LogoImage, 
  LogoMainContainer,
  TestContainer
} from "../StyledComponents/HomepageStyle";
import Logo from "../assets/logo/logo6.png";
import Banner from "./Banner";
import Register from "./Register";
import Testimonials from "./Testimonials";

export default function Homepage() {
  return (
    <HomeContainer>
      <Banner />

      

      <HomeContainer>
        <HomeH1>BRANDS WE WORK WITH</HomeH1>
      </HomeContainer>

    <LogoMainContainer>
      <LogoContainer class="shadow p-3 mb-5 bg-white rounded">
        <LogoImage src="https://www.carlogos.org/car-logos/lamborghini-logo-1100x1200.png" alt=""/>
        <LogoImage src="https://pngimg.com/uploads/porsche_logo/porsche_logo_PNG6.png" alt=""/>
        <LogoImage src="https://www.carlogos.org/logo/McLaren-logo-1997-1920x1080.png"alt=""/>
        <LogoImage src="https://www.carlogos.org/logo/Rolls-Royce-logo-2048x2048.png" alt=""/>
        <LogoImage src="https://download.logo.wine/logo/Bentley/Bentley-Logo.wine.png" alt=""/>
        <LogoImage src="https://seeklogo.net/wp-content/uploads/2017/01/ferrari-logo.png" alt=""/>
      </LogoContainer>
    </LogoMainContainer>

    <TestContainer>
    <HomeH1>TESTIMONIALS</HomeH1>
      <Testimonials/>
    </TestContainer>
      
    </HomeContainer>
  );
}