import styled, { keyframes } from 'styled-components';

export const BannerImg = styled.img`
height: 600px;
width: 100%;
`;

export const BannerTextWrapper = styled.div`
height: 75vh;
display: flex;
text-align: center;
background-image: url("https://images.unsplash.com/photo-1570294645755-cbd74614549d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1499&q=80");
-webkit-background-size: cover;
background-position: fixed;
background-repeat: no-repeat;
`;

export const BannerOverlay = styled.div`
position: absolute;
height: 75vh;
width: 100%;
left: 0;
background: rgba(0, 0, 0, 0.5);
color: white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const FadeIn = keyframes`
from {
    opacity: 0;
    transform: rotateX(-10deg);
}

to {
    opacity: 1;
    transform: rotateX(0);
}
`;

export const BannerLogo = styled.img`
color: white;
font-size: 50px;
animation-name: ${FadeIn};
animation-duration: 10s;
font-family: roboto;
`;

export const BannerH1 = styled.h1`
color: white;
font-size: 75px;
animation-name: ${FadeIn};
text-shadow: 9px 9px 9px black;
animation-duration: 10s;
`;


export const BannerButton = styled.button`
animation-name: ${FadeIn};
margin: 4px;
animation-duration: 16s;
padding: 5px;
width: 190px;
height: 50px;
font-size: 18px;
border-radius: 60px;
background-color: gold;
color: black;

&:hover {
    background-color: white;
}

&:active {
    background-color: white;
    box-shadow: 0 3px black;
    transform: translateY(12px);
}
`;