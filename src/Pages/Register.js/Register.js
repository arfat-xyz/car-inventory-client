import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  return (
    <div className="login-container">
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="name"
            name="name"
            id=""
            required
            placeholder="Please enter your name"
          />
        </div>
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
          Already Registered? <Link to="/login">Login</Link>
        </p>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
