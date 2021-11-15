import styled from "styled-components";

export const VehicleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: center;
  columns: 100px 3;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  background-color: black;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
  `