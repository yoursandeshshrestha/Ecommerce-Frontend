import React, { useState } from "react";
import men_data from "../assets/H&M_assets/Men/men_data";
import ProductItem from "./ProductItem";

function Product() {
  const [data, setData] = useState(men_data);

  if (!data) {
    return (
      <div className="NO-DATA-FOUND">
        <p>No Data Found</p>
      </div>
    );
  }

  return (
    <div className="Product-container">
      {data.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default Product;
