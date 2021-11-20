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
              <AboutImage src="https://images.unsplash.com/photo-1580446623001-3abf670c5c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80" alt=""/>
                <h6>
                Welcome to Lavish Auto Exotic Car Rental, the premier exotic
              car rental service and private jet charter (Coming Soon!) in
              Atlanta, GA and Houston, TX.
                </h6>
            </AboutInfoContainer>
         
            <AboutInfoContainer className="shadow p-3 mb-5 bg-light">
              <AboutImage src="" alt=""/>
              <h1>Best Rates</h1>
                <h6>
              We give the best prices from
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
