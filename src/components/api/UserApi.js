import axios from 'axios'

class UserApi {    
    backend = process.env.REACT_APP_BACKEND;
    getUserDetails() {
        console.log('executed getUserDetails');
        const url = `${this.backend}/api/user/userdetails`;
        return axios.get(url, {
            headers: {
                'x-auth-token': `${localStorage.getItem('token')}`
            }
        })
    } 
}

export default new UserApi()