import React from 'react'
import { Route, Routes } from "react-router-dom";
import RouteName from './RouteName';
import AuthRoutes from './AuthRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import StorageService from '../services/StorageService';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';

const CustomRoutes = () => {
    return (
        <Routes>
            <Route element={<AuthRoutes isLoggedIn={StorageService.getAccessToken()} />}>
                <Route path={RouteName.LOGIN} name="login" element={<Login />} />
                <Route path={RouteName.REGISTER} name="register" element={<Register />} />
            </Route>
            
            <Route element={<ProtectedRoutes isLoggedIn={StorageService.getAccessToken()} />}>
            <Route exact={true} path={RouteName.HOME} element={<Home />} />
            </Route>
        </Routes>
    )
}

export default CustomRoutes
