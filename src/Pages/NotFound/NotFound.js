import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../Hooks/PageTitle";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="not-found">
      <PageTitle title="Not Found"></PageTitle>
      <div id="clouds">
        <div class="cloud x1"></div>
        <div class="cloud x1_5"></div>
        <div class="cloud x2"></div>
        <div class="cloud x3"></div>
        <div class="cloud x4"></div>
        <div class="cloud x5"></div>
      </div>
      <div class="c">
        <div class="_404">404</div>
        <div class="_1">THE PAGE</div>
        <div class="_2">WAS NOT FOUND</div>
        <Link class="btn" to={"/"}>
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
