import axios from 'axios'
import {JWT_TOKEN} from "./config"


class AuthApi {
    token = JWT_TOKEN;

    signUpUser(userInfo) {
        console.log(userInfo);
        console.log('executed signUpUser');
        const url = "http://localhost:5000/api/user/signup";
        return axios.post(url, userInfo);

    }
    
    signInUser(userInfo) {
        console.log('executed signInUser');
        const url = "http://localhost:5000/api/user/signin";
        return axios.post(url, userInfo);
    }
}

export default new AuthApi()