import styled from 'styled-components';

export const TestImage = styled.img`
height: 70px;
width: 110px;
border-radius: 50%;
margin-bottom: 20px;
border: 2px solid black;

`;

export const TestInfoContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
height: 300px;
width: 280px;
`;

export const TestGridContainer = styled.div`
display: grid;
grid-template-rows: repeat(1, 1fr);
grid-template-columns: repeat(3, 1fr);
margin: 15px;
grid-gap: 13px 13px;
background-color: black;

@media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
}
`;