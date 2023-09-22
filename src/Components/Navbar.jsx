// Create a nav bar with routes to home, posts, profile, log-in pages
import { Link } from "react-router-dom";

const Navbar = () => {
  // Link
  return (
    <nav id='navbar'>
      <Link to={"/"}>HOME</Link>
      <Link to={"/login"}>LOGIN</Link>
      <Link to={"/posts"}>POSTS</Link>

    </nav>
  );
};

export default Navbar
