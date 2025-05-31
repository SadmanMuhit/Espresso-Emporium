import React from "react";
import Navbar from "../Component/Home/Navbar";
import Banner from "../Component/Home/Banner";
import Info from "../Component/Home/info";
import Product from "../Component/Home/Product";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Info />
      <Product />
    </>
  );
};

export default Home;
