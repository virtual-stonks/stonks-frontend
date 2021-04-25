import axios from 'axios'

class StockApi {
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoic2FidWoyQGdtYWlsLmNvbSIsImlkIjoiNjA3ZGM2ZGQxYjIyNWMzMTY4ODkzMmYxIn0sImlhdCI6MTYxODg1NjE1NiwiZXhwIjoxNjE4OTQyNTU2fQ.va4OSSO1tK3DXd0MwG5A-CZ38YbosDhKgJ_2QWncxpo";

    getStockWallet() {
        console.log('executed getStockWallet');
        const url = "http://localhost:5000/api/stock/wallet";
        return axios.get(url, {
            headers: {
                'x-auth-token': `${this.token}`
            }
        })
    }

    getStockHolding() {
        console.log('executed getStockHolding');
        const url = "http://localhost:5000/api/stock/holdings";
        return axios.get(url, {
            headers: {
                'x-auth-token': `${this.token}`
            }
        })
    }

    postStockBuy(qty, price, stockName, stockFullName, image) {
        console.log('executed postStockBuy');
        console.log(qty, price, stockName);
        const url = "http://localhost:5000/api/stock/buy";
        const body = { stockFullName, image }
        return axios.post(url, null, {
            params: {
                qty,
                price,
                stockName,
            },
            headers: {
                'x-auth-token': `${this.token}`
            }
        })
    }

    postStockSell(qty, price, stockName, stockFullName, image) {
        console.log('executed postStockSell');
        console.log(qty, price, stockName);
        const url = "http://localhost:5000/api/stock/sell";
        return axios.post(url, null, {
            params: {
                qty,
                price,
                stockName,
            },
            headers: {
                'x-auth-token': `${this.token}`
            }
        })
    }
}

export default new StockApi()