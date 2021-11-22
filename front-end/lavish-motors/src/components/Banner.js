import React from 'react'
import {  BannerOverlay, BannerTextWrapper, BannerLogo, BannerButton, BannerH1 } from '../StyledComponents/BannerStyle'
import { useHistory } from "react-router";
import Logo from "../assets/Logo/Logo1.png"



export default function Banner() {
    const history = useHistory();
    const vehicle = async (e) => {
        e.preventDefault();    
          history.push("/Vehicles");
        }
    return (
        <div>
          
         <BannerTextWrapper>
             <BannerOverlay>      
                    <BannerH1>LAVISH MOTORS</BannerH1>
                            
                         <BannerButton  onClick={(e) => vehicle(e)} type="submit" value="View Vehicles">View Vehicles</BannerButton>
                                        
             </BannerOverlay>
         </BannerTextWrapper>
        </div>
    )
}
