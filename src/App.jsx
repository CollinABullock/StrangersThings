import { useState, useEffect } from 'react'
import Login from "./components/Login";
import { Routes, Route, } from "react-router-dom";
import Register from "./components/Register"
import NavBar from "./components/NavBar";
import Profile from './components/Profile';


import './App.css'
const COHORT_NAME = "2306-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
function App() {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");
 

  // This functions keeps the user logged so they can move from page to page without being logged out.
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(BASE_URL);
        const userData= await response.json();
        console.log(userData);

        setItems(userData.data.posts);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
    <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

    <Routes>
   ?
      <Route
        path="/"
        element={
          <Login
          
            setLoggedInUser={setLoggedInUser}
            setIsLoggedIn={setIsLoggedIn}
          />
        }
      />
      <Route
        path="/login"
        element={
          <Login
          
            setLoggedInUser={setLoggedInUser}
            setIsLoggedIn={setIsLoggedIn}
          />
        }
      />
      <Route
        path="/register"
        element={
          <Register
            setLoggedInUser={setLoggedInUser}
            setIsLoggedIn={setIsLoggedIn}
          />
        }
      />
      <Route
        path="/profile"
        element={<Profile/>}
      />
    </Routes>
  </div>
);
}
  
  
export default App
