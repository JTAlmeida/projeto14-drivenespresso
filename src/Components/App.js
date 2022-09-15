import GlobalStyle from "../css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";
import Checkout from "./Checkout/Checkout";
import UserContext from "../context/UserContext";
import { useState } from "react";

function App() {

  const [cardItems, setCardItems]=useState([]);
  const [products, setProducts]= useState([]);
  return (
    <>
    <UserContext.Provider value={{setProducts,products,cardItems,setCardItems}}>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-up" element={<Signup />}></Route>
          <Route path="/sign-in" element={<Signin />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    </>
  );
}

export default App;
