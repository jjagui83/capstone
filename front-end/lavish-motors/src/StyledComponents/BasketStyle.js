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

  export const CartH1 = styled.h1`
  color: green;
  `;

  export const CartH3 = styled.h3`
  color: black;
  `;

  export const CartH6 = styled.h6`
  margin-top: 15px;
  color: black;
  `;