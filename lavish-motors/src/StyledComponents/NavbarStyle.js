import styled from "styled-components";
import { Link } from "react-router-dom"

export const NavbarContainer = styled.div`
background-color: #282C34;
width: 100vw;
font-family: 'Raleway', sans-serif;
display: flex;
justify-content: center;
align-items: center;
padding:10px 0px 20px 0px;
`;

export const Image = styled.img`
width: 10%;
height: 10%;
`

export const SearchBox = styled.div`
display:inline-block;
flex-direction:row;
width:500px;
`

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
