import React from "react";
import PageTitle from "../Hooks/PageTitle";
import Banner from "./Banner/Banner";
import CarChemistry from "./CarChemistry/CarChemistry";
import "./Home.css";
import HomeItems from "./HomeItems/HomeItems";
import Review from "./Review/Review";

const Home = () => {
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      <HomeItems></HomeItems>
      <Review></Review>
      <CarChemistry></CarChemistry>
    </>
  );
};

export default Home;
