import React from "react";
import Product from "./Product";

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <div className="block col-2">
      <h2>Products</h2>
      <br></br>
      <div className="ui grid container">
        <div className="ui relaxed equal width grid">
          {products.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
          ))}
        </div>
      </div>
    </div>
  );
}
