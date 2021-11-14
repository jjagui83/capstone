import styled from 'styled-components';

export const BannerImg = styled.img`
height: 600px;
width: 100%;
`;

export const BannerTextWrapper = styled.div`
height: 80vh;
background-image: url("https://images.unsplash.com/photo-1535448580089-c7f9490c78b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1021&q=80");
-webkit-background-size: cover;
background-position: fixed;
background-repeat: no-repeat;
`;

export const BannerTextBanner = styled.div`
width: 600px;
height: 350px;
background: inherit;
position: absolute;
overflow: hidden;
top: 50%;
left: 50%;
transform: translate(-50%, -50%)

// &:before {
//     // width: ;
//     // height: ;
//     // content: ;
//     // position: absolute;
//     // top: ;
//     // left:;
//     // bottom: 0;
//     // right: 0;
//     // background: inherit;
//     // box-shadow: inset 0 0 0 300px rgba(255, 255, 255, 0.2);
//     // filter: blur(10px);
// }
`;

export const BannerImageText = styled.div`

`;