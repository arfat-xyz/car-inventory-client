import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../Hooks/PageTitle";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Login.css";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth,);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  user && navigate(from, { replace: true });
  error && toast.error(error.message);
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
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
