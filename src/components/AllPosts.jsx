import { useState, useEffect } from "react";
import FetchAllPosts from "./FetchAllPosts";
import PostListName from "./PostListName";
import { CreatePost } from "./FetchAllPosts";

export default function AllPosts(params) {
  const [posts, setPosts] = useState ([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");

  useEffect (() => {
    async function getAllPosts() {
      const response = await FetchAllPosts();
      if (response.success) {
        setPosts(response.data.posts);
      } else {
        setError(response.error.message);
      }
    }
    getAllPosts()
  }, [])

const displayedPosts = searchParams ? posts.filter((post) => post.title.toLowerCase().includes(searchParams)
) : posts;

return (
  <>
  <div>
    <label>
      <input type="text" 
      placeholder="search for posts"
      onChange={(e) => setSearchParams (e.target.value.toLowerCase())}
      />
    </label>
  </div>
  
  {displayedPosts.map((post) => {
  return (
    <>
    <PostListName post={post} key={post.id} id="post-card" />
    <button>See More Details</button>
    </>

  )

  
  
})}
  </>
)

}