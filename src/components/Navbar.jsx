import { Link, useNavigate } from "react-router-dom";
import React from "react";
// import "./NavBar.css"

function NavBar(props) {

  let navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
    <nav>
      {isLoggedIn ? (
        <>
         <div id="navbar">
          <Link className="links" to="/">Home</Link>
          <Link className="links" to="/profile">My Profile</Link>
          <Link className="links" to="/createpost">Create Post</Link>
          <Link className="links" to="/allposts">All Posts</Link>
          <button id="logout-button"
            onClick={() => {
              setIsLoggedIn(false);
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