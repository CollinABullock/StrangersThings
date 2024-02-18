import { useState } from "react";
import Delete from "./Delete";
import { motion } from "framer-motion";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import ReactCardFlip from "react-card-flip";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from "react";
import Message from "./Messages";
import Modal from 'react-modal';

const customModalStyles = {
  overlay: {
    backgroundColor: "black",
    padding: "20px",
    width: "50%",
    height: "60%",
    margin: "0 auto"
  },
  content: {
    width: '80%', 
    margin: '0 auto', // Center the modal horizontally
    padding: '20px', 
    display: 'flex',
    backgroundColor: "black",
    color: "red",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const AllItems = (props) => {
  const [searchQuery, setSearchQuery] = useState(""); //Storing the search query.
  const [modalIsOpen, setModalIsOpen] = useState(false);

  
    let filteredItems = props.items.filter((item) => {
    let lowercaseTitle = item.title.toLowerCase();
    let lowercaseQuery = searchQuery.toLowerCase();

    if (lowercaseTitle.includes(lowercaseQuery)) {
      return item;
    }
  });

  const [flippedCards, setFlippedCards] = useState(Array(filteredItems.length).fill(false)); // Initialize flippedCards array


  const handleCardClick = (index) => {
    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = !newFlippedCards[index];
    setFlippedCards(newFlippedCards);
  };

     // Function to open the modal
     const openModal = () => {
      setModalIsOpen(true);
    };
  
    // Function to close the modal
    const closeModal = () => {
      setModalIsOpen(false);
    };

  return (
    <>
   <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
  >
    <div id="searchbar">
       <form>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Search"
      variant="outlined"
      placeholder="Search"
      sx={{backgroundColor: "#222222"}}
      InputLabelProps={{
        style: { color: 'red', fontFamily: "ST", outline: "2px 2px 2px red" } }}
        InputProps={{
          style: { color: 'red', fontFamily: "ST",  } // 
        }}
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon style={{ fill: "red" }} />
    </IconButton>
  </form>
  </div>

  <div id="all-Items-Container" style={{width: "100%"}}>
          {filteredItems.length ? (
            filteredItems.map((e, index) => (
              <ReactCardFlip key={e._id} isFlipped={flippedCards[index]} flipDirection="vertical">
                <div key="front" style={{height: "100px"}} className="item-container" onClick={() => handleCardClick(index)}>
                
                  
                    {e.title.toUpperCase()}
             
                  {props.loggedInUser === e.author.username ? (
                    <Delete
                      id={e._id}
                      items={props.items}
                      setItems={props.setItems}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="item-containerBACK" onClick={() => handleCardClick(index)} style={{minHeightheight: "500px"}}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: "ST", fontSize: "1em",}}>
                {e.title}
                </Typography>
                <Typography sx={{color: "red", fontFamily: "ST", fontSize: "1em", marginBottom: "20px"}}>Sold by {e.author.username} <br />
                Location: {e.location}
                </Typography>
                <Typography variant="body2" sx={{color: "red", fontFamily: "ST", fontSize: "1.25em", marginBottom: "20px"}}>
  {e.description}
  </Typography>
  <Button size="small" onClick={openModal} sx={{backgroundColor: "red", color: "white", fontFamily: "ST", fontSize: "1em", width: "100%", margin: "0 auto"}}>Message {e.author.username}</Button>
  <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Send message"
      shouldCloseOnOverlayClick={true}
      style={customModalStyles}
    >
      {/* Render the Message component inside the modal */}
      <Message isLoggedIn={props.isLoggedIn} id={e._id} />
    </Modal>
      </div>
              </ReactCardFlip>
            ))
          ) : (
            <p>No Results Found</p>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default AllItems;