import React from "react";
import "./topbar.scss";

export default function TopBar() {
  return (
    <div className="topbar" id="topbar">
      <div className="topbar-container">
        <div className="left-container">
          <div className="logo">
            <h2>BlueBank.</h2>
          </div>
        </div>
        <div className="right-container">
          <nav>
            <a href="#about">about</a>
            <a href="/" alt="login" className="login">
              login
            </a>
            <a href="/" alt="register" className="register">
              register
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
