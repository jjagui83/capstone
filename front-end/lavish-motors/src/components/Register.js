import React from 'react';
import {useState} from 'react';
import { firstName, lastName, email } from "../actions/userActions"
import {useDispatch} from "react-redux";
import { LogInContainer } from '../StyledComponents/HomepageStyle';
import {createClient} from '@supabase/supabase-js'
import {useHistory} from "react-router"

const supabase = createClient("https://olnhrurwmonhkejpackd.supabase.co/", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjczMjY3NiwiZXhwIjoxOTUyMzA4Njc2fQ.Tm2RgeX9qDiT8vVT89NMvEj7MDvRzFrGjwPyfV6LGvI")

function Register(props) {
    // const dispatch = useDispatch();
    const [formData,setFormData] = useState({firstName:"", lastName: "", email: "", password: ""});
    const history = useHistory();

    const login = async (e)  => {
      e.preventDefault();
      const {user,session, error} = await supabase.auth.signIn({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });
     if (session){
       history.push("/")
     }else {alert(error.message)};
    };

    const register = async (e) => {
      e.preventDefault();
      const {user,session, error} = await supabase.auth.signUp({
        email: formData.username,
        password: formData.password,
      });
      if (user) {
        history.push("/login");
      } else {
        alert(error.message);
      }
    };

    return (
        <LogInContainer>
          <h1>Log In </h1>
          
         
                <input   onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            type="text"
            placeholder="First Name"
            name="firstname"
            value={formData?.firstName}/>

            <input onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={formData?.lastName} />

            <input onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            type="text"
            placeholder="Email"
            name="email"
            value={formData?.email}/>

          <input onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            type="text"
            placeholder="Password"
            name="password"
            value={formData?.password}/> 
           
          {/* <input type="submit" /> */}
            {props?.register ? (
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
          )}
        </LogInContainer>
    )
}

export default Register

      
    