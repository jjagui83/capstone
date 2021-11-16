import React from 'react'
import Cart from './Cart'
import { VehicleImage } from '../StyledComponents/VehicleStyle'
import { CartH3, CartH6 } from "../StyledComponents/BasketStyle";

export default function Confirmation(props) {
    const cartItem = { props }
    
    return (
        <div>
            <b><VehicleImage  src={cartItem.image} alt=""></VehicleImage ></b>
            <CartH6>{cartItem.make} </CartH6>
            <CartH3>{cartItem.model}</CartH3>
            <h1 color="black">Thank you for confirming your rental.</h1>
            <p color="black">We will contact you shortly with pick up details.</p>
        </div>
    )
}
