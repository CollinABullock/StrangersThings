import { useState, useEffect } from "react";
import FetchAllPosts from "./FetchAllPosts";
import { useNavigate } from "react-router-dom"

export default function allPosts(params) {
  const [post, setPost] = useState ([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  


}