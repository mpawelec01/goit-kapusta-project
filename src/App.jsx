import React from "react";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { lazy, useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Home } from "./pages/Home/Home";
import { MainPage } from "./pages/MainPage/MainPage";
import { Report } from "./pages/Report/Report";
import Layout from "./components/Layout/Layout";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import { useAuth } from "./hooks/useAuth";
import { refreshUser } from "./redux/auth/operations";
import { selectToken } from "./redux/auth/selectors";
import Incomes from "./pages/Incomes/Incomes";
import { Loader } from "./components/Loader/Loader";

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const token = useSelector(selectToken);

  // useEffect(() => {
  //   if (!token) {
  //     return;
  //   }
  //   dispatch(refreshUser());
  // }, [dispatch, token]);
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
      </Routes>
    
    </Suspense>
  );
};

export default App;
