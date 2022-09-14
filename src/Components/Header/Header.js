import { Wrapper } from "./Header.style";
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/iconfinder_cart_353403.svg";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Sidebar />
      <img
        src={logo}
        alt="logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <img
        src={cartIcon}
        alt="cartIcon"
        className="svg"
        onClick={() => {
          navigate("/checkout");
        }}
      />
    </Wrapper>
  );
}
