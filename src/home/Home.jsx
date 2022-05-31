import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Nav /> 
      <div style={{ height: "6.2rem" }}></div>
      <Header />
      <Products />
    </div>
  );
};

export default Home;
