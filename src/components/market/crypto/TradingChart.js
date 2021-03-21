import React, { useEffect, useState } from 'react';
import { createChart } from 'lightweight-charts';
import axios from 'axios';

const TradingChart = (props) => {
    const ref = React.useRef();
    const [historicalData, setHistoricalData] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        const symbol = props.symbol.toUpperCase();
        let unixEpoch = new Date().getTime();
        let binance_line_string = `https://api.binance.com/api/v3/klines?symbol=${symbol}USDT&interval=1m&endTime=${unixEpoch}&limit=1000`;
        if (symbol === "USDT")
            binance_line_string = `https://api.binance.com/api/v3/klines?symbol=${symbol}BIDR&interval=1m&endTime=${unixEpoch}&limit=1000`;
        axios.get(binance_line_string)
            .then((res) => {
                let hData = []
                for (let i = 0; i < res.data.length; i++) {
                    let hObj = {
                        time: res.data[i][0],
                        open: res.data[i][1],
                        high: res.data[i][2],
                        low: res.data[i][3],
                        close: res.data[i][4]
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
            layout: {
                backgroundColor: '#253248',
                textColor: 'rgba(255, 255, 255, 0.9)',
            },
            crosshair: {
                vertLine: {
                    color: 'white',
                    width: 0.1,
                    style: 1,
                    visible: true,
                    labelVisible: false,
                },
                horzLine: {
                    color: 'white',
                    width: 0.1,
                    style: 1,
                    visible: true,
                    labelVisible: true,
                },
                mode: 1,
            },
            grid: {
                vertLines: {
                    color: '#334158',
                },
                horzLines: {
                    color: '#334158',
                },
            },
            priceScale: {
                borderColor: '#485c7b',
            },
            timeScale: {
                borderColor: '#485c7b',
            },
            watermark: {
                color: 'white',
                visible: true,
                text: `${props.symbol.toUpperCase()}`,
                fontSize: 24,
                horzAlign: 'left',
                vertAlign: 'top',
            },
        });



        let candleSeries = chart.addCandlestickSeries({
            upColor: '#00ff00',
            downColor: 'rgb(195, 41, 41)',
            borderDownColor: 'rgb(195, 41, 41)',
            borderUpColor: '#00ff00',
            wickDownColor: 'rgb(195, 41, 41)',
            wickUpColor: '#00ff00',
        });

        console.log('hi');
        candleSeries.setData(historicalData);

        let ws = null;// websocket variable
        let miniTickerString = null;// binance miniticker string
        if (props.symbol.toLowerCase() != "usdt") {
            miniTickerString = `${props.symbol.toLowerCase()}usdt@kline_1m`;
            ws = new WebSocket(`wss://stream.binance.com:9443/ws/${miniTickerString}`);
        }
        else {
            miniTickerString = `${props.symbol.toLowerCase()}bidr@kline_1m`;
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
                o: openPrice,
                h: highPrice,
                l: lowPrice,
            } = value.k;

            const latestCandle = {
                time: unixTime,
                open: openPrice,
                close: lastPrice,
                low: lowPrice,
                high: highPrice
            }

            candleSeries.update(latestCandle);
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

export default TradingChart;