import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import "../styles/user-profile.css";

const UserProfile = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [isEditMode, setIsEditMode] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    // Fetch user details from the server
    setUserDetails(user);
  }, [user]);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
    // Update user details on the server
    // ...
  };

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <form className="profile-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={userDetails.username}
          onChange={handleChange}
          disabled={!isEditMode}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
          disabled={!isEditMode}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          value={userDetails.password}
          onChange={handleChange}
          disabled={!isEditMode}
        ></input>

        {isEditMode ? (
          <button type="button" onClick={handleSaveClick}>
            Save
          </button>
        ) : (
          <button type="button" onClick={handleEditClick}>
            Edit
          </button>
        )}
      </form>
    </div>
  );
};

export default UserProfile;
