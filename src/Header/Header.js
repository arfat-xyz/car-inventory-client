import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Header.css";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          <NavLink to="/">
            <img
              src="https://i.ibb.co/QcS31Gq/car-inventory-logo.png"
              alt="logo"
            />
          </NavLink>
        </div>
        <div className="header-menu">
          <nav>
            <div className="toggoler" onClick={() => setToggle(!toggle)}>
              {!toggle ? <MdMenu /> : <MdClose />}
            </div>
            <div className={`main-menu ${toggle ? "show-menu" : "hide-menu"}`}>
              <NavLink
                onClick={() => setToggle(!toggle)}
                className={({ isActive }) => (isActive ? "lactive-class" : "")}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setToggle(!toggle)}
                className={({ isActive }) => (isActive ? "lactive-class" : "")}
                to="/add"
              >
                Add Item
              </NavLink>
              <NavLink
                onClick={() => setToggle(!toggle)}
                className={({ isActive }) => (isActive ? "lactive-class" : "")}
                to="/manage"
              >
                Manage
              </NavLink>
              <NavLink
                onClick={() => setToggle(!toggle)}
                className={({ isActive }) => (isActive ? "lactive-class" : "")}
                to="/myitem"
              >
                My Item
              </NavLink>
              <NavLink
                onClick={() => setToggle(!toggle)}
                className={({ isActive }) => (isActive ? "lactive-class" : "")}
                to="/blog"
              >
                Blogs
              </NavLink>
              {user ? (
                <NavLink
                  onClick={() => {
                    setToggle(!toggle);
                    signOut(auth);
                  }}
                  className={({ isActive }) =>
                    isActive ? "lactive-class" : ""
                  }
                  to="/"
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  onClick={() => setToggle(!toggle)}
                  className={({ isActive }) =>
                    isActive ? "lactive-class" : ""
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
