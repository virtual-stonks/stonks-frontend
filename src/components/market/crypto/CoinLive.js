import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const CoinLive = () => {
    const location = useLocation();
    let history = useHistory();

    const socketCall = ({ name, symbol }) => {


    }

    useEffect(() => {
        console.log(location.pathname); // result: '/secondpage'
        console.log(location.state.detail);

        const { name, symbol } = location.state.detail;
        let ws = null;// websocket variable
        let miniTickerString = null;// binance miniticker string

        if (symbol.toLowerCase() != "usdt") {
            miniTickerString = `${symbol.toLowerCase()}usdt@miniTicker`;
            ws = new WebSocket(`wss://stream.binance.com:9443/ws/${miniTickerString}`);
        }
        else {
            miniTickerString = `${symbol.toLowerCase()}bidr@miniTicker`;
            ws = new WebSocket(`wss://stream.binance.com:9443/ws/${miniTickerString}`);
        }

        ws.onopen = () => {
            console.log(`Socket connected! to ${miniTickerString}`);
        };

        ws.onmessage = e => {
            const value = e.data;
            console.log(e.data);
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
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </>
        </div>
    )
}

export default CoinLive
