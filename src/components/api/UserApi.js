import axios from 'axios'


class UserApi {
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoic2FidWoyQGdtYWlsLmNvbSIsImlkIjoiNjA3ZGM2ZGQxYjIyNWMzMTY4ODkzMmYxIn0sImlhdCI6MTYxOTA2NDAzNiwiZXhwIjoxNjE5MTUwNDM2fQ.l9LrdlO4nQ9vNNcNDZLY2sOhlhyirvPGxjC3D3WXX9c";

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