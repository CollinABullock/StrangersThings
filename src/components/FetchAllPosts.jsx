import { useState, useEffect } from "react";

const COHORT = "2306-FTB-ET-WEB-AM";
const API = "https://strangers-things.herokuapp.com/api";

export default async function FetchAllPosts() {
  try {
    const response = await fetch(`${API}/${COHORT}/posts`);
    const result = await response.json();
    console.log(result);
    return result
  } catch (error) {
    console.error();
  }
}

export async function CreatePost(props) {
  try {
      if(props.isLoggedIn) {
          const token = localStorage.getItem("token");
          const response = await fetch(`${API}/${COHORT}/posts`, {
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
                     location: location
                  }
              })
          });  // Outside of fetch starting here.
          const result = await response.json()
          console.log(result, props.items)
          const itemsCopy = [...props.items]
          itemsCopy.push(result.data.post)
          props.setItems(itemsCopy)

          setTitle("")
          setDescription("")
          setPrice("")
          setLocation("")

          console.log(result)
          return result;
      }
  } catch (error) {
      console.log(error)
  }
}

export async function deletePost(id) {
  try {
      const response = await fetch (`${API}/${COHORT}/posts/${id}`, {
          method: "DELETE"
      });
      const result = await response.json();
      return result;
  } catch (error) {
      console.error(error);
  }
}

export async function fetchSinglePost(id) {
  try {
    const response = await fetch(`${API}/${COHORT}/posts/${id}`);
    const result = await response.json();
    console.log(result);
    return result
  } catch (error) {
    console.error();
  }
}