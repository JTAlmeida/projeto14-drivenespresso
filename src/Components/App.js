import GlobalStyle from "../css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Home/Home";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";
import Checkout from "./checkout/Checkout.js";
import UserContext from "../context/UserContext";
import ProductsContext from "../context/ProductsContext";
import Payment from "./Payment/Payment";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsWihtNewQuantity, setproductsWihtNewQuantity] = useState([]);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState("");
  const [paymentString,setpaymentString]=useState('');
  let [userInfoForms, setUserInfoForms] = useState({
    nome: "",
    telefone: "",
    CEP: "",
    endereço: "",
    númeroResidência: "",
});
const [number,setNumber]= useState(0);


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
          number,
          setNumber,

        }}
      >
        <UserContext.Provider value={{ user, setUser,paymentString,setpaymentString,userInfoForms,setUserInfoForms }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/sign-up" element={<Signup />}></Route>
              <Route path="/sign-in" element={<Signin />}></Route>
              <Route path="/checkout" element={<Checkout/>}></Route>
              <Route path="/payment" element ={<Payment/>}></Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </ProductsContext.Provider>
    </>
  );
}

export default App;
