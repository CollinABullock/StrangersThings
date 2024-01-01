import React from "react";
import { useState } from "react";
import "./Create.css"
import { useNavigate } from "react-router-dom";

const COHORT_NAME = "2306-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;


export default function Create(props) {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [price, setPrice] = useState("");
   const [deliver, setDeliver] = useState(false);
   const navigate = useNavigate();

   
    const handleSubmit = async(e) => {
        e.preventDefault()
   
        try {
            const result = await createPost(); 


            navigate('/')
        } catch (error) {
            console.log(error)
        }

    }






    async function createPost() {
        try {
            if(props.isLoggedIn) {
                const token = localStorage.getItem("token");
                const response = await fetch(`${BASE_URL}/posts`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        post: {
                           title: title,
                           description: description,
                           price: price,
                           willDeliver: deliver
                        }
                    })
                });  
                const result = await response.json()
                console.log(result, props.items)
                const itemsCopy = [...props.items]
                itemsCopy.push(result.data.post)
                props.setItems(itemsCopy)

                setTitle("")
                setDescription("")
                setPrice("")
                setDeliver("")

                console.log(result)
                return result;
        } 
    } catch (error) {
        console.log(error)
    }


    return(
        <div id="createpost">
            <form onSubmit={handleSubmit} id="createform">
                <h1 id="newpost">New Post Form</h1>
                <label className="createlabels">Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setTitle(e.target.value);
                        }}
                    />
                </label>

                <label className="createlabels">Description:
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setDescription(e.target.value);
                        }}
                    />
                </label>
                
                <label className="createlabels">Price:
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setPrice(e.target.value);
                        }}
                    />
                </label>
                
                <label className="createlabels">Will I Deliver?:
                    <input
                        type="checkbox"
                        value={deliver}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setDeliver(e.target.value);
                        }}
                    />
                </label>







                <button id="create-button"type="submit">Create New Post</button>

            </form>
        </div>
    )
} }