import axios from 'axios'

class AuthApi {    
    backend = process.env.REACT_APP_BACKEND;

    signUpUser(userInfo) {
        console.log(userInfo);
        console.log('executed signUpUser');
        const url = `${this.backend}/api/user/signup`;
        return axios.post(url, userInfo);

    }
    
    signInUser(userInfo) {
        console.log('executed signInUser');
        const url = `${this.backend}/api/user/signin`;
        return axios.post(url, userInfo);
    }
}

export default new AuthApi()