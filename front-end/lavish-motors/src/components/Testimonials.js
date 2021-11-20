import React from 'react';
import { TestGridContainer, TestInfoContainer, TestImage } from "../StyledComponents/TestimonialsStyle";

export default function Testimonials() {
    return (
        <div>
            <TestGridContainer>
            
            <TestInfoContainer className="shadow p-3 mb-5 bg-light">
              <h5>Best Rates</h5>
              <TestImage src="https://images.unsplash.com/photo-1580446623001-3abf670c5c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80" alt=""/>
                <h1>
               
                </h1>
            </TestInfoContainer>
         
            <TestInfoContainer className="shadow p-3 mb-5 bg-light">
              <h5>Best Rates</h5>
              <TestImage src="https://images.unsplash.com/photo-1580446623001-3abf670c5c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80" alt=""/>
                <h1>
               
                </h1>
            </TestInfoContainer>

            <TestInfoContainer className="shadow p-3 mb-5 bg-light">
              <h5>Best Rates</h5>
              <TestImage src="https://images.unsplash.com/photo-1580446623001-3abf670c5c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80" alt=""/>
                <h1>
               
                </h1>
            </TestInfoContainer>

      </TestGridContainer>
        </div>
    )
}
