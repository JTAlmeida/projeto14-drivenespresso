import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export default () => {
  return (
    <Menu>
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
  );
};
