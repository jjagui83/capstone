import React from 'react'
import { BannerImg, BannerOverlay, BannerTextWrapper, BannerImageText } from '../StyledComponents/BannerStyle'

export default function Banner() {
    return (
        <div>
           {/* <BannerImg src={"https://images.unsplash.com/photo-1535448580089-c7f9490c78b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1021&q=80"} alt=""/> */}
         <BannerTextWrapper>
             <BannerOverlay>
                <BannerImageText>
                    <h2>Welcome To Lavish</h2>
                </BannerImageText>
             </BannerOverlay>
         </BannerTextWrapper>
        </div>
    )
}
