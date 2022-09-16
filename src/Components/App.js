import GlobalStyle from "../css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useEffect, useState, useContext } from "react";
import Home from "./Home/Home";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";
import Checkout from "./checkout/Checkout.js";
import UserContext from "../context/UserContext";
import ProductsContext from "../context/ProductsContext";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsWihtNewQuantity, setproductsWihtNewQuantity] = useState([]);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState("");

  const auth = JSON.parse(localStorage.getItem("drivenespresso"));

  useEffect(() => {
    if (auth && user === "") {
      setUser(JSON.parse(localStorage.getItem("drivenespresso")));
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <ProductsContext.Provider
        value={{
          setProducts,
          products,
          cartItems,
          setCartItems,
          productsWihtNewQuantity,
          setproductsWihtNewQuantity,
          total,
          setTotal,
        }}
      >
        <UserContext.Provider value={{ user, setUser }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/sign-up" element={<Signup />}></Route>
              <Route path="/sign-in" element={<Signin />}></Route>
              <Route path="/checkout" element={<Checkout />}></Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </ProductsContext.Provider>
    </>
  );
}

export default App;
