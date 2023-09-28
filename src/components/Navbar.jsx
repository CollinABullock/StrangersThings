import { Link, useNavigate } from "react-router-dom";
import React from "react";
// import "./NavBar.css"

function NavBar(props) {
  let navigate = useNavigate();
  return (
    <div id="navbar">
    <nav>
      {props.isLoggedIn ? (
        <>
         
          <Link className="links" to="/">Home</Link>
          <Link className="links" to="/profile">My Profile</Link>
          <Link className="links" to="/createpost">Create Post</Link>
          <Link className="links" to="/allposts">All Posts</Link>
          <button id="logout-button"
            onClick={() => {
              props.setIsLoggedIn(false);
              localStorage.removeItem("token"); //Removes token from local storage when logout is clicked.
              navigate("/")
          }}>Logout
          </button>
        </>
      ) : (
        <>
          {/* // These links are showed when the user is logged out. */}
          <Link className="links" to="/">
           Home
          </Link>
          <Link className="links" to="/login">
            Login
          </Link>
          <Link className="links" to="/register">
            Register
          </Link>
          <Link className="links" to="/allposts">All Posts</Link>
        </>
      )}
    </nav>
    </div>
  );
}

export default NavBar;