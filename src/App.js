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
    getProducts();
  }, []);

  // Get Products from API call
  const getProducts = async () => {
    const response = await product.get("/items/type", {
      params: {
        searchCriteria: "Amino_Acids",
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
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
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
