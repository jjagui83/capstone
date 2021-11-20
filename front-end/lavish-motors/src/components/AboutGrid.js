import React from 'react';
import {
    AboutImage,
    AboutGridContainer,
    AboutInfoContainer
} from "../StyledComponents/AboutStyle";

export default function AboutGrid() {
    return (
        <div>
             <AboutGridContainer>
            
            <AboutInfoContainer className="shadow p-3 mb-5 bg-light">
              <AboutImage src="https://freepngimg.com/thumb/money/5-money-bag-png-image.png" alt=""/>
              <h1>Best Rates</h1>
                <h6>
                At Lavish Auto Exotic Car Rental, We give the best prices and premier exotic
              car rental service and private jet charter (Coming Soon!) in
              Atlanta, GA and Houston, TX.
                </h6>
            </AboutInfoContainer>
         
            <AboutInfoContainer className="shadow p-3 mb-5 bg-light">
              <AboutImage src="http://pngwebicons.com/uploads/car/1024/car_icon3274.png" alt=""/>
              <h1>Variety of Brands</h1>
                <h6>
              from
              manufacturers like Ferrari, Lamborghini, Rolls Royce, Aston
              Martin, Bentley, Mercedes, Cadillac, Maserati, Range Rover,
              BMW and Porsche.
                </h6>
            </AboutInfoContainer>

            <AboutInfoContainer className="shadow p-3 mb-5 bg-light">
              <AboutImage src="" alt="" />
              <h1>Customer Service</h1>
                <h6>
                Customer Service is our top priority! We provide 
                Luxury Car Rentals, Exotic Car Rentals and Sport Car Rentals in Texas.
                </h6>
            </AboutInfoContainer>
      </AboutGridContainer>
        </div>
    )
}
