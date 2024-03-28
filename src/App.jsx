import React, { useEffect, Suspense } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Home } from "./pages/Home/Home";
import { MainPage } from "./pages/MainPage/MainPage";
import { Report } from "./pages/Report/Report";
import Layout from "./components/Layout/Layout";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import { useAuth } from "./hooks/useAuth";
import { refreshUser, setToken } from "./redux/auth/operations"; // Ensure you have a setToken action
import { selectToken } from "./redux/auth/selectors";
import Incomes from "./pages/Incomes/Incomes";
import { Loader } from "./components/Loader/Loader";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isRefreshing } = useAuth();
  const storedToken = useSelector(selectToken);

  // Extract token from URL and store it if not already in Redux state
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");

    if (tokenFromUrl && !storedToken) {
      localStorage.setItem("authToken", tokenFromUrl); // Store token in localStorage
      dispatch(setToken(tokenFromUrl)); // Update Redux store with the new token
      dispatch(refreshUser()); // Refresh user info with the new token

      navigate("/main", { replace: true }); // Clean up URL
    }
  }, [dispatch, navigate, storedToken]);

  useEffect(() => {
    if (!storedToken) {
      return;
    }
    dispatch(refreshUser());
  }, [dispatch, storedToken]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <RestrictedRoute redirectTo="/main" component={<Home />} />
            }
          />
          <Route
            path="/main"
            element={<PrivateRoute redirectTo="/" component={<MainPage />} />}
          />
          <Route
            path="/main/incomes"
            element={<PrivateRoute component={<Incomes />} />}
          />
          <Route
            path="/report"
            element={<PrivateRoute redirectTo="/" component={<Report />} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
