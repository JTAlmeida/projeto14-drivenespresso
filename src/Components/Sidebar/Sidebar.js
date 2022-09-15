import React from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import leaveIcon from "../../assets/leave.png";
import logo from "../../assets/logo_sidebar.png";
import { slide as Menu } from "react-burger-menu";

export default () => {
  const { user, setUser } = React.useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      {user ? (
        <Menu>
          <img src={logo} alt="logo" />
          <p>Olá, {user.name}</p>
          <Link to="/" className="menu-item">
            Home
          </Link>
          <Link to="/checkout" className="menu-item">
            Carrinho
          </Link>
          <h4>
            Sair
            <img
              src={leaveIcon}
              alt="leave"
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
            />
          </h4>
        </Menu>
      ) : (
        <Menu>
          <img src={logo} alt="logo" />
          <Link to="/" className="menu-item">
            Home
          </Link>
          <Link to="/sign-up" className="menu-item">
            Cadastre-se
          </Link>
          <Link to="/sign-in" className="menu-item">
            Login
          </Link>
          <Link to="/checkout" className="menu-item">
            Carrinho
          </Link>
        </Menu>
      )}
    </>
  );
};
