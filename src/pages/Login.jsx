import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userContext";
import Header from "../components/Header";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { setCurrentUser } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    const baseURL = import.meta.env.VITE_BASE_URL;
    try {
      const response = await axios.post(`${baseURL}/users/login`, {
        email,
        password,
      });
      const user = response.data;
      setCurrentUser(user);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("Error in login", error.message);
      setError(error.response?.data?.message || error.message);
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return (
    <>
      <div className="Auth-container">
        <div className="Auth-wrapper">
          {error && <p className="error">{error}</p>}
          <h1>Login,</h1>
          <p>let's get started</p>
          <form onSubmit={handleLogin}>
            <div className="coolinput">
              <label htmlFor="email" className="text">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address..."
                name="email"
                className="input"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="coolinput">
              <label htmlFor="password" className="text">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password..."
                name="password"
                className="input"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button type="submit" className="Auth-button">
              Login
            </button>
          </form>
          <p className="Auth-redirect-text">
            Don't have an account?
            <span>
              <Link to="/register"> Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
