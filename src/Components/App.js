import GlobalStyle from "../css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";
import Checkout from "./Checkout/Checkout";
import UserContext from "../context/UserContext";
import ProductsContext from "../context/ProductsContext";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [cardItems, setCardItems] = useState([]);
  const [products, setProducts] = useState([]);
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
        value={{ setProducts, products, cardItems, setCardItems }}
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
