import React from 'react'
import { MainContainer, ContactTitle, Contactheader } from "../StyledComponents/ContactStyle"

export default function Contact() {
    return (
        <div>
             <ContactTitle className="shadow p-3 mb-5 bg-light"><Contactheader>Contact Us</Contactheader></ContactTitle>
        <MainContainer>
            <p>
            We put you behind the wheel of the best cars in the world. Visit our location at George Bush Intercontinental Airport or Hartsfield–Jackson Atlanta International Airport to choose from our unsurpassed selection of luxury car rentals.
            </p>
            <ul>
                <li>Phone: <b>800.867.5309</b></li>
                <li>Email: <b>contact@lavishmotors.com</b></li>
            </ul>
        </MainContainer>
        </div>
    )
}
