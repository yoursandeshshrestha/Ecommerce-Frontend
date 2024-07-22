import React from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Product from "../components/Product";

function Home() {
  return (
    <div>
      <div className="Home-container">
        <Filter />
        <Product />
      </div>
    </div>
  );
}

export default Home;
