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
import Particles from "react-tsparticles";
import ParticlesTest from "./components/Particles";




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

  const particlesConfig = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ff0000", // red color
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: {
            value: "#ff0000", // red color
          },
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: {
          value: "#ff0000", // red color
        },
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };
  

  return (
    <div id="root">
      <Particles params={particlesConfig} />

      <ResponsiveAppBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/profile" element={<Profile />} />

        <Route path="/createpost" element={<CreatePost />} />

        <Route path="/createpost2" element={<CreatePost2 />} />
        

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
        {/* <Route
          path="/createpost"
          element={<CreatePost 
            setLoggedInUser={setLoggedInUser}
            setIsLoggedIn={setIsLoggedIn}
          />}
        /> */}

        <Route
          path="/allposts"
          element={<AllItems isLoggedIn={isLoggedIn} items={items} setItems={setItems} />}
        />

<Route
          path="/particles"
          element={<ParticlesTest isLoggedIn={isLoggedIn} items={items} setItems={setItems} />}
        />

      </Routes>
    </div>
  );
}

export default App;