import { useState } from "react";
import { Link } from "react-router-dom";
import Delete from "./Delete";
import { motion } from "framer-motion";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import ReactCardFlip from "react-card-flip";

const AllItems = (props) => {
  const [searchQuery, setSearchQuery] = useState(""); //Storing the search query.
  
 

 
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

  <div id="all-Items-Container">
          {filteredItems.length ? (
            filteredItems.map((e, index) => (
              <ReactCardFlip key={e._id} isFlipped={flippedCards[index]} flipDirection="vertical">
                <div key="front" className="item-container" onClick={() => handleCardClick(index)}>
                  
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
                <div key="back" className="item-container" onClick={() => handleCardClick(index)}>
                
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