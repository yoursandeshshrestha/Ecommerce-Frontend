import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header-container">
      <div className="Header-left">
        <Link to={"/products/category/men"}>
          <p>Men</p>
        </Link>
        <Link to={"/products/category/women"}>
          <p>Women</p>
        </Link>
      </div>
      <div className="Header-middle">
        <Link to={"/"}>
          <h2>Inspire</h2>
        </Link>
      </div>
      <div className="Header-right">
        <Link to={"/login"}>
          <p>Login</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
