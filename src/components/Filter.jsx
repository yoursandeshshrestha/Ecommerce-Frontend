import React from "react";

function Filter() {
  return (
    <div className="Filter-container">
      <div className="Filter-top">
        <p>sort by</p>
        <select name="" id="">
          <option value="">Tshirt</option>
          <option value="">Pants</option>
          <option value="">Watch</option>
        </select>
      </div>
      <div className="Filter-middle">
        <p>New Collection</p>
        <p>All Products</p>
        <p>Discounted Products</p>
      </div>
      <div className="Filter-bottom">
        <p>Filter by:</p>
        <p>Availability</p>
        <p>Discount</p>
      </div>
    </div>
  );
}

export default Filter;
