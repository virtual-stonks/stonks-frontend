import axios from 'axios'


class StockApi {
    getStockHolding() {
        console.log('executed getStockHolding');
        const url = "http://localhost:5000/api/stock/holdings";
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoic2FidWpAZ21haWwuY29tIiwiaWQiOiI2MDZlYWRhZjUxMWI4NTNiZmNjZTg0YjYifSwiaWF0IjoxNjE3ODY2MTU5LCJleHAiOjE2MTc5NTI1NTl9.pxV8v6RZe9SQvqygr63eKHpeUBabIup9-dxFLX18dMA";
        return axios.get(url, {
            headers: {
                'x-auth-token': `${token}`
            }
        })
    }

    postStockBuy(qty, price, stockName) {
        console.log('executed postStockBuy');
        console.log(qty, price, stockName);
        const url = "http://localhost:5000/api/stock/buy";
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoic2FidWpAZ21haWwuY29tIiwiaWQiOiI2MDZlYWRhZjUxMWI4NTNiZmNjZTg0YjYifSwiaWF0IjoxNjE3ODY2MTU5LCJleHAiOjE2MTc5NTI1NTl9.pxV8v6RZe9SQvqygr63eKHpeUBabIup9-dxFLX18dMA";
        return axios.post(url, null, {
            params: {
                qty,
                price,
                stockName,
            },
            headers: {
                'x-auth-token': `${token}`
            }
        })
    }

    postStockSell(qty, price, stockName) {
        console.log('executed postStockSell');
        console.log(qty, price, stockName);
        const url = "http://localhost:5000/api/stock/sell";
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoic2FidWpAZ21haWwuY29tIiwiaWQiOiI2MDZlYWRhZjUxMWI4NTNiZmNjZTg0YjYifSwiaWF0IjoxNjE3ODY2MTU5LCJleHAiOjE2MTc5NTI1NTl9.pxV8v6RZe9SQvqygr63eKHpeUBabIup9-dxFLX18dMA";
        return axios.post(url, null, {
            params: {
                qty,
                price,
                stockName,
            },
            headers: {
                'x-auth-token': `${token}`
            }
        })
    }
}

export default new StockApi()