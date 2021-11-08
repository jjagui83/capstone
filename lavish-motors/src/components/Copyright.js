import React, { Component } from "react";
import {CopyrightContainer, Links} from "../StyledComponents/CopyrightStyle"


export default class Copyright extends Component {
  render() {
    return (
      <CopyrightContainer>
        <h4>Other Links</h4>
        <ul>
          <li>
            <Links href="https://github.com/jjagui83/capstone">
              Github{"Github"}
            </Links>
          </li>
          <li>
            <Links href="">
              LinkedIn
            </Links>
          </li>{" "}
        </ul>
        <div>
          <p>
          Copyright © 2021 Lavish Motors Luxury Rentals. All rights reserved.
          </p>
        </div>
      </CopyrightContainer>
    );
  }
}