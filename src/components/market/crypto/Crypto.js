import React, { useState, useEffect } from 'react'
import axios from "axios"
import Coin from './Coin';
import "./Coin.css"
import numeral from "numeral"

const Crypto = () => {
    const [crypto, setCrypto] = useState([]);
    const [direction, setDirection] = useState({
        symbol: "asc",
        name: "asc",
        current_price: "asc",
        price_change_percentage_24h: "asc",
        market_cap: "asc"
    });

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

    const sortBy = (key) => {
        setDirection({
            [key]: direction[key] === "asc" ? "desc" : "asc"
        });

        const sortedData = [].concat(crypto).sort((a, b) => {
            return (a[key] < b[key] ? (direction[key] === "asc" ? -1 : 1) : (direction[key] === "asc" ? 1 : -1));
        });
        console.log(sortedData);
        setCrypto(sortedData);
        console.log(crypto);
    }

    return (
        <div className="container">

            <h1 className='crypto-text'>Search a Crypto</h1>
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="BTC, ETH..."
                    />
                </div>
            </form>
            <table className="table table-striped table-dark table-responsive">
                <thead>
                    <tr>
                        <th scope="col"
                            style={{ color: "#00ff00" }}
                        >Coin</th>
                        <th scope="col"
                            style={{ color: "#00ff00" }}
                        >
                            Name
                                    <i
                                className="fa fa-fw fa-sort"
                                onClick={() => sortBy("name")}
                                style={{ cursor: "pointer" }
                                }
                            />
                        </th>
                        <th scope="col"
                            style={{ color: "#00ff00" }}
                        >
                            Sym
                                <i
                                className="fa fa-fw fa-sort"
                                onClick={() => sortBy("symbol")}
                                style={{ cursor: "pointer" }}
                            />
                        </th>
                        <th scope="col"
                            style={{ color: "#00ff00" }}
                        >
                            MC
                                <i
                                className="fa fa-fw fa-sort"
                                onClick={() => sortBy("market_cap")}
                                style={{ cursor: "pointer" }}
                            />
                        </th>
                        <th scope="col"
                            style={{ color: "#00ff00" }}
                        >
                            Price
                                <i
                                className="fa fa-fw fa-sort"
                                onClick={() => sortBy("current_price")}
                                style={{ cursor: "pointer" }}
                            />
                        </th>
                        <th scope="col"
                            style={{ color: "#00ff00" }}
                        >
                            24h L
                                <i
                                className="fa fa-fw fa-sort"
                                onClick={() => sortBy("low_24h")}
                                style={{ cursor: "pointer" }}
                            />
                        </th>
                        <th scope="col"
                            style={{ color: "#00ff00" }}
                        >
                            24h H
                                <i
                                className="fa fa-fw fa-sort"
                                onClick={() => sortBy("high_24h")}
                                style={{ cursor: "pointer" }}
                            />
                        </th>
                        <th scope="col"
                            style={{ color: "#00ff00" }}
                        >
                            24h change
                                <i
                                className="fa fa-fw fa-sort"
                                onClick={() => sortBy("price_change_percentage_24h")}
                                style={{ cursor: "pointer" }}
                            />
                        </th>
                        <th scope="col"
                            style={{ color: "#00ff00" }}
                        >
                            Traded Volume
                                <i
                                className="fa fa-fw fa-sort"
                                onClick={() => sortBy("total_volume")}
                                style={{ cursor: "pointer" }}
                            />
                        </th>
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
                                marketCap={coin.market_cap}
                                low_24h={coin.low_24h}
                                high_24h={coin.high_24h}
                                total_volume={coin.total_volume}
                            />
                        )
                    })}

                </tbody>
            </table>

        </div >
    )
}

export default Crypto

