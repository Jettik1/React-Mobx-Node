import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Context } from "..";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";

const AppRouter = () => {
  const { user } = useContext(Context);
  const routesAuthComponents = authRoutes.map((authRoutes) => (
    <Route
      exact
      key={authRoutes.path}
      path={authRoutes.path}
      element={<authRoutes.Component />}
    />
  ));
  const routesPublicComponents = publicRoutes.map(({ path, Component }) => (
    <Route exact key={path} path={path} element={<Component />} />
  ));
  return (
    <Routes>
      {true && routesAuthComponents}
      {routesPublicComponents}
      <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;
