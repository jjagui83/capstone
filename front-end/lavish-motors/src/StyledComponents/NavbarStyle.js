import styled from "styled-components";
import { Link } from "react-router-dom"

export const NavbarContainer = styled.div`
background-color: black;
width: 100%;
font-family: roboto;
display: flex;
justify-content: center;
align-items: center;
padding: 25px 0px 15px 25px;
`;

export const NavContainer = styled.div`
font-family: roboto;
`;

export const NavImage = styled.img`
width: 100px;
height: 50px;
`;

export const NavSignOutButton = styled.button`
font-size: 12px;
padding: 2px;
width: 100px;
height: 30px;
border-radius: 60px;
background-color: gold;
color: black;
font-family: roboto;

&:hover {
  background-color: white;
}

&:active {
  background-color: white;
  box-shadow: 0 3px black;
  transform: translateY(5px);
}
`;


export const SidebarLink = styled(Link)`
font-size:20px;
font-weight:300;
text-align:center;
color: #ffff;
text-decoration: none;
height:40px;
line-height:40px;
margin-top:20px;
overflow:hidden;
width:5em;
margin-left:5%;
cursor:pointer;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;

&:hover,
&:after,
&:before {
  backface-visibility: hidden;
  text-decoration: none;
  border: 1px solid rgba(#fff, 0);
  display: block;
}
&:hover:after,
&:hover:before{
  backface-visibility: hidden;
  border-color: #fff;
}

&:hover:before {
  bottom: auto;
}
`;
