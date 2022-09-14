import GlobalStyle from "../css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-up" element={<Home />}></Route>
          <Route path="/sign-in" element={<Home />}></Route>
          <Route path="/checkout" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
