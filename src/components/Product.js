import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="ui card">
      <div className="image">
        <img
          src={product.image_url}
          alt={product.name}
          style={{
            height: "400px",
            // backgroundSize: "cover",
          }}
        />
      </div>
      <div className="content">
        <a className="header">{product.name}</a>
        <div className="meta">
          {/* <span className="date">{product.email}</span> */}
          {/* {product.alternatives} */}
          Chocolate Marshmallow, Bold Brew Coffee
        </div>
      </div>
      <div className="extra content">
        <div className="ui tag labels">
          <a className="ui label">${product.price}</a>
        </div>
        <button className="ui button" onClick={() => onAdd(product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
