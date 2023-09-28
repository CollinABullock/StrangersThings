import { useState, useEffect } from "react";
import { CreatePost } from "./FetchAllPosts";

export default function CreateNewPost( { posts, setPosts } ) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setprice] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(p) {
    p.preventDefault();
    const apiData = await CreatePost(title, description, price, location);
    console.log(apiData);
    if (apiData.success) {
      console.log("New Post", apiData.data.newPost);
    
      const newPostList = [...posts, apiData.data.newPost];
      setPosts(newPostList);
      setTitle("");
      setDescription("");
      setprice("");
      setLocation("");
    } else {
      setError(apiData.error.message);
    }
  }

  return (
    <>
    <div className="post-container font-face-gm">
    <h1 id="form-header">Post Your Own Stuff!</h1>
    <form id="post-form" onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
    <input className="inputs"
      value={title}
      type="text"
      name="title"
      placeholder="What are you selling?"
      onChange={(p) => setTitle(p.target.value)}
      /><br />
      <input className="inputs"
      value={description}
      type="text" 
      name="description"
      placeholder="Describe what you're selling"
      onChange={(p) => setDescription(p.target.value)}
      /><br />
      <input className="inputs"
      value={price}
      type="number" 
      name="price"
      placeholder="How much do you want for it?"
      onChange={(p) => setprice(p.target.value)}
      /><br />
         <input className="inputs"
      value={location}
      type="text" 
      name="location"
      placeholder="What's the address"
      onChange={(p) => setLocation(p.target.value)}
      /><br />
      <button className="button submit-button" id="createNewPost" type="submit">Submit</button>
    </form>
    </div>
    </>
  );
}