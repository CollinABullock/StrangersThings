 import React, { useEffect, useState } from 'react';

const Profile = () => {
  // Define state variables to store user profile data and loading status.
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Replace 'yourAuthToken' with the actual bearer token obtained during authentication.
  const authToken = 'yourAuthToken';

  // Define a function to fetch the user's profile data using the bearer token.
  const fetchUserProfile = async () => {
    try {
      const response = await fetch('https://api.example.com/profile', {
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProfileData(data);
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

  // Use the useEffect hook to fetch the profile data when the component mounts.
  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <div>
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