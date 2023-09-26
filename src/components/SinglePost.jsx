import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deletePost } from './FetchAllPosts';
import { useState } from 'react';
import { fetchSinglePost } from './FetchAllPosts';

export default function SinglePost() {
    const navigate = useNavigate();
    const [post, setPost] =useState(null);
    const {id} = useParams();
    console.log(id);

    const goBack = () => {
        navigate(-1);
      }

      useEffect(() => {
        async function getSinglePost() {
          const response = await fetchSinglePost(id);
          if (response.success) {
            setPlayer(response.data.post)
          } else { 
            setError(response.error.message)
          }
        }
        getSinglePost()
       }, [])

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
                    <p>{post && post.name}</p>
                    <p>{post && post.description}</p>
                    <p>Price: {post && post.price}</p>
                    <p>Seller: {post && post.username}</p>
                    <p>Location: {post && post.location}</p>
                </figcaption>
            </figure>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}