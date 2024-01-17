import { useParams, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Message from "./Messages";
import Modal from 'react-modal';;


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
    <div className="single-item-container">
      {filteredItem && filteredItem.title ? (

        <div className="single-item-container">
          <h2 id="title">{filteredItem.title}</h2>
          <p className="filtered-item">Seller:<br /> {filteredItem.author.username}</p>
          <p className="filtered-item">Location:<br /> {filteredItem.location}</p>
          <p className="filtered-item">Description:<br />{filteredItem.description}</p>
          <p className="filtered-item">Price:<br /> ${filteredItem.price}</p>
          <p className="filtered-item">{filteredItem.willDeliver ? "Seller will deliver this item" : "Seller requests pickup only"}
</p>
<div>
            <button onClick={openModal}>Message Seller</button>
          </div>
<Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Message Modal"
          >
            {/* Render the Message component inside the modal */}
            <Message isLoggedIn={props.isLoggedIn} id={filteredItem._id} />
            <button onClick={closeModal}>Close Modal</button>
          </Modal>

        </div>
      ) : null}
    </div>
  );
};

export default SingleItem;