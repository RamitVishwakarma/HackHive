import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <div className="logo">
          <a href="">
            <img src={logo} alt="" />
          </a>
        </div>
        <h1>
          Empowering <span>Innovators</span>, Elevating <span>Software</span>.
        </h1>
        <div className="footer-icons">
          <a href="">
            <img src="" alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
        </div>
      </div>
      <div className="right">
        <div className="options">
          <h1>COMMUNITY</h1>
          <p>Organize a hackathon</p>
          <p>Explore hackathons</p>
          <p>Code of conduct</p>
          <p>Brand Assets</p>
        </div>
        <div className="options">
          <h1>COMPANY</h1>
          <p>About</p>
          <p>Jobs</p>
          <p>Blogs</p>
          <p>Changeloge</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
        <div className="options">
          <h1>SUPPORT</h1>
          <p>Help</p>
          <p>Refund Policy</p>
          <p>Status</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}
