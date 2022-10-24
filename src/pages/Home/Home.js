import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import ListClient from "../../components/list-clients/ListClient";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <ListClient />
    </div>
  );
};

export default Home;
