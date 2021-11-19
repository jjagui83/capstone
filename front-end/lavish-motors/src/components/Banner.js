import React from 'react'
import {  BannerOverlay, BannerTextWrapper, BannerH1, BannerButton } from '../StyledComponents/BannerStyle'
import { useHistory } from "react-router";



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
                    <BannerH1>Lavish Motors</BannerH1>
                   
                                   
                         <BannerButton  onClick={(e) => vehicle(e)} type="submit" value="View Vehicles">View Vehicles</BannerButton>
                                      
                    
             </BannerOverlay>
         </BannerTextWrapper>
        </div>
    )
}
