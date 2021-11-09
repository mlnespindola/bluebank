import React from "react";
import { Link } from "react-router-dom";
import "./topbar.scss";

export default function TopBar() {
  return (
    <header className="topbar" id="topbar">
      <div className="topbar-container">
        <div className="left-container">
          <a href="/" className="logo">
            <h2>BlueBank.</h2>
          </a>
        </div>
        <div className="right-container">
          <nav>
            <ul>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <Link to='/register'>register</Link>
              </li>
              <li>
                <Link to='/login'>login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
