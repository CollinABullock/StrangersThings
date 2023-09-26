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

export async function CreatePost(title, description, price) {
  try {
    const response = await fetch(`${API}/${COHORT}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title, description, price, location
      })
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
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