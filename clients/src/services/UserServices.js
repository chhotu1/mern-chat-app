import http from "../utils/http-common";
import endpoints from "../utils/endpoints";
import StorageService from './StorageService';

const usersList=()=>{
  return http.get(endpoints.user, {headers: {token: StorageService.getAccessToken()}});
}
const addMessage=(data)=>{
  return http.post(endpoints.addMessage,data, {headers: {token: StorageService.getAccessToken()}});
}
const getMessage=(data)=>{
  return http.post(endpoints.getMessage,data, {headers: {token: StorageService.getAccessToken()}});
}

const UserServices = {
    usersList,
    addMessage,
    getMessage
};

export default UserServices;