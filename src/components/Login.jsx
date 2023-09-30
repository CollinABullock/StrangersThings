import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"

const COHORT_NAME = "2306-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    try {
      const result = await loginUser(); // Passing our async function in from below.
      console.log(result.data);
    
      localStorage.setItem("token", result.data.token); // Fetching only key-value pair for token for the login.
      props.setIsLoggedIn(true);
      props.setLoggedInUser(username);               // Telling program login is true.

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
 
  async function loginUser() {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      }); // Outside of fetch starting here.
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="login-container">
      <h1 id="loginheader">LOGIN</h1>
      <form id="loginform" onSubmit={handleSubmit}>
        <label className="labels">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => {
              console.log(e.target.value);
              setUsername(e.target.value);
            }}
          />
        </label>

        <label className="labels">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => {
              console.log(e.target.value);
              setPassword(e.target.value);
            }}
          />
        </label>
        <button id="loginbutton" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;