import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { motion } from "framer-motion"
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const pages = [
  { title: "Home", url: "/", id: "1" },
  { title: "Sell Something", url: "/createpost", id: "3" },
  { title: "What's for sale?", url: "/allposts", id: "4" },
];

const unLoggedPages = [
  { title: "Login", url: "/", id: "1" },
  { title: "Register", url: "/register", id: "2" },
];



function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
   const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }else {
      setIsLoggedIn(false);
    }
    // sets local storage
  }, [localStorage.getItem("token")]);

  console.log(isLoggedIn);

  let navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  return (
    <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 2, delay: 0.2 }}
  >
    <AppBar position="static" sx={{backgroundColor: "black", borderRadius: "100px", margin: "0 auto", marginTop: "10px", width: "90%", padding: "10px"}}>
      {isLoggedIn ? (
        <>
       <Container maxWidth="50%" sx={{alignContent: "center", borderRadius: "100px"}} >
        <Toolbar disableGutters sx={{alignItems: "center"}}>
         <img src='https://i.ibb.co/bKKkQYd/STRANGER-S-THINGS-1-4-2024.png' alt="logo"    style={{
              maxWidth: "40%",
              height: "auto", // Maintain aspect ratio
              borderRadius: "30px",
              margin: "0 auto",
              display: "block", // Ensures the image is centered properly
            }}/>

<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', maxWidth: "50%", borderRadius: "20px" }, backgroundColor: "red",   color: "antiquewhite" , justifyContent: "center"}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu

              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }, fontSize: "1em"}}
            >
             {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" fontFamily={"ST"}><a href={page.url}>{page.title}</a></Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={() => {
              setIsLoggedIn(false);
              localStorage.clear();
              sessionStorage.clear();
              navigate("/")
              }}>
                  <Typography textAlign="center" fontFamily={"ST"}><a href="/">Log Out</a></Typography>
                </MenuItem>
            </Menu>
          </Box>
         
         
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "space-evenly", fontSize: "2em", maxWidth: "100%"} }}>
            
              <Button
                href='/allposts'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'red', display: 'block', fontFamily: "ST", fontSize: ".75em" }}
              >
               What's for sale?
              </Button>
              <Button
                href="/createpost"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'red', display: 'block', fontFamily: "ST", fontSize: ".75em" }}
              >
               Sell something!
              </Button>
              <Button
                href="/profile"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'red', display: 'block', fontFamily: "ST", fontSize: ".75em" }}
              >
              View Profile
              </Button>
              <Button
                onClick={() => {
              setIsLoggedIn(false);
              localStorage.clear();
              sessionStorage.clear();
              navigate("/")
          }}
                sx={{ my: 2, color: 'red', display: 'block', fontFamily: "ST", fontSize: ".5em" }}
              >
              Log Out
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
                <MenuItem onClick={handleCloseUserMenu}>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                  <button id="logout-button" sx={{margin: "0 auto"}}
            onClick={() => {
              setIsLoggedIn(false);
              localStorage.removeItem("token"); //Removes token from local storage when logout is clicked.
              navigate("/")
          }}>Logout
          </button>
                  </Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      </>
       ) : (
        <>
       <Container maxWidth="50%" sx={{alignContent: "center", borderRadius: "100px"}} >
        <Toolbar disableGutters sx={{alignItems: "center"}}>
         <img src='https://i.ibb.co/bKKkQYd/STRANGER-S-THINGS-1-4-2024.png' alt="logo"    style={{
              maxWidth: "40%",
              height: "auto", // Maintain aspect ratio
              borderRadius: "30px",
              margin: "0 auto",
              display: "block", // Ensures the image is centered properly
            }}/>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', maxWidth: "50%" }, backgroundColor: "red",   color: "antiquewhite" , justifyContent: "center"}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }, fontSize: "1em"}}
            >
          {unLoggedPages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" fontFamily={"ST"}><a href={page.url}>{page.title}</a></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "space-evenly", fontSize: "2em" } }}>
            
              <Button
                href='/login'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'red', display: 'block', fontFamily: "ST", fontSize: ".75em" }}
              >
               Login
              </Button>
              <Button
                href='/register'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'red', display: 'block', fontFamily: "ST", fontSize: ".75em" }}
              >
               Register
              </Button>
          </Box>

          
        </Toolbar>
      </Container>
      </>
      )}
    </AppBar>
    </motion.div>
  );
}
export default ResponsiveAppBar;
