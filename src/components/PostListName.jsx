import { useNavigate } from "react-router-dom";
import { deletePost } from "./FetchAllPosts";

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
    </div>
)
}