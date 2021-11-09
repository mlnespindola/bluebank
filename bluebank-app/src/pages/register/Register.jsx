import React from "react";
import "./register.scss";
import { useRef, useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

export default function Register() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const passwordConfirmRef = useRef("");

  const { register } = useAuth();
  const history = useHistory();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function FormHandler(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("password do not match");
    }

    try {
      setError("");
      setLoading(true);
      await register(emailRef.current.value, passwordRef.current.value);
      history.push("/wallet");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <main className="register-page" id="register">
      <div className="container">
        <form onSubmit={FormHandler}>
          <h2>Sign Up</h2>
          {error && <span>{error}</span>}
          <label htmlFor="name">Name</label>
          <input id="name" ref={nameRef} type="text" minLength="3" required />
          <label htmlFor="email">Email</label>
          <input id="email" ref={emailRef} type="email" />
          <label htmlFor="password">Password</label>
          <input id="password" ref={passwordRef} type="password" />
          <label htmlFor="confirm-password">Confirm password</label>
          <input
            id="confirm-password"
            ref={passwordConfirmRef}
            type="password"
          />
          <button
            id="register-btn"
            disabled={loading}
            className="background-gradient btn"
            type="submit"
          >
            I'm ready
          </button>
          <h4>
            or <a href="/login">login</a>
          </h4>
        </form>
      </div>
    </main>
  );
}
