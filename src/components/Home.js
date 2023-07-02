import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/login">
        <button style={buttonStyle}>Login</button>
      </Link>
      <Link to="/register">
        <button style={buttonStyle}>Register</button>
      </Link>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: "#4caf50",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginRight: "10px",
};

export default Home;
