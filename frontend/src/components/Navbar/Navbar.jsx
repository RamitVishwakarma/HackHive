import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-options">
        <li>
          <a href="/hackathons">Hackathon</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
      </div>
      <div className="navbar-buttons">
        <button>Host</button>
        <button
          onClick={() => {
            navigate("/login");
          }}>
          Log In
        </button>
      </div>
    </div>
  );
}
