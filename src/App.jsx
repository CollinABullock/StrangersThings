import { useState, useEffect } from 'react'
import Login from "./components/Login";
import { Routes, Route, } from "react-router-dom";
import Register from "./components/Register"
import NavBar from "./components/NavBar";



import './App.css'

function App() {
 
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
        const result = await response.json();
        console.log(result);

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
      {/* <Route
        path="/create-post"
        element={<Create isLoggedIn={isLoggedIn} items={items} setItems={setItems} />}
      /> */}
    </Routes>
  </div>
);
}
  
  
export default App
