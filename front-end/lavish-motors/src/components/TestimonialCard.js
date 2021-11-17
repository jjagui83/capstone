import React from 'react';
import { CardContainer, CardHeader, CardImage, CardTitle, CardPosition } from '../StyledComponents/TestimonialStyle';

export default function TestimonialCard() {
    return (
        <div>
        <CardContainer>
            <CardHeader>"blah blah blah"</CardHeader>
            <CardImage src="https://www.glam.com/wp-content/uploads/2021/07/Screenshot-2021-07-09-6.32.47-PM.png" alt=""/>
            <CardTitle>fhgfghfgfh</CardTitle>
            <CardPosition>CEO</CardPosition>
        </CardContainer>

        </div>
    )
}
