import React from "react";
import { useState } from "react";
import "./Messages.css"

const COHORT_NAME = "2306-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

function Message(props) {

  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createMessage(props.id);
    } catch (error) {
      console.log(error);
    }
  };

  async function createMessage(postId) {
    console.log(props.isLoggedIn);
    try {
      if (props.isLoggedIn) {
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
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="message-seller-container">
      <h1 id="message-seller">Message Seller</h1>
      <form id="message-form" onSubmit={handleSubmit}>
        <label htmlFor="messages">
          <textarea
            rows="10"
            cols="30"
            value={newMessage}
            placeholder="Message to Seller Here"
            onChange={(e) => {
              console.log(e.target.value);
              setNewMessage(e.target.value);
            }}
          />
        </label>

        <button id="message-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Message;