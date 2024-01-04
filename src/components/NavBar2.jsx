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
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';

const pages = [
  { title: "Home", url: "/", id: "1" },
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

  console.log(isLoggedIn);

  // let navigate = useNavigate();

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
    <AppBar position="static" sx={{backgroundColor: "white", color: "red", borderRadius: "100px", margin: "10px", width: "95vw", padding: "10px"}}>
      {isLoggedIn ? (
        <>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
         <img src='https://i.ibb.co/bKKkQYd/STRANGER-S-THINGS-1-4-2024.png' alt="logo" width={100} />

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
                  <Typography textAlign="center" fontFamily><a href={page.url}>{page.title}</a></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
         
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "space-evenly", fontSize: "2em", maxWidth: "100%"} }}>
            
              <Button
                href='/allposts'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'red', display: 'block', fontFamily: "impact", fontSize: "1em" }}
              >
               What's for sale?
              </Button>
              <Button
                href="/createpost"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'red', display: 'block', fontFamily: "impact", fontSize: "1em" }}
              >
               Sell something!
              </Button>
              <Button
                href="/profile"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'red', display: 'block', fontFamily: "impact", fontSize: "1em" }}
              >
              View Profile
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <img alt="LogOut" src="https://www.wetanz.com/media/catalog/product/cache/0c729873665a1c695396984e8457e603/2/5/25-50-03850_strangerthings_demogorgon_trap_002.jpg" style={{width: "100%", margin: "5px", borderRadius: "100px"}}/>
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
                display: { xs: 'block', md: 'none' }, fontSize: "1em"}}
            >
      <Typography textAlign="center" fontFamily={"GoodBoy"} ><a href="/login">Log In</a></Typography>
      <Typography textAlign="center" fontFamily={"GoodBoy"} ><a href="/register">Register</a></Typography>
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
