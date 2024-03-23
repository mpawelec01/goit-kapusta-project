import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import MainContainer from "../MainContainer/MainContainer";

const Layout = () => {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
};

export default Layout;
