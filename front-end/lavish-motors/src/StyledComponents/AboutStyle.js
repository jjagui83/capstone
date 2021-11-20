import styled from 'styled-components';

export const AboutContainer =styled.div`
text-align: center;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 650px;
`;

export const ContactTitle = styled.div`
text-align: center;
`;

export const AboutTitle = styled.h3`
color: gold;
text-shadow: 2px 2px 2px grey;
`;

export const AboutImage = styled.img`
height: 50px;
width: 90px;
border-radius: 50%;
`;

export const AboutGridContainer = styled.div`
display: grid;
grid-template-rows: repeat(1, 1fr);
grid-template-columns: repeat(3, 1fr);
margin: 15px;
grid-gap: 15px 15px;

@media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
}
`;