import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const baseURL = import.meta.env.VITE_BASE_URL;
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${baseURL}/users/register`, {
        username,
        email,
        password,
      });
      //   console.log(response);
      setSuccess(response.data);
      setUsername("");
      setEmail("");
      setPassword("");
      setTimeout(() => {
        setSuccess(null);
      }, 3000);
    } catch (error) {
      setError(error.response?.data?.message || error.message);
      //   console.error("Error in register:", error.message);
      setTimeout(() => {
        setError(null);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Auth-container">
      <div className="Auth-wrapper">
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <h1>Welcome,</h1>
        <p>Create your account.</p>
        <form onSubmit={handleRegister}>
          <div className="coolinput">
            <label htmlFor="username" className="text">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username..."
              name="username"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="Auth-button" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="Auth-redirect-text">
          Already have an account?
          <span>
            <Link to="/login"> Sign in</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
