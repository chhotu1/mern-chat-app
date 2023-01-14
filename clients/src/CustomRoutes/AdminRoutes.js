
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from './ProtectedRoutes';
import StorageService from '../services/StorageService';
import RouteName from './RouteName';
import Home from './../pages/Home'


const AdminRoutes = () => {
    return (
        <>
          
            <Routes>
                <Route element={<ProtectedRoutes isLoggedIn={StorageService.getAccessToken()} />}>
                    <Route exact={true} path={RouteName.HOME} element={<Home />} />
                </Route>
            </Routes>
           
        </>
    )
}





export default AdminRoutes;
