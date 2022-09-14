import GlobalStyle from "../css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";
import Checkout from "./Checkout/Checkout";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-up" element={<Signup />}></Route>
          <Route path="/sign-in" element={<Signin />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
