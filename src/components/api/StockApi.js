import axios from 'axios'


class StockApi {
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoic2FidWpAZ21haWwuY29tIiwiaWQiOiI2MDZlYWRhZjUxMWI4NTNiZmNjZTg0YjYifSwiaWF0IjoxNjE3OTY3NjI5LCJleHAiOjE2MTgwNTQwMjl9.A3EIPmZocdwWRM-2SH8r33Ta76xi1WJqcSasiMpNRT8";

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

    postStockBuy(qty, price, stockName) {
        console.log('executed postStockBuy');
        console.log(qty, price, stockName);
        const url = "http://localhost:5000/api/stock/buy";
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

    postStockSell(qty, price, stockName) {
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