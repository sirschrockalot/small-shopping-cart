import React from "react";
import product from "../api/product";

export default function Basket({ cartItems, onAdd, onRemove }) {
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;

  const handleSubmit = (event) => {
    alert(event.target.value);
    event.preventDefault();
  };

  // Get Products from API call
  const saveCart = async (product_type) => {
    let newCartItems = cartItems.map((items) => {
      const item = {
        name: items.name,
        type: items.type,
        image_url: items.image_url,
        price: items.price,
        size: items.variants[0].size,
        flavor: items.variants[0].flavors[0],
        qty: items.qty,
      };
      return item;
    });

    const response = await product.post("/products", {
      customer: {
        name: "Joel",
        lastName: "Schrock",
        paymentMethod: "Credit",
      },
      products: newCartItems,
      totalCost: totalPrice,
    });
    // setProducts(response.data);
  };

  return (
    <div className="container">
      <h2>Cart Items</h2>

      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-3 pt-4">
              <div>{item.name} : </div>
              <div>{item.variants[0].size}</div>
              <div>{item.variants[0].flavors[0]}</div>
            </div>
            <div className="col">
              <img
                src={item.image_url}
                alt={item.name}
                style={{
                  height: "100px",
                }}
              />
            </div>
            <div className="block col-2 text-right">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
              {item.qty} x ${item.price}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice}</div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice}</strong>
              </div>
            </div>
            <hr />
            <div>
              <button onClick={saveCart}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
