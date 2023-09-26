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
    <h1>Post Your Own Stuff!</h1>
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
    <input 
      value={title}
      type="text"
      name="title"
      placeholder="What are you selling?"
      onChange={(p) => setTitle(p.target.value)}
      /><br />
      <input 
      value={description}
      type="text" 
      name="description"
      placeholder="Describe what you're selling"
      onChange={(p) => setDescription(p.target.value)}
      /><br />
      <input 
      value={price}
      type="number" 
      name="price"
      placeholder="How much do you want for it?"
      onChange={(p) => setprice(p.target.value)}
      /><br />
         <input 
      value={location}
      type="text" 
      name="location"
      placeholder="What's the address"
      onChange={(p) => setLocation(p.target.value)}
      /><br />
      <button>Submit</button>
    </form>
    </>
  );
}