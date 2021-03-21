import React, { useEffect, useState } from 'react';
import { createChart } from 'lightweight-charts';
import axios from 'axios';

const TradingChart = (props) => {
    const ref = React.useRef();
    const [historicalData, setHistoricalData] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        const symbol = props.symbol.toUpperCase();
        let binance_line_string = `https://api.binance.com/api/v3/klines?symbol=${symbol}USDT&interval=1d&endTime=1616332081903&limit=1000`;
        if (symbol === "USDT")
            binance_line_string = `https://api.binance.com/api/v3/klines?symbol=${symbol}BIDR&interval=1d&endTime=1616332081903&limit=1000`;
        axios.get(binance_line_string)
            .then((res) => {
                let hData = []
                for (let i = 0; i < res.data.length; i++) {
                    let hObj = {
                        time: res.data[i][0] / 1000,
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
        });

        var candleSeries = chart.addCandlestickSeries({
            upColor: 'rgba(255, 144, 0, 1)',
            downColor: '#000',
            borderDownColor: 'rgba(255, 144, 0, 1)',
            borderUpColor: 'rgba(255, 144, 0, 1)',
            wickDownColor: 'rgba(255, 144, 0, 1)',
            wickUpColor: 'rgba(255, 144, 0, 1)',
        });

        candleSeries.setData(historicalData);

        return () => {
            chart.remove()
        }

    }, [historicalData]);

    return (
        <>
            <div className="col-sm-12 col-md-6 text-white" ref={ref} />
        </>
    );
}

export default TradingChart;