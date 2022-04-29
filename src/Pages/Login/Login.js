import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../Hooks/PageTitle";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-container">
      <PageTitle title="Login"></PageTitle>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="eamil"
            id=""
            required
            placeholder="Please enter your email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="passwoord"
            required
            id=""
            placeholder="Please enter your password"
          />
        </div>
        <p>
          New here ? please <Link to="/register">Register</Link>
        </p>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
