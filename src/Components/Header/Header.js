import { Wrapper, ItemCount } from "./Header.style";
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/iconfinder_cart_353403.svg";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  let locallySavedUserProducts = JSON.parse(localStorage.getItem("userItem"));

  if (locallySavedUserProducts) {
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
        {JSON.parse(localStorage.getItem("userItem")).length > 0 ? (
          <ItemCount>
            {JSON.parse(localStorage.getItem("userItem")).length}
          </ItemCount>
        ) : (
          <></>
        )}
      </Wrapper>
    );
  }

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
