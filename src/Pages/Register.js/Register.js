import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageTitle from "../Hooks/PageTitle";
import SocialLogin from "../Login/SocialLogin";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import "./Register.css";
import auth from "../../firebase.init";
import { async } from "@firebase/util";
const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };
  user && navigate("/");
  // console.log(error?.message);
  return (
    <div className="register-container">
      <div className="login-container">
        <PageTitle title="Register"></PageTitle>
        <form action="" onSubmit={handleRegister}>
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
            Already Registered? <Link to="/login">Login</Link>
          </p>
          <input type="submit" value="Register" />
        </form>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
