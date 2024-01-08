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
import { createTheme, ThemeProvider } from '@mui/material/styles';


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

const defaultTheme = createTheme();

export default function CreatePost() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const userID = localStorage.getItem("userID");
  const [selectedCategory, setSelectedCategory] = useState();

  console.log(selectedCategory);

  const handleSelectCategory = (selected) => {
    setSelectedCategory(selected);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await createPost(name, description, price, selectedCategory);
      navigate('/products');
    } catch (error) {
      console.log(error);
    }
  };


   async function createPost(name, description, price) {
     try {
         const response = await fetch("http://localhost:3000/api/products/post", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json",
             },
             body: JSON.stringify({
                 name: name,
                 description: description,
                 price: price,
                 userID: userID
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

 
 const handleNameChange = (e) => {
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
    {/* <ThemeProvider theme={defaultTheme} > */}
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sell Your Outdoor Gear!
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={handleNameChange}
                  id="name"
                  label="What are you selling?"
                  name="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={24}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={"6"}
                  onChange={handleDescriptionChange}
                  name="password"
                  label="How would you describe it?"
                  type="description"
                  id="description"
                  autoComplete="description"
                />
              </Grid>
              <Grid item xs={24}>
                <TextField
                  required
                  fullWidth
                  onChange={handlePriceChange}
                  name="price"
                  label="How much do you want for it?"
                  type="price"
                  id="price"
                  autoComplete="price"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sell your gear!
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    {/* </ThemeProvider> */}
    </>
  );
}