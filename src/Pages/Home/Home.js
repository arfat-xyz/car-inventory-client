import React from "react";
import PageTitle from "../Hooks/PageTitle";
import Banner from "./Banner/Banner";
import "./Home.css";
import HomeItems from "./HomeItems/HomeItems";

const Home = () => {
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      <HomeItems></HomeItems>
    </>
  );
};

export default Home;
