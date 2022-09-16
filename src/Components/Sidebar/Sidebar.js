import React from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import leaveIcon from "../../assets/leave.png";
import logo from "../../assets/logo_sidebar.png";
import { slide as Menu } from "react-burger-menu";

export default () => {
  const { user, setUser } = React.useContext(UserContext);
  const navigate = useNavigate();

  let userName;
  if (user.name) {
    userName = user.name.split(" ")[0];
  }

  return (
    <>
      {user ? (
        <Menu>
          <img
            src={logo}
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          />
          <p>Olá, {userName}</p>
          <Link to="/" className="menu-item">
            Home
          </Link>
          <Link to="/checkout" className="menu-item">
            Carrinho
          </Link>
          <h4
            onClick={() => {
              let confirmation = window.confirm(
                "Tem certeza que deseja fazer logoff?"
              );
              if (!confirmation) {
                return;
              }
              localStorage.clear("drivenespresso");
              setUser("");
              navigate("/");
            }}
          >
            Sair
            <img src={leaveIcon} alt="leave" />
          </h4>
        </Menu>
      ) : (
        <Menu>
          <img
            src={logo}
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          />
          <Link to="/" className="menu-item">
            Home
          </Link>
          <Link to="/checkout" className="menu-item">
            Carrinho
          </Link>
          <Link to="/sign-up" className="menu-item">
            Cadastre-se
          </Link>
          <Link to="/sign-in" className="menu-item">
            Login
          </Link>
        </Menu>
      )}
    </>
  );
};
