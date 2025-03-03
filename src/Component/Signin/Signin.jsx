import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format.");
      return;
    }

    console.log("Signing in with:", { email, password });

    // Simulating successful login
    navigate("/dashboard"); // Redirect to Dashboard after login
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg rounded-4" style={{ width: "400px" }}>
        <h3 className="text-left mb-4">Sign In</h3>

        {error && <div className="alert alert-danger py-1">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3 input-container">
            <input
              type="email"
              className="form-control custom-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder=" "
            />
            <label className="floating-label">Email*</label>
          </div>
          <div className="mb-3 input-container">
            <input
              type="password"
              className="form-control custom-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder=" "
            />
            <label className="floating-label">Password*</label>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label ms-2" htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="/forgot-password" className="text-danger">Forgot password?</a>
          </div>

          <button type="submit" className="Signinbtn w-100 mt-3">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
