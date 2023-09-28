import React from "react";
import { useState, useEffect } from "react";
// import "./Profile.css";
import { useNavigate } from "react-router-dom";


const COHORT_NAME = "2306-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const Profile = (props) => {
    // Define state variables to store user profile data and loading status.
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [messages, setMessages] = useState([]);
  
    // Replace 'yourAuthToken' with the actual bearer token obtained during authentication.
   
  
   useEffect(() => {
    const fetchUserProfile = async (props) => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${BASE_URL}/users/`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          const userData = await response.json();
          setProfileData(userData);
          console.log(userData)
          console.log(userData.data.messages);
        setMessages(userData.data.messages);
        return result;
        } else {
          // Handle error responses (e.g., unauthorized access).
          console.error('Failed to fetch profile data');
        }
      } catch (error) {
        // Handle network errors or other exceptions.
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile()
}, [])
  
    // Use the useEffect hook to fetch the profile data when the component mounts.
    useEffect(() => {
      fetchUserProfile();
    }, []);
  
    return (
      <div id="profile-container">
        <h1>User Profile</h1>
        {loading ? (
          <p>Loading profile data...</p>
        ) : profileData ? (
          <div>
            <p>Name: {profileData.name}</p>
            <p>Email: {profileData.email}</p>
            {/* Display other profile information as needed */}
          </div>
        ) : (
          <p>Unable to fetch profile data.</p>
        )}
      </div>
    );
        
  };
  
  export default Profile;
  
  