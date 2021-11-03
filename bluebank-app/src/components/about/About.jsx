import React from "react";
import "./about.scss";

export default function About() {
  return (
    <div className="about-section" id="about">
      <div className="left-container">
        <img src="images/App data-pana.svg" alt="" />
      </div>
      <div className="right-container">
        <h1>Get to know us</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
          laborum, iste alias consequuntur repellat obcaecati nesciunt vel id
          saepe, in eveniet ullam tempore nostrum maxime impedit tempora
          voluptates suscipit inventore! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Maxime sapiente modi recusandae impedit ut
          voluptatem est quae repudiandae in libero nesciunt molestias nam,
          illum consequatur velit similique inventore ex laborum!
        </p>
        <button className="btn background-gradient">Join us</button>
      </div>
    </div>
  );
}
