import axios from 'axios'
import {JWT_TOKEN} from "./config"

class ExternalApi {
    token = JWT_TOKEN;

    getCoinslist() {
        console.log('executed getCoinslist');
        const url = "http://localhost:5000/api/external/coinslist";
        return axios.get(url, {
            headers: {
                'x-auth-token': `${this.token}`
            }
        })
    } 
}

export default new ExternalApi()