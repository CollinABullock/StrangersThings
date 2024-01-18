import React from "react";
import { useState, useEffect } from "react";
// import "./Messages.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const COHORT_NAME = "2306-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

function Message(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newMessage, setNewMessage] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createMessage(props.id);
    } catch (error) {
      console.log(error);
    }
  };

  async function createMessage(postId) {
    try {
      if (isLoggedIn) {
        const token = localStorage.getItem("token");
        console.log("This is the new message", newMessage);
        const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            message: {
              content: newMessage,
            },
          }),
        }); 
        const result = await response.json();
        console.log(result);
        setNewMessage(result.messages);
        alert("Your message was sent!");
        // having the window relod after the alert cause that's easier and more asthetically pleasing than having a close window function.
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
      <form id="message-form" onSubmit={handleSubmit} style={{alignItems: "center", display: "flex"}}>
        <label htmlFor="messages">
        <TextField
  margin="normal"
  required
  fullWidth
  multiline
  sx={{width: "80%", backgroundColor: "#222222"}}
  rows={"6"}
  name="message seller"
  label="Message Seller"
  type="message seller"
  id="description"
  value={newMessage}
  onChange={(e) => {
    console.log(e.target.value);
    setNewMessage(e.target.value);
  }}
  InputLabelProps={{
    style: { color: 'red', fontFamily: "ST", width: "100%" }
  }}
  InputProps={{
    style: { color: 'red', fontFamily: "ST", width: "100%" }
  }}
/>
        </label>
        
        <Button type="submit" style={{padding: "5px", height: "auto", margin: "10px", backgroundColor: "red", fontFamily: "ST", color: "black"}}>Send Message</Button>
      
      </form>
  );
}

export default Message;