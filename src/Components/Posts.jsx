import { useNavigate } from "react-router-dom";
// useNavigate
export default function Posts(){
    const navigate = useNavigate();
    return(
        <div className="h1-text">
            <br />
            <h1 style={{color: "#FF00FF"}}>POSTS</h1>
        </div>
    );
}