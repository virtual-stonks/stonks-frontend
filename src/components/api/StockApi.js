import axios from 'axios'

class StockApi {    
    getStockWallet() {
        console.log('executed getStockWallet');
        const url = "http://localhost:5000/api/stock/wallet";
        return axios.get(url, {
            headers: {
                'x-auth-token': `${localStorage.getItem('token')}`
            }
        })
    }

    getTickerlist(){
        console.log('executed getTickerlist');
        const url = "http://localhost:5000/api/stock/tickerlist";
        return axios.get(url, {
            headers: {
                'x-auth-token': `${localStorage.getItem('token')}`
            }
        })
    }

    getStockHolding() {
        console.log('executed getStockHolding');
        const url = "http://localhost:5000/api/stock/holdings";
        return axios.get(url, {
            headers: {
                'x-auth-token': `${localStorage.getItem('token')}`
            }
        })
    }

    getTransactions() {
        console.log('executed getTransactions');
        const url = "http://localhost:5000/api/stock/transactions";
        return axios.get(url, {
            headers: {
                'x-auth-token': `${localStorage.getItem('token')}`
            }
        })
    }

    postStockBuy(qty, price, stockName, stockFullName, image) {
        console.log('executed postStockBuy');
        console.log(qty, price, stockName, image);
        const url = "http://localhost:5000/api/stock/buy";
        // const body = { stockFullName, image }
        return axios.post(url, null, {
            params: {
                qty,
                price,
                stockName,
                image
            },
            headers: {
                'x-auth-token': `${localStorage.getItem('token')}`
            }
        })
    }

    postStockSell(qty, price, stockName, stockFullName, image) {
        console.log('executed postStockSell');
        console.log(qty, price, stockName, image);
        const url = "http://localhost:5000/api/stock/sell";
        return axios.post(url, null, {
            params: {
                qty,
                price,
                stockName,
                image
            },
            headers: {
                'x-auth-token': `${localStorage.getItem('token')}`
            }
        })
    }
}

export default new StockApi()