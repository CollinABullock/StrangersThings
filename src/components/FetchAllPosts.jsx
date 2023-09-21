import { useState, useEffect } from "react";

const COHORT = "2306-FTB-ET-WEB-AM";
const API = "https://strangers-things.herokuapp.com/api/";

export default async function FetchAllPosts() {
  try {
    const response = await fetch(`${API}/${COHORT}/posts`);
    const result = response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}