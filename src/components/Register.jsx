import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

// TODO remove, this demo shouldn't need to reset the theme.

const COHORT_NAME = "2306-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function SignUp() {

  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const result = await registerUser(username, password);
        localStorage.setItem('token', result.data.token);
        navigate('/allposts');
      } catch (error) {
        console.error(error);
        setMessage("Registration unsuccessful, please try again")

      }
    };
  
    const handleNameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
   
    async function registerUser() {
      try {
        const response = await fetch(`${BASE_URL}/users/register`, {
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
        if (result.data) {
          return result;
        } else {
          throw new Error(result.message || 'An error occurred during registration.');
        }
      } catch (error) {
        console.error(error);
        throw new Error('An error occurred during registration.');
      }
    };

  return (
    <>
      <Container component="main" maxWidth="100%" sx={{backgroundColor: "black", color: "red", height: "100%"}}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{fontFamily: "ST", fontSize: "4em"}}>
           Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Username"
              label="UserName"
              name="Username"
              autoComplete="Username"
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "red", color: "black", fontFamily: "ST", fontSize: "2em" }}
            >
              Submit
            </Button>
            <h1>{message}</h1>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2" sx={{fontFamily: "ST", color: "red"}}>
                  Already have an account?  Log in!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Copyright sx={{ mt: 8, mb: 4, fontFamily: "ST" }} />
    </>
  );
}