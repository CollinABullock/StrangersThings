import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deletePost } from './FetchAllPosts';
import { useState, useEffect } from 'react';
import { fetchSinglePost } from './FetchAllPosts';

export default function SinglePost() {
    const navigate = useNavigate();
    const [error, setError] = useState (null);
    const [post, setPost] = useState(null);
    const {_id} = useParams();
    console.log(_id);
    console.log(useParams());

    const goBack = () => {
        navigate(-1);
      }

      useEffect(() => {
        async function getSinglePost() {
          const response = await fetchSinglePost(_id);
          if (response.success) {
            setPost(response.data.post)
          } else { 
            setError(response.error.message)
          }
        }
        getSinglePost()
       }, [])

    async function handleDelete() {
        try {
            const result = await deletePost(post._id);
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
                    <p>{post && post.title}</p>
                    <p>{post && post.description}</p>
                    <p>Price: {post && post.price}</p>
                    <p>Seller: {post && post.username}</p>
                    <p>Location: {post && post.location}</p>
                </figcaption>
            </figure>

            <button className="button" onClick={handleDelete}>Delete</button><br />
            <button className="button" onClick={goBack}>Go Back</button>

        </div>
    )
}