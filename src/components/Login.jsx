import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Copyright(props) {
  return (
    <Typography variant="body2" color="red" align="center" {...props}>
      {'Copyright © '}
        Collin A. Bullock
     {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const COHORT_NAME = "2306-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

// TODO remove, this demo shouldn't need to reset the theme.



export default function SignIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(username, password);
    try {
      const result = await loginUser(); // Passing our async function in from below.
      console.log(result.data);
      localStorage.setItem("token", result.data.token)

      navigate('/allposts');
    } catch (error) {
      console.log(error);
    }
  };

  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
 
  async function loginUser() {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      }); // Outside of fetch starting here.
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container component="main" maxWidth="100%" sx={{backgroundColor: "black", color: "red", height: "100%", paddingBottom: "10%"}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{fontFamily: "ST", fontSize: "4em"}}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleNameChange}
              autoFocus
              InputLabelProps={{
                style: { color: 'red', fontFamily: "ST", outline: "2px 2px 2px red" } }}
                InputProps={{
                  style: { color: 'red', fontFamily: "ST" } // 
                }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handlePasswordChange}
              autoComplete="current-password"
              InputLabelProps={{
                style: { color: 'red', fontFamily: "ST", outline: "2px 2px 2px red" } }}
                InputProps={{
                  style: { color: 'red', fontFamily: "ST" } // 
                }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" style={{ border: '1px solid red', marginRight: "10px"}} />}
              label={<Typography style={{ fontFamily: 'ST, sans-serif' }}>Remember me</Typography>}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "red", color: "black", fontFamily: "ST", fontSize: "2em" }}
            >
              Submit
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/register" variant="body2" sx={{fontFamily: "ST", color: "red"}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2" sx={{fontFamily: "ST", color: "red"}}>
                  Don't have an account? Sign Up!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Copyright sx={{ mt: 8, mb: 4 }} />
      </>
  );
}