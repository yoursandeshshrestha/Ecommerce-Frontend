import React from "react";
import { useParams } from "react-router-dom";
import men_data from "../assets/H&M_assets/Men/men_data";
import Header from "../components/Header";
import infoIMG from "../../public/icons/information.png";

function ProductDescription() {
  const { id } = useParams();
  const product = men_data.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>NO PRODUCT FOUND</div>;
  }

  return (
    <>
      <div className="ProductDescription">
        <img
          src={product.image}
          alt={product.name}
          className="ProductDescription-image"
        />
        <div className="ProductDescription-wrapper">
          <div className="ProductDescription-info">
            <h1 className="ProductDescription-name">{product.name}</h1>
            <p>MRP inclusive of all taxes</p>
            <p className="ProductDescription-price">₹{product.price}</p>
          </div>
          <div className="ProductDescription-sizes">
            <h3>Sizes:</h3>
            <div className="ProductDescription-size-options">
              {product.sizes.map((size) => (
                <button key={size} className="ProductDescription-size-button">
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="ProductDescription-ADDTOCART">
            <button>ADD</button>
            <div className="ProductDescription-ADDTOCART-infoIMG">
              <img src={infoIMG} alt="" srcset="" />
              <p>Delivery Time : 2-7 days</p>
            </div>
          </div>
          <div className="Main-description">
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDescription;
