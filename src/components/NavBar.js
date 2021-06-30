import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Basket from "./Basket";
import HomePage from "./HomePage";
import product from "../api/product";
import ProductsPage from "./ProductsPage";
import AppLogin from "./AppLogin";
import AppSignUp from "./AppSignUp";
import localStorage from "local-storage";

export default function NavBar(props) {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [text, setText] = useState("Login");

  // Make API call when function is initiated
  useEffect(() => {
    getProducts("Protein");
  }, []);

  // Get Products from API call
  const getProducts = async (product_type) => {
    const response = await product.get("/product/type", {
      params: {
        searchCriteria: product_type,
      },
    });
    setProducts(response.data);
  };
  const onAdd = (product, size, flavour, price) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (!exist) {
      const sizeSelected = product.variants.filter((a) => a.size === size);
      const flavourSelected = sizeSelected[0].flavors.filter(
        (a) => a === flavour
      );
      sizeSelected[0]["flavors"] = [flavourSelected[0]];
      product["variants"] = [sizeSelected[0]];
      product["price"] = price;
    }
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

  const changeText = (text) => {
    setText("Logged In");
    // this.setState({ text });
  };

  const requireAuth = (nextState, replace) => {
    if (!localStorage.get("user")) {
      replace({
        pathname: "/home",
      });
    }
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src="https://redemptionfitnesswi.com/wp-content/uploads/2020/10/Redemption-Fitness-Logo-long-web.png"
              alt=""
              width="300"
              height="75"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  Cart {""}
                  {cartItems.length ? (
                    <button className="badge">{cartItems.length}</button>
                  ) : (
                    ""
                  )}
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div>
              <Link to="/login">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    changeText("newtext");
                  }}
                  type="submit"
                >
                  {text}
                </button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-outline-success">SignUp</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomePage title="Icon click" onEnter={requireAuth} />}
        />
        <Route
          exact
          path="/home"
          render={() => <HomePage onEnter={requireAuth} />}
        />
        <Route exact path="/login" render={() => <AppLogin />} />
        <Route exact path="/signup" render={() => <AppSignUp />} />
        <Route
          path="/products"
          render={(props) => (
            <ProductsPage
              onAdd={onAdd}
              products={products}
              getProducts={getProducts}
            />
          )}
        />
        <Route
          path="/cart"
          render={(props) => (
            <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
          )}
        />
      </Switch>
    </Router>
  );
}
