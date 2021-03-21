import React, { useEffect, useState } from 'react';
import { createChart } from 'lightweight-charts';
import axios from 'axios';

const TradingChartArea = (props) => {
    const ref = React.useRef();
    const [historicalData, setHistoricalData] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        const symbol = props.symbol.toUpperCase();
        let unixEpoch = new Date().getTime();
        let binance_line_string = `https://api.binance.com/api/v3/klines?symbol=${symbol}USDT&interval=1d&endTime=${unixEpoch}&limit=1000`;
        if (symbol === "USDT")
            binance_line_string = `https://api.binance.com/api/v3/klines?symbol=${symbol}BIDR&interval=1d&endTime=${unixEpoch}&limit=1000`;
        axios.get(binance_line_string)
            .then((res) => {
                let hData = []
                for (let i = 0; i < res.data.length; i++) {
                    let hObj = {
                        time: res.data[i][0] / 1000,
                        value: res.data[i][4]
                    };

                    hData.push(hObj);
                }

                setHistoricalData(hData);
                setIsUpdated(true);
                console.log(historicalData)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        const chart = createChart(ref.current, {
            width: ref.current.clientWidth,
            height: ref.current.clientHeight,
            rightPriceScale: {
                scaleMargins: {
                    top: 0.1,
                    bottom: 0.2,
                },
            },
            layout: {
                backgroundColor: '#2B2B43',
                textColor: 'white',
                lineColor: 'rgba(32, 226, 47, 1)',
            },
            watermark: {
                visible: true,
                fontSize: 24,
                horzAlign: 'top',
                vertAlign: 'left',
                color: 'rgba(32, 226, 47, 1)',
                text: `${props.name.toUpperCase()}(${props.symbol.toUpperCase()})`,
            },
            crosshair: {
                color: 'rgba(32, 226, 47, 1)',
            },
            grid: {
                vertLines: {
                    color: '#2B2B43',
                },
                horzLines: {
                    color: '#363C4E',
                },
            },
        });



        let areaSeries = chart.addAreaSeries({
            topColor: 'rgba(32, 226, 47, 056)',
            bottomColor: 'rgba(32, 226, 47, 0.04)',
            lineColor: 'rgba(32, 226, 47, 1)',
            lineWidth: 2,
            symbol: 'AAPL',
        });

        console.log('hi');
        areaSeries.setData(historicalData);

        let ws = null;// websocket variable
        let miniTickerString = null;// binance miniticker string
        if (props.symbol.toLowerCase() != "usdt") {
            miniTickerString = `${props.symbol.toLowerCase()}usdt@kline_1d`;
            ws = new WebSocket(`wss://stream.binance.com:9443/ws/${miniTickerString}`);
        }
        else {
            miniTickerString = `${props.symbol.toLowerCase()}bidr@kline_1d`;
            ws = new WebSocket(`wss://stream.binance.com:9443/ws/${miniTickerString}`);
        }

        ws.onopen = () => {
            console.log(`Socket connected! to ${miniTickerString}`);
        };

        ws.onmessage = e => {
            const value = JSON.parse(e.data);
            console.log(value)
            const {
                t: unixTime,
                c: lastPrice,
            } = value.k;

            const latestCandle = {
                time: unixTime / 1000,
                value: lastPrice,
            }

            areaSeries.update(latestCandle);
        };

        // onUnMount
        return () => {
            console.log(`Socket disonnected! from ${miniTickerString}`);
            ws.close();
            chart.remove()
        }

    }, [historicalData]);


    return (
        <>
            <div className="col-sm-12 col-md-8 text-white" ref={ref} />
        </>
    );
}

export default TradingChartArea;