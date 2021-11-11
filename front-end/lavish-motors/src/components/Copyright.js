import React, { Component } from "react";
import {CopyrightContainer, Links} from "../StyledComponents/CopyrightStyle"




export default function Copyright () {
  
    return (
      <CopyrightContainer>
        <h4>Other Links</h4>
        <ul>
          <li>
            <Links href="https://github.com/jjagui83/capstone">
              Github{" "}
            </Links>
          </li>
          </ul>
          
        <div>
          <p>
          Copyright © 2021 Lavish Motors Exotic Rentals. All rights reserved.
          </p>
        </div>
      </CopyrightContainer>

    );
  }
