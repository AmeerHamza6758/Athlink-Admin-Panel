import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import LayoutRoutes from "./LayoutRoutes";

const Approute = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<LayoutRoutes />} />
    </Routes>
  );
};

export default Approute;
