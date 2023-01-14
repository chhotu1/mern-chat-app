import { Navigate, Outlet } from "react-router-dom";
import screenEndPoints from "../utils/screenEndPoints";
const AuthRoutes = ({ isLoggedIn }) => {
  return !isLoggedIn || isLoggedIn==='' || isLoggedIn===null ? <Outlet /> : <Navigate to={screenEndPoints.home} />;
};
export default AuthRoutes;