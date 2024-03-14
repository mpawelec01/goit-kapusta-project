import React from "react";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Home from "../pages/Home/Home";

const App = () => {
  return (
    <Routes>
      <Route  path="/" element={<Home/>} />
    </Routes>
    
  )
};

export default App;
