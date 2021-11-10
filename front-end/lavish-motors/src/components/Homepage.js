import React from 'react'
import { Description, HomeContainer, HomeH1, Image } from '../StyledComponents/HomepageStyle'
import Logo from "../assets/logo/logo6.png"
import Banner from './Banner'
import Register from './Register'

export default function Homepage() {
    return (
        <HomeContainer>
            <Banner/>

            <Register/>
            <HomeContainer>
                <HomeH1> Some of our Inventory</HomeH1>
            </HomeContainer>

            <HomeContainer>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            </HomeContainer>

        </HomeContainer>
    )
}
