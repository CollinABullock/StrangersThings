import { useState } from "react";
import { Link } from "react-router-dom";
import Delete from "./Delete";

const AllItems = (props) => {
  const [searchQuery, setSearchQuery] = useState(""); //Storing the search query.
 

 
  let filteredItems = props.items.filter((item) => {
    let lowercaseTitle = item.title.toLowerCase();
    let lowercaseQuery = searchQuery.toLowerCase();

    if (lowercaseTitle.includes(lowercaseQuery)) {
      return item;
    }
  });

  return (
    <>
      <form id="searchbar">
        <label htmlFor="name"></label>
        <input id="search"
          name="search-query"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(event) => {
          
            console.log(event.target.value);
            setSearchQuery(event.target.value);
          }}
        ></input>
      </form>

      <div id="all-Items-Container">
        {filteredItems.length ? (
          filteredItems.map((e) => {
            console.log(props.loggedInUser);
            return (
              <div key={e._id} className="item-container">
                
                <Link className="link-text" to={`/post/${e._id}`}>
                  {" "}
                  {e.title.toUpperCase()}{" "}
                </Link>

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
            );
          })
        ) : (
          <p>No Results Found</p>
        )}
      </div>
    </>
  );
};

export default AllItems;