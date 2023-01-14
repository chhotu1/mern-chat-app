import { Navigate, Outlet } from "react-router-dom";
import screenEndPoints from "../utils/screenEndPoints";
const ProtectedRoutes = ({ isLoggedIn }) => {
  return isLoggedIn!=='' && isLoggedIn!==null ? <Outlet /> : <Navigate to={screenEndPoints.login} />;
};
export default ProtectedRoutes;