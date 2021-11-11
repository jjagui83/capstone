import React from 'react';
import { firstName, lastName, email } from "../actions/userActions"
import {useDispatch} from "react-redux";
import { LogInContainer } from '../StyledComponents/HomepageStyle';



function Register() {
    const dispatch = useDispatch();
    return (
        <LogInContainer>
          <h1>Log In </h1>
          
          <form action="">
                <input onChange={(e) => dispatch({type:"SET_FIRST_NAME",payload:e.target.value})} type="text" placeholder="First Name"/>
                <input onChange={(e) => dispatch({type:"SET_LAST_NAME",payload:e.target.value})} type="text" placeholder="Last Name" />
                <input onChange={(e) => dispatch({type:"SET_EMAIL",payload:e.target.value})} type="text" placeholder="Email"/>
                <input onChange={(e) => dispatch({type:"SET_PASSWORD",payload:e.target.value})} type="text" placeholder="password"/> 
            </form> 
            <input type="submit" />
            {/* {props?.register ? (
            <button
              onClick={(e) => register(e)}
              type="submit"
              value=""
            >
              Register
            </button>
          ) : (
            <button onClick={(e) => login(e)} type="submit" value="">
              Log In
            </button>
          )} */}
        </LogInContainer>
    )
}

export default Register

      
    