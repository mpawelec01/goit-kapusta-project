import React from "react";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import MainPage from "./pages/MainPage/MainPage";
import { Report } from "./pages/Report/Report";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/report" element={<Report />} />
    </Routes>
  );
};

export default App;
