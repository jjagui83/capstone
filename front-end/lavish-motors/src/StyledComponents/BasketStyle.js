import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: #fff;
  `

export const CartTitle = styled.div`
text-align: center;
`;
export const Button = styled.button`
//   background-color: #282C34;
  color: #fff;
  border: none;
  box-shadow: 3px 3px 3px gray;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 20px;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #282C34;
  }
  `

export const CartInput = styled.input`
background-color: gold;
border-radius: 60px;
width: 150px;
color: black;


&:hover {
    background-color: white;
}

&:active {
    background-color: white;
    transform: translateY(6px);
}
`;

  export const Cartheader = styled.h4`
color: gold;
text-shadow: 2px 2px 2px grey;

`;

  export const CartH1 = styled.h1`
  color: green;
  text-shadow: 7px 7px 7px grey;
  
  `;

  export const CartH3 = styled.h3`
  color: black;
  text-shadow: 7px 7px 7px grey;
 
  `;

  export const CartH6 = styled.h6`
  margin-top: 15px;
  color: black;
  
  `;