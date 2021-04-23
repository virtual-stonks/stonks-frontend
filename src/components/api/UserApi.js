import axios from 'axios'


class UserApi {
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoic2FidWoyQGdtYWlsLmNvbSIsImlkIjoiNjA3ZGM2ZGQxYjIyNWMzMTY4ODkzMmYxIn0sImlhdCI6MTYxOTE5MTM5NywiZXhwIjoxNjE5Mjc3Nzk3fQ.9eqpLUDTBt3Z8Q5UUzl0VJHm9Wc9Qg5fgEOQZYHYB68";

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