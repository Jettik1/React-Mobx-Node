import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import App from '../App';
import Shop from '../pages/Shop';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = () => {
    const isAuth = true;
    const routesAuthComponents = authRoutes.map((authRoutes) =>
        <Route exact key={authRoutes.path} path={authRoutes.path} element={<authRoutes.component />} /> // ?
    );
    const routesPublicComponents = publicRoutes.map((publicRoutes) =>
        <Route exact key={publicRoutes.path} path={publicRoutes.path} element={<publicRoutes.component />} /> // Деструктаризация не сработала: {path, component} ... element={<component />} не работает??
    )
    return (
            <Routes>
                {isAuth && routesAuthComponents}
                {routesPublicComponents}
            </Routes>
    );
}

export default AppRouter;