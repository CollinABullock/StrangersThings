import { useNavigate } from "react-router-dom";
import { deletePost } from "./FetchAllPosts";
import { useState } from "react";



async function handleDelete() {
    try {
        const result = await deletePost(post._id);
        console.log(result);
        navigate("/");
    } catch(error){
        console.log(error);
    }
}



export default function PostListName({post}) {
  return (
    <div className="post-card">
        <figure>
            <figcaption>
                <h1>{post && post.title}</h1>
                <h3>{post && post.description}</h3>
                <p>Price: {post && post.price}</p>
                <p>Seller: {post && post.username}</p>
                <p>Location: {post && post.location}</p>
            </figcaption>
        </figure>
        <button onClick={handleDelete}>Delete</button><br />
    </div>
)
}