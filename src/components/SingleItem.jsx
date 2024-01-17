import { useParams, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Message from "./Messages";
import Modal from 'react-modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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


const COHORT_NAME = "2306-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}/posts`;

const SingleItem = (props) => {
  const [filteredItem, setFilteredItem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  console.log(props.items);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const foundItem = props.items.find((e) => {
      if (e._id === id) {
        return true;
      } else {
        return false;
      }
    });
    console.log(foundItem);
    if (foundItem) {
      setFilteredItem(foundItem);
    } else {
      setFilteredItem(null);
    }
  }, [props.items]);

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
      {filteredItem && filteredItem.title ? (

<Card sx={{ width: "70%", backgroundColor: "black", color: "red", fontFamily: "ST", alignItems: "center", justifyContent: "center", textAlign: "center", margin: "0 auto", cursor: "pointer"  }} >
<CardMedia
  sx={{ height: 140 }}
  image="https://images.hdqwalls.com/download/stranger-things-2020-q9-3840x2400.jpg"
  title="stranger things"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: "ST", fontSize: "2.5em", textDecoration: "underline"}}>
    {filteredItem.title}
  </Typography>
  <Typography sx={{color: "red", fontFamily: "ST", fontSize: "1.5em"}}>Sold by {filteredItem.author.username}</Typography>
  <Typography variant="body2" sx={{color: "red", fontFamily: "ST", fontSize: "1.5em"}}>
  Description:  {filteredItem.description}
  </Typography>
  <Typography sx={{color: "red", fontFamily: "ST", fontSize: "1.5em"}}>Location:  {filteredItem.location}</Typography>
</CardContent>
<CardActions style={{ display: 'flex', justifyContent: 'center' }}>
  <Typography size="small" sx={{color: "red", fontFamily: "ST", fontSize: "1em", width: "30%", margin: "10px"}}>${filteredItem.price}</Typography>
  <Button size="small" onClick={openModal} sx={{color: "red", fontFamily: "ST", fontSize: "1em", width: "30%", margin: "10px"}}>Message {filteredItem.author.username}</Button>
  <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Send message"
      shouldCloseOnOverlayClick={true}
      style={customModalStyles}
    >
      {/* Render the Message component inside the modal */}
      <Message isLoggedIn={props.isLoggedIn} id={filteredItem._id} />
    </Modal>
</CardActions>
</Card>) : (
        <h1>Nothing to see here</h1>
      )}
    </>
  );
};

export default SingleItem;