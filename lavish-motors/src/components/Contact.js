import React from 'react'
import { MainContainer } from "../StyledComponents/ContactStyle"

export default function Contact() {
    return (
        <MainContainer>
            <h1>Contact Us</h1>
            <p>
                Ready to get rid of a custom ride you built? Too many concept cars taking up space in your museum? (Looking at you, General Motors) Give us a call or shoot us an email and lets make a deal! We offer top prices on all types of wheels and are always happy to help.
            </p>
            <ul>
                <li>Phone: <b>800.867.5309</b></li>
                <li>Email: <b>sales@lavishmotors.com</b></li>
            </ul>
        </MainContainer>
    )
}
