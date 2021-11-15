import styled from 'styled-components';

export const BannerImg = styled.img`
height: 600px;
width: 100%;
`;

export const BannerTextWrapper = styled.div`
height: 90vh;
background-image: url("https://images.unsplash.com/photo-1570294645755-cbd74614549d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1499&q=80");
-webkit-background-size: cover;
background-position: fixed;
background-repeat: no-repeat;
`;

export const BannerOverlay = styled.div`
position: absolute;
height: 90vh;
width: 100%;
left: 0;
background: rgba(0, 0, 0, 0.5);
color: white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const BannerImageText = styled.div`

`;