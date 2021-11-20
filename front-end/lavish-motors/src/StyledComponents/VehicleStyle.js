import styled from "styled-components";

export const VehicleImage = styled.img`
height: 200px;
width: 300px;
`;

export const VehicleContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 10px;
background-color: white;
text-align: center;
`;

export const VehicleContainer2 = styled.div`
text-align: center;
`;

export const VehicleInput = styled.input`
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

export const VehicleH6 = styled.h6`
color: black;
margin-top: 5px;
text-decoration: none;
`;

export const VehicleH3 = styled.h3`
color: black;
text-shadow: 7px 7px 7px grey;
text-decoration: none;
`;

export const Vehicleheader = styled.h4`
color: gold;
text-shadow: 2px 2px 2px grey;
`;