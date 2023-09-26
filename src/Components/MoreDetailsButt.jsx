import React from "react";
// import { ReactDOM } from "react";

function DeleteButton(props){
    return(
        <button onClick={props.onDelete}>F*ck outta here!</button>
    );
}

export default DeleteButton;


//  This will be the code for implementing the Deletebutton in a
//  separate function

//  <DeleteButton onDelete={() => handleDelete(item.id)} />

function ItemList(props) { // This is be the render single post function

//handleDelete will be called via the <DeleteButton onDelete={() => handleDelete(item.id)} /> nesting in the render return 
const handleDelete = (itemId) => { 
  // Assuming items is an array in your component's state
  const updatedItems = props.items.filter((item) => item.id !== itemId);
  props.setItems(updatedItems); // Update the state with the new list of items
};

const COHORT = "2306-FTB-ET-WEB-AM";
const API = "https://strangers-things.herokuapp.com/api/";

const MoreDetails = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API}/${COHORT}/posts/id`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Details</h1>
      <button onClick={fetchData}>More Details</button>
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          {/* Add more HTML elements to display additional details */}
        </div>
      )}
    </div>
  );
};

export default MoreDetails;

