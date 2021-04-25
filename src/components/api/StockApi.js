import axios from 'axios'
import {JWT_TOKEN} from "./config"

class StockApi {
    token = JWT_TOKEN;

    getStockWallet() {
        console.log('executed getStockWallet');
        const url = "http://localhost:5000/api/stock/wallet";
        return axios.get(url, {
            headers: {
                'x-auth-token': `${this.token}`
            }
        })
    }

    getTickerlist(){
        console.log('executed getTickerlist');
        const url = "http://localhost:5000/api/stock/tickerlist";
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

    getTransactions() {
        console.log('executed getTransactions');
        const url = "http://localhost:5000/api/stock/transactions";
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