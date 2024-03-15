import React from "react";
import css from "./MainContainer.module.css";
import MainPage from "../HomePage/MainPage/MainPage";

const MainContainer = () => {
  return (
    <div className={css.container}>
      <MainPage />
    </div>
  );
};

export default MainContainer;
