import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./NavBar.css"

function NavBar(props) {
  let navigate = useNavigate();
  return (
    <nav>
      {props.isLoggedIn ? (
        <>
          {/* // This link is only showed when user is logged in. */}
          {/* <Link className="links" to="/">Posts</Link>
          <Link className="links" to="/profile">My Profile</Link>
          <Link className="links" to="/create-post">Create Post</Link> */}
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
          {/* <Link className="links" to="/">
            Posts
          </Link> */}
          <Link className="links" to="/login">
            Login
          </Link>
          <Link className="links" to="/register">
            Register
          </Link>
        </>
      )}
    </nav>
  );
}

export default NavBar;