import React from "react";
import "./Footer.css";
const Footer = () => {
  const date = new Date();
  return <footer>Copyright © {date.getFullYear()} </footer>;
};

export default Footer;
