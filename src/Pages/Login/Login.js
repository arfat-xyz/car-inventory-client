import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PageTitle from "../Hooks/PageTitle";
import { SiFacebook } from "react-icons/si";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
} from "react-firebase-hooks/auth";
import "./Login.css";
import auth from "../../firebase.init";
const Login = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  (emailUser || facebookUser) && navigate("/");
  return (
    <div className="main-container">
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
      <div className="or">
        <div></div>
        OR
        <div></div>
      </div>
      <div className="social-logins">
        <p>{facebookError && `${facebookError}`}</p>
        <div className="social-btn" onClick={() => signInWithFacebook()}>
          <SiFacebook />
          <span>Facebook</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
