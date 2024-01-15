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
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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

export default function CreatePost2() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [deliver, setDeliver] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await createPost(title, description, price, deliver, location);
      navigate('/allposts');
    } catch (error) {
      console.log(error);
    }
  };


   async function createPost(title, description, price, deliver, location) {
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
                 willDeliver: deliver,
                 location: location
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
  setTitle(e.target.value);
};

const handleDescriptionChange = (e) => {
  setDescription(e.target.value);
};

const handlePriceChange = (e) => {
  setPrice(e.target.value);
};

const handleLocationChange = (e) => {
  setLocation(e.target.value);
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
  label="What are you selling?"
  name="title"
  autoComplete="title"
  onChange={handleTitleChange}
  autoFocus
  InputLabelProps={{
    style: { color: 'red', fontFamily: "ST", outline: "2px 2px 2px red" }
  }}
  InputProps={{
    style: { color: 'red', fontFamily: "ST" }
  }}
/>

<TextField
  margin="normal"
  required
  fullWidth
  id="location"
  label="Where are you located?"
  name="location"
  autoComplete="location"
  onChange={handleLocationChange}
  autoFocus
  InputLabelProps={{
    style: { color: 'red', fontFamily: "ST", outline: "2px 2px 2px red" }
  }}
  InputProps={{
    style: { color: 'red', fontFamily: "ST" }
  }}
/>

<TextField
  margin="normal"
  required
  fullWidth
  multiline
  rows={"6"}
  name="description"
  label="Description"
  type="description"
  id="description"
  onChange={handleDescriptionChange}
  autoComplete="current-password"
  InputLabelProps={{
    style: { color: 'red', fontFamily: "ST", outline: "2px 2px 2px red" }
  }}
  InputProps={{
    style: { color: 'red', fontFamily: "ST" }
  }}
/>



            <Grid item xs={24}>
                <TextField
                  required
                  fullWidth
                  onChange={handlePriceChange}
                  name="price"
                  label="How much do you want for it?"
                  type="number"
                  id="price"
                  autoComplete="price"
                  sx={{marginBottom: "30px"}}
                  InputLabelProps={{
                    style: { color: 'red', fontFamily: "ST", outline: "2px 2px 2px red" } }}
                    InputProps={{
                      style: { color: 'red', fontFamily: "ST" } // 
                    }}
                />
              </Grid>
              <FormControlLabel
  control={
    <Checkbox
      checked={deliver}
      onChange={(e) => {
        setDeliver(e.target.checked);
      }}
      color="primary"
      style={{ border: '1px solid red', marginLeft: "30px" }}
    />
  }
  label={
    <Typography style={{ fontFamily: 'ST, sans-serif' }}>
      Check box if you're willing to deliver this item
    </Typography>
  }
  labelPlacement="start"
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
      <Copyright sx={{ mt: 8, mb: 4, fontFamily: "ST", color: "red" }} />
    </>
  );
}