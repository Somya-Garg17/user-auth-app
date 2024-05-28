import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../authService";
import "./SignUp.css";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (error) {
      setError("Sign-up failed: " + error.message);
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h1 className="title">Sign Up</h1>
        {error && <p className="error">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <button onClick={handleSignUp} className="button">
          Sign Up
        </button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
