import * as React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';;
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}

      S'More Gear (T Bergin, J Browning, F Burton, C Bullock, A Nunez)

      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

export default function CreatePost2() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();





  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await createPost(title, description, price, willDeliver);
      navigate('/allposts');
    } catch (error) {
      console.log(error);
    }
  };


   async function createPost(title, description, price) {
     try {
        const token = localStorage.getItem("token");
         const response = await fetch("https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-AM/posts", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
              post: {
                 title: title,
                 description: description,
                 price: price,
                 willDeliver: deliver
              }
          })
      });  
         
         if (response.status === 200) {
             // The POST request was successful (status code 200 Created)
             const result = await response.json();
             return result;
         } else {
             // Handle errors or other status codes here
             throw new Error("Failed to create a post");
         }
     } catch (error) {
         console.error("Error creating a post:", error);
         throw error;
     }
 }

 
 const handleTitleChange = (e) => {
  setName(e.target.value);
};

const handleDescriptionChange = (e) => {
  setDescription(e.target.value);
};

const handlePriceChange = (e) => {
  setPrice(e.target.value);
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
          <Typography component="h1" variant="h5" sx={{fontFamily: "ST", fontSize: "3em"}}>
           Sell Your Strange Things!
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="What are you selling?"
              name="title"
              autoComplete="title"
              onChange={handleTitleChange}
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
              onChange={handleDescriptionChange}
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
        
           
          </Box>
        </Box>
      </Container>
      <Copyright sx={{ mt: 8, mb: 4, fontFamily: "ST" }} />
    </>
  );
}