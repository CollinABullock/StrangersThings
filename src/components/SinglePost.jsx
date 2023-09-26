import React from 'react';
import { useNavigatie } from 'react-router-dom';
import { API } from FetchAllPost
import { deletePost } from './/api'
// ^Still need a deletePost function in /api

export default function SinglePost({post}) {
    const navigate = useNavigate();

    async function handleDelete() {
        try {
            const result = await deletePost(post.id);
            console.log(result);
            navigate("/");
        } catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <figure>
                <figcaption>
                    <p>{post.name}</p>
                    <p>{post.description}</p>
                    <p>Price: {post.price}</p>
                    <p>Seller: {post.username}</p>
                    <p>Location: {post.location}</p>
                </figcaption>
            </figure>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}