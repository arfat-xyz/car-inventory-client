import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../Hooks/PageTitle";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import "./Login.css";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin";
import { toast } from "react-toastify";
import { async } from "@firebase/util";
const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, signInError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(e.target.email.value);
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleReset = async () => {
    if (!email) {
      toast.warn("Please enter your email on email filed", {
        pauseOnHover: true,
      });
    } else {
      await sendPasswordResetEmail(email);
    }
  };
  sending && toast.info("please check your email");
  user && navigate(from, { replace: true });
  signInError &&
    toast.error(signInError.message, {
      pauseOnHover: true,
    });
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
              onBlur={handleEmail}
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
          <p>
            forget password ?{" "}
            <span
              onClick={handleReset}
              style={{ color: "orangered", cursor: "pointer" }}
            >
              Reset
            </span>
          </p>
          <input type="submit" value="Login" />
        </form>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
