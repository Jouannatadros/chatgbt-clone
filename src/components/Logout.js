import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here

    // Redirect to the login page after logout
    navigate("/login");
  };

  return (
    <div className="logout-container">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
