import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ id, name, image, price }) {
  return (
    <div className="ProductItem-Container">
      <Link to={`/products/${id}`}>
        <div className="ProductItem-wrapper">
          <img src={image} alt={name} className="ProductItem-image" />
          <div className="ProductItem-info">
            <h2 className="ProductItem-name">{name}</h2>
            <p className="ProductItem-price">₹{price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
