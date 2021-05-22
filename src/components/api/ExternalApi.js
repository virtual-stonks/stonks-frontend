import axios from 'axios'

class ExternalApi {   
    backend = process.env.REACT_APP_BACKEND;

    getCoinslist() {
        console.log('executed getCoinslist');
        const url = `${this.backend}/api/external/coinslist`;
        return axios.get(url, {
            headers: {
                'x-auth-token': `${localStorage.getItem('token')}`
            }
        })
    } 

    getTrendingList() {
        console.log('executed getTrendinglist');
        const url = `${this.backend}/api/external/trending`;
        return axios.get(url, {
            headers: {
                'x-auth-token': `${localStorage.getItem('token')}`
            }
        })
    }
}

export default new ExternalApi()