import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const registerUser = () => {
    navigate("/register");
  };

  return (
    <div className="header-container">
      <h5>Clientes</h5>
      <button className="btn" onClick={registerUser}>
        Novo cliente
      </button>
    </div>
  );
};

export default Header;
