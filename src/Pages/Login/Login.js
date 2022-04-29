import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PageTitle from "../Hooks/PageTitle";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Login.css";
import auth from "../../firebase.init";
const Login = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  user && navigate("/");
  return (
    <div className="login-container">
      <PageTitle title="Login"></PageTitle>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id=""
            required
            placeholder="Please enter your email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
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
