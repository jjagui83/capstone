import React from "react";
import {
  Description,
  HomeContainer,
  HomeH1,
  Image,
} from "../StyledComponents/HomepageStyle";
import Logo from "../assets/logo/logo6.png";
import Banner from "./Banner";
import Register from "./Register";

export default function Homepage() {
  return (
    <HomeContainer>
      <Banner />
      <Register />
      <HomeContainer>
        <HomeH1> Our Inventory</HomeH1>
      </HomeContainer>

      <HomeContainer class="container">
        <div class="row row-cols-3">
          <div class="col">
            <img
              src="https://www.dupontregistry.com/autos/remote.jpg.ashx?404=default&width=644&height=428&urlb64=aHR0cDovL3ZlaGljbGUtcGhvdG9zLXB1Ymxpc2hlZC52YXV0by5jb20vZGYvN2YvZTAvOWEtZDEzZi00M2ZiLWJhZTctNjFhMjk2NmFkMTdjL2ltYWdlLTEuanBn&hmac=ArUsHMh02ZY"
              alt=""
            />
          </div>
          <div class="col">
            <img
              src="https://www.dupontregistry.com/autos/remote.jpg.ashx?404=default&width=644&height=428&urlb64=aHR0cDovL3ZlaGljbGUtcGhvdG9zLXB1Ymxpc2hlZC52YXV0by5jb20vZGYvN2YvZTAvOWEtZDEzZi00M2ZiLWJhZTctNjFhMjk2NmFkMTdjL2ltYWdlLTEuanBn&hmac=ArUsHMh02ZY"
              alt=""
            />
          </div>
          <div class="col">
            <img
              src="https://www.dupontregistry.com/autos/remote.jpg.ashx?404=default&width=644&height=428&urlb64=aHR0cDovL3ZlaGljbGUtcGhvdG9zLXB1Ymxpc2hlZC52YXV0by5jb20vZGYvN2YvZTAvOWEtZDEzZi00M2ZiLWJhZTctNjFhMjk2NmFkMTdjL2ltYWdlLTEuanBn&hmac=ArUsHMh02ZY"
              alt=""
            />
          </div>
          <div class="col">
            <img
              src="https://www.dupontregistry.com/autos/remote.jpg.ashx?404=default&width=644&height=428&urlb64=aHR0cDovL3ZlaGljbGUtcGhvdG9zLXB1Ymxpc2hlZC52YXV0by5jb20vZGYvN2YvZTAvOWEtZDEzZi00M2ZiLWJhZTctNjFhMjk2NmFkMTdjL2ltYWdlLTEuanBn&hmac=ArUsHMh02ZY"
              alt=""
            />
          </div>
          <div class="col">
            <img
              src="https://www.dupontregistry.com/autos/remote.jpg.ashx?404=default&width=644&height=428&urlb64=aHR0cDovL3ZlaGljbGUtcGhvdG9zLXB1Ymxpc2hlZC52YXV0by5jb20vZGYvN2YvZTAvOWEtZDEzZi00M2ZiLWJhZTctNjFhMjk2NmFkMTdjL2ltYWdlLTEuanBn&hmac=ArUsHMh02ZY"
              alt=""
            />
          </div>
          <div class="col">
            <img
              src="https://www.dupontregistry.com/autos/remote.jpg.ashx?404=default&width=644&height=428&urlb64=aHR0cDovL3ZlaGljbGUtcGhvdG9zLXB1Ymxpc2hlZC52YXV0by5jb20vZGYvN2YvZTAvOWEtZDEzZi00M2ZiLWJhZTctNjFhMjk2NmFkMTdjL2ltYWdlLTEuanBn&hmac=ArUsHMh02ZY"
              alt=""
            />
          </div>
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
