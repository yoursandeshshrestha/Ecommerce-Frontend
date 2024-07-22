import React from "react";
import { Link, useParams } from "react-router-dom";
import men_data from "../assets/H&M_assets/Men/men_data";
import ProductItem from "../components/ProductItem";

function Category() {
  const { category } = useParams();
  console.log(category);
  const filteredProducts = men_data.filter(
    (product) => product.category === category
  );

  return (
    <>
      <p className="category-link">
        <Link to={"/"}>products</Link>/category/{category}
      </p>
      <div className="Product-container-category">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}

export default Category;
