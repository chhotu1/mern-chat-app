import http from "../utils/http-common";
import endpoints from "../utils/endpoints";
import StorageService from './StorageService';

const login=(data)=>{
  return http.post(endpoints.login,data);
}

const register=(data)=>{
  return http.post(endpoints.register,data, {headers: {token: StorageService.getAccessToken()}});
}

const AuthService = {
 login,
 register
};

export default AuthService;