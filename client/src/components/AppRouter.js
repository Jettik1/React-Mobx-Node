import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import App from '../App';
import Shop from '../pages/Shop';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = () => {
    const isAuth = true;
    const routesAuthComponents = authRoutes.map((authRoutes) =>
        <Route exact key={authRoutes.path} path={authRoutes.path} element={<authRoutes.Component />} /> // Деструктаризация не сработала: {path, component} ... element={<component />} не работает??
    );
    const routesPublicComponents = publicRoutes.map(({path, Component}) =>
        <Route exact key={path} path={path} element={<Component />} /> 
    )
    return (
            <Routes>
                {isAuth && routesAuthComponents}
                {routesPublicComponents}
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
    );
}

export default AppRouter;