import axios from 'axios'

class ExternalApi {    
    getCoinslist() {
        console.log('executed getCoinslist');
        const url = "http://localhost:5000/api/external/coinslist";
        return axios.get(url, {
            headers: {
                'x-auth-token': `${localStorage.getItem('token')}`
            }
        })
    } 
}

export default new ExternalApi()