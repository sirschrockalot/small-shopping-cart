import React, { useState } from "react";
import product from "../api/product";

export default function Basket({ cartItems, onAdd, onRemove }) {
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [nameValue, setNameValue] = useState();
  const [lastNameValue, setLastNameValue] = useState();
  const [emailValue, setEmailValue] = useState();
  const [onSelected, setOnSelected] = useState();
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;

  const handleSubmit = (event) => {
    // alert(event.target.elements.firstName);
    console.log(event.target.elements.firstName.value);
    console.log(event.target.elements.lastName.value);
    console.log(event.target.elements.email.value);
    console.log({ onSelected });
    //Call to save the cart
    // saveCart(event); //TODO uncomment once login capability is there
    event.preventDefault();
  };

  const handleEmailChange = (event) => {
    // this.setState({email: e.target.value})
    // console.log(event.target.value);
    setEmailValue(event.target.value);
    setButtonEnabled(true);
  };

  const onValueChange = (event) => {
    // this.setState({
    //   selectedOption: event.target.value
    // });
    setOnSelected(event.target.value);
  };

  // Get Products from API call
  const saveCart = async (formContent) => {
    console.log({ nameValue });
    let newCartItems = cartItems.map((items) => {
      const item = {
        name: items.name,
        type: items.type,
        paymentMethod: items.paymentMethod,
        image_url: items.image_url,
        price: items.price,
        size: items.variants[0].size,
        flavor: items.variants[0].flavors[0],
        qty: items.qty,
      };
      return item;
    });

    const response = await product.post("/cart", {
      customer: {
        name: formContent.target.elements.firstName.value,
        lastName: formContent.target.elements.lastName.value,
        email: formContent.target.elements.email.value,
        paymentMethod: { onSelected },
        createdDate: Date.now(),
      },
      products: newCartItems,
      totalCost: totalPrice,
    });
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
          </>
        )}
      </div>

      <div className="container">
        <hr />
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Name</label>
            <div className="two fields">
              <div className="field">
                <input type="text" name="firstName" placeholder="First Name" />
              </div>
              <div className="field">
                <input type="text" name="lastName" placeholder="Last Name" />
              </div>
              <div className="field">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={handleEmailChange}
                />
              </div>
            </div>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="creditRadioButton"
              id="creditRadioButton"
              defaultChecked
              value="Credit Card"
              checked={onSelected === "Credit Card"}
              onChange={onValueChange}
            />
            <label className="form-check-label" htmlFor="creditRadioButton">
              Credit Card
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="cashCheckRadioButton"
              id="cashCheckRadioButton"
              value="Cash/Check"
              checked={onSelected === "Cash/Check"}
              onChange={onValueChange}
            />
            <label className="form-check-label" htmlFor="cashCheckRadioButton">
              Cash/Check
            </label>
          </div>
          <div className="container">
            <button disabled={!buttonEnabled} type="submit">
              Checkout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
