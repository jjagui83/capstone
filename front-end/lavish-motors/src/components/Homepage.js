import React from "react";
import {
  Description,
  HomeContainer,
  HomeH1,
  HomeImage,
  LogInContainer,
  GridColContainer
} from "../StyledComponents/HomepageStyle";
import Logo from "../assets/logo/logo6.png";
import Banner from "./Banner";
import Register from "./Register";

export default function Homepage() {
  return (
    <HomeContainer>
      <Banner />

      

      <HomeContainer>
        <HomeH1> Our Inventory</HomeH1>
      </HomeContainer>

      <HomeContainer class="container">
        <div class="row row-cols-3">
          <GridColContainer class="col">
            <HomeImage
              src="https://www.dupontregistry.com/autos/remote.jpg.ashx?404=default&width=644&height=428&urlb64=aHR0cHM6Ly9pbnZlbnRvcnkuZGVhbGVyc29ja2V0LmNvbS9hcGkvcGhvdG8vRi1nMmphTHgvNjQweDAvMTYzMzM2OTA2MS91L2VjbC81SjYyL1MyZHYvaXIydS94MWxTL0dZUnkvOWcuanBn&hmac=S20fmuT5yqI"
              alt=""
            />
          </GridColContainer>
          <GridColContainer class="col">
            <HomeImage
              src="https://www.dupontregistry.com/autos/remote.jpg.ashx?404=default&width=644&height=428&urlb64=aHR0cHM6Ly9jZG4uZGVhbGVyYWNjZWxlcmF0ZS5jb20vZnVzaW9uLzEvOTE0LzM1NzUwLzc5MHgxMDI0LzIwMTgtbGFtYm9yZ2hpbmktYXZlbnRhZG9yLXMtcm9hZHN0ZXI&hmac=uYPrPL_UiBM"
              alt=""
            />
          </GridColContainer>
          <GridColContainer class="col">
            <HomeImage
              src="https://www.dupontregistry.com/autos/remote.jpg.ashx?404=default&width=644&height=428&urlb64=aHR0cDovL2NvbnRlbnQuaG9tZW5ldGlvbC5jb20vMzU4Lzk1NzIvMHgwLzgyZmM4OGY0NDg5NjQxYWJiMzA5NTMxYzMwNzBjYTY2LmpwZw&hmac=b5pu4nL_XVw"
              alt=""
            />
          </GridColContainer>
          <GridColContainer class="col">
            <HomeImage
              src="https://www.dupontregistry.com/autos/remote.jpg.ashx?404=default&width=644&height=428&urlb64=aHR0cHM6Ly9pbnZlbnRvcnkuZGVhbGVyc29ja2V0LmNvbS9hcGkvcGhvdG8vLTRicmEzV0UvNjQweDAvMTYyNzkyOTQ5Mi91L2VjbC9vZ1FjL1JXVXcvYU01Yi9UNHVKL1lIZVMvOEEuanBn&hmac=msaPcq2Tq08"
              alt=""
            />
          </GridColContainer>
          <GridColContainer class="col">
            <HomeImage
              src="https://www.dupontregistry.com/autos/remote.jpg.ashx?404=default&width=644&height=428&urlb64=aHR0cHM6Ly9jZG4ubW90b3JjYXIuY29tLzgxMS8yMDY2MTgzOC8yMDY2MTgzOF84XzEwMjQuanBn&hmac=e_9-MsLEszk"
              alt=""
            />
          </GridColContainer>
          <GridColContainer class="col">
            <HomeImage
              src="https://www.dupontregistry.com/autos/remote.jpg.ashx?404=default&width=644&height=428&urlb64=aHR0cDovL3ZlaGljbGUtcGhvdG9zLXB1Ymxpc2hlZC52YXV0by5jb20vZGYvN2YvZTAvOWEtZDEzZi00M2ZiLWJhZTctNjFhMjk2NmFkMTdjL2ltYWdlLTEuanBn&hmac=ArUsHMh02ZY"
              alt=""
            />
          </GridColContainer>
        </div>
      </HomeContainer>

      {/* <HomeContainer>
            <img src="https://www.dupontregistry.com/autos/remote.jpg.ashx?404=default&width=644&height=428&urlb64=aHR0cDovL3ZlaGljbGUtcGhvdG9zLXB1Ymxpc2hlZC52YXV0by5jb20vZGYvN2YvZTAvOWEtZDEzZi00M2ZiLWJhZTctNjFhMjk2NmFkMTdjL2ltYWdlLTEuanBn&hmac=ArUsHMh02ZY" alt="" />
            <img src="https://www.dupontregistry.com/autos/remote.jpg.ashx?404=default&width=644&height=428&urlb64=aHR0cDovL3ZlaGljbGUtcGhvdG9zLXB1Ymxpc2hlZC52YXV0by5jb20vZGYvN2YvZTAvOWEtZDEzZi00M2ZiLWJhZTctNjFhMjk2NmFkMTdjL2ltYWdlLTEuanBn&hmac=ArUsHMh02ZY" alt="" />
            <img src="https://www.dupontregistry.com/autos/remote.jpg.ashx?404=default&width=644&height=428&urlb64=aHR0cDovL3ZlaGljbGUtcGhvdG9zLXB1Ymxpc2hlZC52YXV0by5jb20vZGYvN2YvZTAvOWEtZDEzZi00M2ZiLWJhZTctNjFhMjk2NmFkMTdjL2ltYWdlLTEuanBn&hmac=ArUsHMh02ZY" alt="" />
            <img src="https://www.dupontregistry.com/autos/remote.jpg.ashx?404=default&width=644&height=428&urlb64=aHR0cDovL3ZlaGljbGUtcGhvdG9zLXB1Ymxpc2hlZC52YXV0by5jb20vZGYvN2YvZTAvOWEtZDEzZi00M2ZiLWJhZTctNjFhMjk2NmFkMTdjL2ltYWdlLTEuanBn&hmac=ArUsHMh02ZY" alt="" />
            <img src="https://www.dupontregistry.com/autos/remote.jpg.ashx?404=default&width=644&height=428&urlb64=aHR0cDovL3ZlaGljbGUtcGhvdG9zLXB1Ymxpc2hlZC52YXV0by5jb20vZGYvN2YvZTAvOWEtZDEzZi00M2ZiLWJhZTctNjFhMjk2NmFkMTdjL2ltYWdlLTEuanBn&hmac=ArUsHMh02ZY" alt="" />
            <img src="https://www.dupontregistry.com/autos/remote.jpg.ashx?404=default&width=644&height=428&urlb64=aHR0cDovL3ZlaGljbGUtcGhvdG9zLXB1Ymxpc2hlZC52YXV0by5jb20vZGYvN2YvZTAvOWEtZDEzZi00M2ZiLWJhZTctNjFhMjk2NmFkMTdjL2ltYWdlLTEuanBn&hmac=ArUsHMh02ZY" alt="" />
            </HomeContainer> */}
    </HomeContainer>
  );
}