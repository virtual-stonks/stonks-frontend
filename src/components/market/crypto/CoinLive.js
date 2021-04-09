import React from 'react'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Spinner from '../../utils/Spinner';
import CoinLiveData from './CoinLiveData';

const CoinLive = () => {
    const location = useLocation();

    const [coindata, setCoindata] = useState({});
    const [symbolID, setSymbolID] = useState({});
    const [fullName, setFullName] = useState("");
    const [imageID, setimageID] = useState();
    const [loading, setLoading] = useState(true);
    let cnt = 0;

    useEffect(() => {
        console.log(location.pathname); // result: '/secondpage'
        console.log(location.state.detail);

        const { name, symbol, image } = location.state.detail;
        setSymbolID(symbol);
        setimageID(image);
        setFullName(name);
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
            setLoading(false);
        };

        ws.onmessage = e => {
            const value = JSON.parse(e.data);
            setCoindata(value);
        };

        return () => {
            console.log(`Socket disonnected! from ${miniTickerString}`);
            ws.close();
        };

    }, [location]);

    return (
        <>
            { loading ? <Spinner /> : <CoinLiveData data={coindata} symbol={symbolID} image={imageID} fullName={fullName} loading={loading} />}
        </>
    )
}

export default CoinLive
