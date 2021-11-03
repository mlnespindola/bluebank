import React from 'react'
import "./homepage.scss";
import "../../global.scss";

export default function Homepage() {
    return (
      <div className="homepage" id="homepage">
        <section className="background-gradient" id="homepage-section">
          <div className="left-container">
              <h1>Blue<span>Bank</span></h1>
              <h3>Get ready for the future.</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque laborum, iste alias consequuntur repellat obcaecati nesciunt vel id saepe, in eveniet ullam tempore nostrum maxime impedit tempora voluptates suscipit inventore!</p>
              <button className="btn">register</button><br/>
              <a href="/">Already have an account?</a>
          </div>
          <div className="right-container">
              <img src="images/Mobile payments-amico.svg" alt="online banking" />
          </div>
        </section>
      </div>
    );
}
