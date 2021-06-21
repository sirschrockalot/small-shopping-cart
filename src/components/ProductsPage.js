import React from "react";
import Main from "./Main";
import product from "../api/product";
import Header from "./Header";
import { useState, useEffect } from "react";

export default function ProductsPage() {
  // const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  // Make API call when function is initiated
  useEffect(() => {
    getProducts("Protein");
  }, []);

  // Get Products from API call
  const getProducts = async (product_type) => {
    const response = await product.get("/products/type", {
      params: {
        searchCriteria: product_type,
      },
    });
    setProducts(response.data);
  };
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const onNavBarClick = (e) => {
    // console.log(e.target.value);
    console.log("onNavBAr Clicked");
    getProducts(e.target.value);
  };
  return (
    <div className="row">
      <Header
        // countCartItems={cartItems.length}
        onNavBarClick={onNavBarClick}
      ></Header>
      <Main products={products}></Main>
      {/* <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket> */}
    </div>
  );
}
