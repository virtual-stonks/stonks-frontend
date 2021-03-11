import React, { useState, useEffect } from 'react'
import axios from "axios"
import Coin from './Coin';
import "./Coin.css"

const Crypto = () => {
    const [crypto, setCrypto] = useState([]);

    useEffect(() => {
        axios
            .get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false'
            )
            .then(res => {
                setCrypto(res.data);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }, []);

    const handleChange = (e) => {
    }

    return (
        <div className="row">
            <div className="col-sm-5">
                <h1 className='crypto-text'>Search a Crypto</h1>
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="BTC, ETH..."
                            onChange={handleChange}
                        />
                    </div>
                </form>
                <table className="table table-striped table-dark table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">Coin</th>
                            <th scope="col">Name</th>
                            <th scope="col">Symbol</th>
                            <th scope="col">LTP</th>
                            <th scope="col">%</th>
                        </tr>
                    </thead>
                    <tbody>
                        {crypto.map(coin => {
                            return (
                                <Coin
                                    key={coin.id}
                                    name={coin.name}
                                    price={coin.current_price}
                                    symbol={coin.symbol}
                                    image={coin.image}
                                    priceChange={coin.price_change_percentage_24h}
                                />
                            )
                        })}

                    </tbody>
                </table>
            </div>
            <div className="col-sm-7">

            </div>
        </div>
    )
}

export default Crypto

