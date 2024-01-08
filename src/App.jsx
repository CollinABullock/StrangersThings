
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
import CreatePost2 from "./components/Create2";

function App() {
  const [items, setItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");
 


  return (
    <div id="root">
      <ResponsiveAppBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/profile" element={<Profile />} />

        <Route path="/createpost2" element={<CreatePost2 loggedInUser={loggedInUser}
              items={items}
              setItems={setItems} />} />
        

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
          element={<SingleItem items={items} isLoggedIn={isLoggedIn} />}
        />

        
          <Route
          path="/navbar2"
          element={<ResponsiveAppBar items={items} isLoggedIn={isLoggedIn} />}
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
          path="/createpost"
          element={<CreatePost 
            setLoggedInUser={setLoggedInUser}
            setIsLoggedIn={setIsLoggedIn}
          />}
        />

        <Route
          path="/allposts"
          element={<AllItems isLoggedIn={isLoggedIn} items={items} setItems={setItems} />}
        />

      </Routes>
    </div>
  );
}

export default App;