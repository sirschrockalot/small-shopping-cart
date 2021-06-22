import React from "react";

export default function Basket({ cartItems, onAdd, onRemove }) {
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;

  const handleSubmit = (event) => {
    alert(event.target.value);
    event.preventDefault();
  };

  return (
    <div className="container">
      <h2>Cart Items</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {cartItems.length === 0 && <div>Cart is empty</div>}
          {cartItems.map((item) => (
            <div key={item.id} className="row">

              <div className="col-2 pt-4">
              <div>
{item.name} :{" "}
</div>
<div>
{item.variants[0].size}

</div>
<div>
{item.variants[0].flavors[0]}
</div>    
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
                {/* <div className="block"> */}
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>{" "}
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
                {item.qty} x ${item.price}
                {/* </div> */}
                {/* {item.qty} x ${item.price} */}
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
              {/* <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice}</div>
            </div> */}
              {/* <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">${shippingPrice}</div>
            </div> */}

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
                <button>Checkout</button>
              </div>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
