import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import product from "./api/product";
import { useState, useEffect } from "react";

function App() {
  // const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  //Make API call when function is initiated
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

  // const onNavBarProtienClick = (e) => {
  //   console.log(e.target.value);
  //   getProducts("Protein");
  // };

  const onNavBarClick = (e) => {
    console.log(e.target.value);
    getProducts(e.target.value);
  };

  // const onNavBarAminoAcidsClick = () => {
  //   getProducts("Amino Acids");
  // };

  return (
    <div className="App">
      <Header
        countCartItems={cartItems.length}
        onNavBarClick={onNavBarClick}
      ></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default App;
