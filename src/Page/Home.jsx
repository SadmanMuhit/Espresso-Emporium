import React from "react";
import Navbar from "../Component/Home/Navbar";
import Banner from "../Component/Home/Banner";
import Info from "../Component/Home/info";
import Projduct from "../Component/Home/Projduct";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Info />
      <Projduct/>
    </>
  );
};

export default Home;
