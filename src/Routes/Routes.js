import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Client from "../pages/ClientDetails/Client";

const RoutesSistem = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/client:id" element={<Client />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesSistem;
