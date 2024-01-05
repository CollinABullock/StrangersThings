
import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllItems from "./components/AllItems";
import Register from "./components/Register";
import SingleItem from "./components/SingleItem";
import Login from "./components/Login";
import Profile from "./components/Profile";
import CreatePost from "./components/Create";
import ResponsiveAppBar from "./components/NavBar2";
import SignUp from "./components/Register2";



function App() { 
  return (
    <div id="root">
      <ResponsiveAppBar />

      <Routes>
        <Route path="/profile" element={<Profile />} />

        <Route
          path="/"
          element={
            <Login
              loggedInUser={loggedInUser}
              items={items}
              setItems={setItems}
            />
          }
        />

        <Route
          path="/post/:id"
          element={<SingleItem />}
        />



        
          <Route
          path="/navbar2"
          element={<ResponsiveAppBar />}
        />

        <Route
          path="/login"
          element={
            <Login
            />
          }
        />

       

        <Route
          path="/register"
          element={
            <Register
            />
          }
        />
        <Route
          path="/createpost"
          element={<CreatePost 
          />}
        />

        <Route
          path="/allposts"
          element={<AllItems />}
        />

      </Routes>
    </div>
  );
}

export default App;