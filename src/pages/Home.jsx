import React from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Product from "../components/Product";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <div className="Home-container">
        <Filter />
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
