import { Link, useNavigate } from "react-router-dom";
import React from "react";

function NavBar(props) {
  let navigate = useNavigate();
  return (
    <nav>
      {props.isLoggedIn ? (
        <>
         <div id="navbar">
          <Link className="links" to="/">Posts</Link>
          <Link className="links" to="/profile">My Profile</Link>
          <Link className="links" to="/createpost">Create Post</Link>
          <Link className="links" to="/allposts">See what's for Sale!</Link>
          <button className="button" id="logout-button"
            onClick={() => {
              props.setIsLoggedIn(false);
              localStorage.removeItem("token"); //Removes token from local storage when logout is clicked.
              navigate("/")
          }}>Logout
          </button>
          </div>
        </>
      ) : (
        <>
          {/* // These links are showed when the user is logged out. */}
          <Link className="links" to="/">
           home
          </Link>
          <Link className="links" to="/login">
            Login
          </Link>
          <Link className="links" to="/register">
            Register
          </Link>
          {/* <Link className="links" to="/profile">
        profile
          </Link> */}
          
        </>
      )}
    </nav>
  );
}

export default NavBar;