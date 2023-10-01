import { useParams, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Message from "./Messages";
import "./SingleItem.css"


const COHORT_NAME = "2306-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}/posts`;

const SingleItem = (props) => {
  const [filteredItem, setFilteredItem] = useState(null);

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

  return (
    <div className="single-item-container">
      {filteredItem && filteredItem.title ? (

        <div className="single-item-container">
          <h2 id="title">{filteredItem.title}</h2>
          <p className="filtered-item">Author: {filteredItem.author.username}</p>
          <p className="filtered-item">Description: {filteredItem.description}</p>
          <p className="filtered-item">Price: {filteredItem.price}</p>
          <p className="filtered-item">{filteredItem.willDeliver}</p>
          <div id="message-author">
            <Message isLoggedIn={props.isLoggedIn} id={filteredItem._id} />
          </div>

        </div>
      ) : null}
    </div>
  );
};

export default SingleItem;