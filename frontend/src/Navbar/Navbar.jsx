import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="">
          <img src="" alt="" />
        </a>
      </div>
      <div className="navbar-options">
        <li>
          <a href="">Hackathon</a>
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
        <button>Log In</button>
      </div>
    </div>
  );
}
