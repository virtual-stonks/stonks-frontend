import axios from 'axios'
import {JWT_TOKEN} from "./config"


class UserApi {
    token = JWT_TOKEN;

    getUserDetails() {
        console.log('executed getUserDetails');
        const url = "http://localhost:5000/api/user/userdetails";
        return axios.get(url, {
            headers: {
                'x-auth-token': `${this.token}`
            }
        })
    } 
}

export default new UserApi()