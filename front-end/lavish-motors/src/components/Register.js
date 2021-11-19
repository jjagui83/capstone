import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { LogInContainer } from "../StyledComponents/HomepageStyle";
import {
  RegisterButton,
  RegisterTitle,
  RegisterContainer,
  RegisterHeader
} from "../StyledComponents/RegisterStyle";
import { createClient } from "@supabase/supabase-js";
import { useHistory } from "react-router";

const supabase = createClient(
  "https://olnhrurwmonhkejpackd.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjczMjY3NiwiZXhwIjoxOTUyMzA4Njc2fQ.Tm2RgeX9qDiT8vVT89NMvEj7MDvRzFrGjwPyfV6LGvI"
);

function Register(props) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const history = useHistory();

  const register = async (e) => {
    e.preventDefault();
    const { user, session, error } = await supabase.auth.signUp({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    });
    if (session) {
      history.push("/");
    } else {
      alert(error.message);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    const { user, session, error } = await supabase.auth.signIn({
      email: formData.email,
      password: formData.password,
    });
    if (user) {
      history.push("/");
    } else {
      alert(error.message);
    }
  };

  const signout = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert(error);
    } else {
      history.push("/About");
    }
  };

  return (
    <div>
      <RegisterTitle className="shadow p-3 mb-5 bg-light">
        <RegisterHeader>CREDENTIALS</RegisterHeader>
      </RegisterTitle>
      <RegisterContainer>
        <LogInContainer className="shadow p-3 mb-5 bg-white rounded">
          <h1>Log In </h1>

          <input
            className="shadow p-1 mb-2 bg-white rounded"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData?.firstName}
          />

          <input
            className="shadow p-1 mb-2 bg-white rounded"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData?.lastName}
          />

          <input
            className="shadow p-1 mb-2 bg-white rounded"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            type="email"
            placeholder="Email"
            name="email"
            value={formData?.email}
          />

          <input
            className="shadow p-1 mb-2 bg-white rounded"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            type="text"
            placeholder="Password"
            name="password"
            value={formData?.password}
          />

          <div>
            <RegisterButton onClick={(e) => register(e)} type="submit" value="">
              Register
            </RegisterButton>

            <RegisterButton onClick={(e) => login(e)} type="submit" value="">
              Log In
            </RegisterButton>
          </div>
        </LogInContainer>
      </RegisterContainer>
    </div>
  );
}

export default Register;
