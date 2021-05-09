import axios from 'axios'

class UserApi {    
    getUserDetails() {
        console.log('executed getUserDetails');
        const url = "http://localhost:5000/api/user/userdetails";
        return axios.get(url, {
            headers: {
                'x-auth-token': `${localStorage.getItem('token')}`
            }
        })
    } 
}

export default new UserApi()