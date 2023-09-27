import { Link, useNavigate } from "react-router-dom";
import React from "react";

function NavBar(props) {
  let navigate = useNavigate();
  return (
    <nav>
      {props.isLoggedIn ? (
        <>
         
          <Link className="links" to="/">Posts</Link>
          <Link className="links" to="/profile">My Profile</Link>
          <Link className="links" to="/createpost">Create Post</Link>
          <Link className="links" to="/allposts">See what's for Sale!</Link>
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
<<<<<<< HEAD
          {/* <Link className="links" to="/">
            Posts
          </Link> */}
          <div id="navbar" className="font-face-gm">
=======
          <Link className="links" to="/">
           home
          </Link>
>>>>>>> 2ec82f73d419d5a1f7e1dcc51fe5b19aa298f564
          <Link className="links" to="/login">
            Login
          </Link>
          <Link className="links" to="/register">
            Register
          </Link>
<<<<<<< HEAD
          <Link className="posts" to ="/AllPosts">
         What's for sale?
          </Link>
          <Link className="createpost" to ="/CreateNewPost">
           Sell Something!
          </Link>
          </div>
=======
          {/* <Link className="links" to="/profile">
        profile
          </Link> */}
>>>>>>> 2ec82f73d419d5a1f7e1dcc51fe5b19aa298f564
        </>
      )}
    </nav>
  );
}

export default NavBar;