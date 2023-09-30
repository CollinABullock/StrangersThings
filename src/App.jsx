import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllItems from "./components/AllItems";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import SingleItem from "./components/SingleItem";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Create from "./components/Create";

const COHORT_NAME = "2306-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}/posts`;

function App() {
  const [items, setItems] = useState([]);
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

        setItems(result.data.posts);
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
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/"
          element={
            <AllItems
              loggedInUser={loggedInUser}
              items={items}
              setItems={setItems}
            />
          }
        />
        <Route
          path="/post/:id"
          element={<SingleItem items={items} isLoggedIn={isLoggedIn} />}
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
          path="/create-post"
          element={<Create isLoggedIn={isLoggedIn} items={items} setItems={setItems} />}
        />
      </Routes>
    </div>
  );
}

export default App;