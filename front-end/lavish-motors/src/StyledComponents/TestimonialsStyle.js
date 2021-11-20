import styled from 'styled-components';

export const TestImage = styled.img`
height: 70px;
width: 110px;
border-radius: 50%;
margin-bottom: 20px;
border: 2px solid white;

`;

export const TestHeading = styled.h1`
margin-top: 15px;
color: gold;
font-size: 50px;
text-shadow: 3px 3px 3px grey;
`;

export const TestContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
background-color: black;
`;

export const TestInfoContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
height: 300px;
width: 280px;
padding: 25px;
background-color: #212529;
`;

export const TestMainContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
width: 100%;
background-color: black;
`;

export const TestGridContainer = styled.div`
display: grid;
grid-template-rows: repeat(1, 1fr);
grid-template-columns: repeat(4, 1fr);
margin: 15px;
grid-gap: 13px 13px;

@media (max-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
}
`;