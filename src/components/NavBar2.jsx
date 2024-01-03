import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const pages = [
  { title: "Home", url: "/", id: "1" },
  { title: "Profile", url: "/profile", id: "2" },
  { title: "Sell Something", url: "/createpost", id: "3" },
  { title: "What's for sale?", url: "/allposts", id: "4" }
];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
   const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

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
    <AppBar position="static" sx={{backgroundColor: "#d62828", borderRadius: "100px", margin: "10px", width: "95vw", padding: "10px"}}>
      {isLoggedIn ? (
        <>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
         <img src='https://i.ibb.co/SvDwxPz/smoregearlogo.jpg' alt="log" width={100} />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', }, backgroundColor: "#780000",   color: "antiquewhite" }}>
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'impact',
              fontWeight: 700,
              fontSize: "3rem",
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Stranger's Things
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "space-evenly", fontSize: "2em" } }}>
            
              <Button
                href='/products'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: "impact", fontSize: "1em" }}
              >
               What's for sale?
              </Button>
              <Button
                href='/products/create-post'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: "impact", fontSize: "1em" }}
              >
               Sell something!
              </Button>
              <Button
                href='/products/shoppingcart'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: "impact", fontSize: "1em" }}
              >
               Shopping cart
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0}}>
                <Avatar alt="Remy Sharp" src="https://cdn.backpacker.com/wp-content/uploads/2023/05/womens-hiking-tops-sgg23_h.jpg" />
              </IconButton>
            </Tooltip>
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
                  <Typography textAlign="center">
                  <Link className="links" to="/users/profile">My Profile</Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                  <button id="logout-button" sx={{margin: "0 auto"}}
            onClick={() => {
              setIsLoggedIn(false);
              localStorage.removeItem("token"); //Removes token from local storage when logout is clicked.
              localStorage.removeItem("user");
              localStorage.removeItem("userName");
              localStorage.removeItem("userID");
              localStorage.removeItem("userEmail");
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
        <Container maxWidth="xl" >
        <Toolbar disableGutters>
       

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', }, backgroundColor: "#780000",   color: "antiquewhite" }}>
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "space-evenly", fontSize: "2em" } }}>
            
              <Button
                href='/login'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: "impact", fontSize: "1em" }}
              >
               Login
              </Button>
              <Button
                href='/register'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: "impact", fontSize: "1em" }}
              >
               Register
              </Button>
          </Box>

          
        </Toolbar>
      </Container>
      </>
      )}
    </AppBar>
  );
}
export default ResponsiveAppBar;
