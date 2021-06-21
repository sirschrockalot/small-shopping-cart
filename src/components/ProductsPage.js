import React from "react";
import Main from "./Main";
import product from "../api/product";
import Header from "./Header";
import { useState, useEffect } from "react";

export default function ProductsPage({ onAdd, getProducts, products }) {
  const onNavBarClick = (e) => {
    getProducts(e.target.value);
  };

  return (
    <div className="row">
      <Header
        // countCartItems={cartItems.length}
        onNavBarClick={onNavBarClick}
      ></Header>
      <Main products={products} onAdd={onAdd}></Main>
      {/* <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket> */}
    </div>
  );
}
