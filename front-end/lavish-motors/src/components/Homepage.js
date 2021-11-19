import React from "react";
import {  
  HomeContainer,
  HomeH1,  
  LogoContainer,
  LogoImage, 
  LogoMainContainer,
  TestContainer
} from "../StyledComponents/HomepageStyle";
import Banner from "./Banner";
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
        <LogoImage src="https://www.carlogos.org/logo/Jeep-logo-3D-2560x1440.png" alt=""/>
        <LogoImage src="https://www.carlogos.org/car-logos/bmw-logo-1997-1200x1200.png" alt=""/>
      </LogoContainer>
    </LogoMainContainer>

    <TestContainer>
    <HomeH1>DRIVE IN CLASS</HomeH1>
      <Testimonials/>
    </TestContainer>
      
    </HomeContainer>
  );
}