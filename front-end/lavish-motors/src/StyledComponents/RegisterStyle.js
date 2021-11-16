import styled from 'styled-components';

export const RegisterTitle = styled.div`
text-align: center;

`;

export const RegisterHeader = styled.h3`
color: gold;
text-shadow: 2px 2px 2px grey;
`;

export const RegisterContainer = styled.div`
display: flex;
justify-content: center;
`;

export const RegisterButton = styled.button`
margin: 2px;
margin-bottom: 15px;
font-size: 12px;
padding: 2px;
width: 100px;
height: 30px;
border-radius: 60px;
background-color: gold;
color: black;

&:hover {
  background-color: white;
}

&:active {
  background-color: white;
  box-shadow: 0 3px black;
  transform: translateY(5px);}
`;