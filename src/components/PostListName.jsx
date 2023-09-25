import { useNavigate } from "react-router-dom";

export default function PostListName({post}) {
  const navigate = useNavigate();
  return (
    <>
    <h3>{post.title}</h3>
    <button className="more details" onClick={() => navigate(`/${post.id}`)}>Click for more details!</button>
    </>
  )
}