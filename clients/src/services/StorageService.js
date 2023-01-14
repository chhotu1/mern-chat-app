const StorageService ={
    setAccessToken:(value) =>{
        localStorage.setItem('AccessToken',value);
    },
    getAccessToken:() =>{
        return localStorage.getItem('AccessToken');
    },
    removeAccessToken:() =>{
        localStorage.removeItem('AccessToken');
    },
}

export default StorageService;