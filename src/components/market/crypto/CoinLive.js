import React from 'react'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CoinLiveData from './CoinLiveData';

const CoinLive = () => {
    const location = useLocation();
    let history = useHistory();

    const [coindata, setCoindata] = useState({});
    let cnt = 0;

    useEffect(() => {
        console.log(location.pathname); // result: '/secondpage'
        console.log(location.state.detail);

        const { name, symbol } = location.state.detail;
        let ws = null;// websocket variable
        let miniTickerString = null;// binance miniticker string

        if (symbol.toLowerCase() != "usdt") {
            miniTickerString = `${symbol.toLowerCase()}usdt@ticker`;
            ws = new WebSocket(`wss://stream.binance.com:9443/ws/${miniTickerString}`);
        }
        else {
            miniTickerString = `${symbol.toLowerCase()}bidr@ticker`;
            ws = new WebSocket(`wss://stream.binance.com:9443/ws/${miniTickerString}`);
        }

        ws.onopen = () => {
            console.log(`Socket connected! to ${miniTickerString}`);
        };

        ws.onmessage = e => {
            const value = JSON.parse(e.data);
            console.log(value);
            setCoindata(value);
        };

        return () => {
            console.log(`Socket disonnected! from ${miniTickerString}`);
            ws.close();
        };

    }, [location]);

    return (

        <div className="container">
            <button
                type="button"
                className="btn btn-outline-light"
                onClick={() => history.push(
                    {
                        pathname: `/`,
                    }
                )}
            >
                Back
            </button>
            <>
                <CoinLiveData data={coindata} />
            </>
        </div>
    )
}

export default CoinLive
