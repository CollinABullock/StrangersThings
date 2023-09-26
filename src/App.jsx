
import { useState, useEffect } from 'react'
import Login from "./components/Login";
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import Register from "./components/Register"
import NavBar from "./components/NavBar";
import { useNavigate } from "react-router-dom"
import AllPosts from './components/AllPosts';
import CreateNewPost from './components/newPostForm';
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
      path='/AllPosts'
      element={
        <AllPosts
        setLoggedInUser={setLoggedInUser}
        setIsLoggedIn={setIsLoggedIn}
        />
      }
      />

      <Route
      path="/CreateNewPost"
      element={
        <CreateNewPost
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

<img src="/home/collinabullock/Coursework/Block30/StrangersThings/PICS/STRANGERSTHINGS.jpg" alt="STRANGER'S THINGS" />
  
  
export default App
