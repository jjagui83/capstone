import React from 'react'
import { Description, HomepageStyle, Image } from '../StyledComponents/HomepageStyle'
import Logo from "../assets/logo/logo6.png"

export default function Homepage() {
    return (
        <HomepageStyle>
            <Image src={"https://images.unsplash.com/photo-1535448580089-c7f9490c78b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1021&q=80"} alt="logo3.png" />
            <Description className="Description">Welcome to Lavish Auto Exotic Car Rental, the premier exotic car rental service and private jet charter in Atlanta, GA and Houston, TX. With locations at both George Bush Intercontinental (IAH) Airport or Hartsfield–Jackson Atlanta International (ATL) Airport, and delivery options throughout Georgia and Texas, no local luxury car rental business covers as much ground as Lavish.
            </Description>
            <br />
            <Description className="Description">Browse our selection of elite luxury cars and SUVs from manufacturers like Ferrari, Lamborghini, Rolls Royce, Aston Martin, Bentley, Mercedes, Cadillac, Maserati, Range Rover, BMW and Porsche.</Description>
            <br />
            <Description className="Description">We also provide full-compliment wedding and chauffeur services, as well as in-demand cars for film and photo shoots. Through our private jet charter services, you can also fly Lavish to hundreds of airports worldwide in the same five-star comfort we offer on the road.</Description>
        </HomepageStyle>
    )
}
