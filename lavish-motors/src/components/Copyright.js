import React, { Component } from "react";
import {CopyrightContainer, Links} from "../StyledComponents/CopyrightStyle"


export default class Copyright extends Component {
  render() {
    return (
      <CopyrightContainer>
        <h4>Other Links</h4>
        <ul>
          <li>
            <Links href="https://github.com/wonkyDialup">
              Github{" "}
            </Links>
          </li>
          <li>
            <Links href="https://www.linkedin.com/in/justin-gibbs-215319141/">
              LinkedIn
            </Links>
          </li>{" "}
        </ul>
        <div>
          <p>
          Copyright © 2021 Strange Wheels Auto Sales. All rights reserved.
          </p>
        </div>
      </CopyrightContainer>
    );
  }
}