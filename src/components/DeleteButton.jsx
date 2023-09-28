import React from "react";
// import { ReactDOM } from "react";

function DeleteButton(props){
    return(

        <button className="button" onClick={props.onDelete}>F*ck outta here!</button>

    );
}

export default DeleteButton;


// //  This will be the code for implementing the Deletebutton in a
// //  separate function

// //  <DeleteButton onDelete={() => handleDelete(item.id)} />

// function ItemList(props) { // This is be the render single post function

// //handleDelete will be called via the <DeleteButton onDelete={() => handleDelete(item.id)} /> nesting in the render return 
// const handleDelete = (itemId) => { 
//   // Assuming items is an array in your component's state
//   const updatedItems = props.items.filter((item) => item.id !== itemId);
//   props.setItems(updatedItems); // Update the state with the new list of items
// };