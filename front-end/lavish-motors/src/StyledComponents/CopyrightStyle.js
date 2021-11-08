import styled from "styled-components";

export const CopyrightContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 10vh;
  background-color: #282C34;
  padding: 10px;
  font-size: 12px;
  font-weight: bold;
  color: #ffff;
  `

export const Links = styled.a`
  color: #ffff;
  text-decoration: none;
  &:hover {
    color: #ffff;
    text-decoration: underline;
  }
  font-size: 14px;
`