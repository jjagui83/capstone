import styled from 'styled-components';

export const AboutContainer =styled.div`
text-align: center;
display: flex;
justify-content: center;
align-items: center;
`;

export const ContactTitle = styled.div`
text-align: center;
margin-bottom: 25px;
`;

export const AboutTitle = styled.h3`
color: gold;
text-shadow: 2px 2px 2px grey;
`;

export const AboutImage = styled.img`
height: 70px;
width: 110px;
margin-bottom: 10px;

`;

export const AboutInfoContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
height: 300px;
width: 280px;
`;

export const AboutHeading = styled.h2`
color: gold;
font-size: 35px;
text-shadow: 3px 3px 3px grey;
`;

export const AboutGridContainer = styled.div`
display: grid;
grid-template-rows: repeat(1, 1fr);
grid-template-columns: repeat(3, 1fr);
margin: 15px;
grid-gap: 13px 13px;

@media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
}
`;