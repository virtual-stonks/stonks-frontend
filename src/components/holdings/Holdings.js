import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import StockApi from "../api/StockApi"
import { useHistory } from "react-router-dom";
import Analysis from './Analysis';
import { Card, Button, CardTitle, Badge } from 'reactstrap';

const Holdings = (props) => {
    let history = useHistory();
    const [holdings, setHoldings] = useState([]);
    const [stocklist, setStocklist] = useState([]);
    const [loaded, setIsloaded] = useState(false);
    const [investedValprev, setInvestedValprev] = useState(0);

    let analysisdata = {
        total_inv: 0,
        cur_val: 0,
        pl: 0
    }

    const handleMessage = (msg) => {
        const stream = msg.s;
        let ltp = Number(msg.c);

        let qty = document.getElementById(`streams_${stream}_qty`).innerText;
        qty = Number(qty);

        let cur_val = Number(qty * ltp);

        let inv_val = document.getElementById(`streams_${stream}_invval`).innerText;
        inv_val = Number(inv_val);

        let pl = (cur_val - inv_val);
        let plp = pl / inv_val * 100.0;

        let old_curr_val = document.getElementById(`streams_${stream}_currval`).innerText;
        old_curr_val = Number(old_curr_val);

        let vvv = Number(investedValprev) + Number(cur_val - old_curr_val);

        // console.log(analysisdata.cur_val);
        // console.log(investedValprev)
        document.getElementById(`streams_${stream}`).innerText = ltp.toFixed(3);
        document.getElementById(`streams_${stream}_currval`).innerText = cur_val.toFixed(3);

        if (pl < 0){
            document.getElementById(`streams_${stream}_pl`).style.color = "red";            
        }else{
            document.getElementById(`streams_${stream}_pl`).style.color = "#07ff00";
        }
        document.getElementById(`streams_${stream}_pl`).innerText = pl.toFixed(3);

        if (plp < 0){
            document.getElementById(`streams_${stream}_plp`).style.color = "red";            
        }else{
            document.getElementById(`streams_${stream}_plp`).style.color = "#07ff00";
        }

        document.getElementById(`streams_${stream}_plp`).innerText = plp.toFixed(3) + "%";

        // document.getElementById(`holdings_currval_total`).innerText = vvv.toFixed(3); 
        // document.getElementById(`holdings_pl_total`).innerText = (Number(analysisdata.pl) + Number(cur_val - old_curr_val)).toFixed(3); 
    }

    useEffect(() => {
        StockApi.getStockHolding()
            .then((res) => {
                setHoldings(res.data.stocksBucket)
                let tot = 0;
                res.data.stocksBucket.forEach(stock => {
                    tot += stock.qty * stock.ltp;
                });

                setInvestedValprev(tot);

                setIsloaded(true);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        let ws = null;// websocket variable

        StockApi.getTickerlist()
            .then((res) => {
                setStocklist(res.data)
                let streams = res.data;
                ws = new WebSocket("wss://stream.binance.com:9443/ws/" + streams.join('/'));

                ws.onopen = () => {
                    console.log(`Socket connected! to Binance`);
                };

                ws.onmessage = (evt) => {
                    try {
                        let msgs = JSON.parse(evt.data);
                        if (Array.isArray(msgs)) {
                            for (let msg of msgs) {
                                handleMessage(msg);
                            }
                        } else {
                            handleMessage(msgs)
                        }
                    } catch (e) {
                        console.log('Unknown message: ' + evt.data, e);
                    }
                }

            })
            .catch((err) => console.log(err));

        return () => {
            console.log(`Socket disonnected! from Binance`);
            if(ws != null)
                ws.close();
        };

    }, []);

    if (loaded)
        return (
            <>
                <Table striped dark>
                    {console.log(holdings)}
                    {console.log('hi', stocklist)}
                    <thead>
                        <tr>
                            <th>Coin</th>
                            <th>Instrument</th>
                            <th>Qty</th>
                            <th>Avg Cost</th>
                            <th className="text-warning">LTP
                            <i
                                    className="fa fas fa-sync p-2"
                                    onClick={() => console.log('click')}
                                    style={{ cursor: "pointer" }}
                                />
                            </th>
                            <th>Inv Val</th>
                            <th>Cur Val</th>
                            <th>P&L</th>
                            <th>Net Profit</th>
                            <th>Trade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {holdings.length > 0 ? holdings.map((instr, idx) => {
                            const { investedVal, ltp, qty, stockName, image } = instr;
                            let n_investedVal = Number(investedVal); n_investedVal = n_investedVal.toFixed(3);
                            let n_qty = Number(qty); n_qty = n_qty.toFixed(2);
                            let n_ltp = Number(ltp); n_ltp = n_ltp.toFixed(2);

                            let n_abp = n_investedVal / n_qty; n_abp = n_abp.toFixed(2);
                            let n_curVal = n_qty * n_ltp; n_curVal = n_curVal.toFixed(2);
                            let n_pl = n_curVal - n_investedVal; n_pl = n_pl.toFixed(2);
                            let n_pp = n_pl / n_investedVal * 100.0; n_pp = n_pp.toFixed(2);

                            analysisdata.total_inv += Number(n_investedVal);
                            analysisdata.cur_val += Number(n_curVal);
                            analysisdata.pl += Number(n_pl);

                            const tickerstring = "streams_" + stockName.toUpperCase() + "USDT";
                            return <tr key={idx}>
                                <th scope="row"><img src={image} alt="crypto" className="img-responsive crypto-img" /></th>
                                <th scope="row">{stockName}</th>
                                <td id={tickerstring + "_qty"}>{n_qty}</td>
                                <td>{n_abp}</td>
                                <td id={tickerstring} className="text-warning">{n_ltp}</td>
                                <td id={tickerstring + "_invval"}>{n_investedVal}</td>
                                <td id={tickerstring + "_currval"}>{n_curVal}</td>
                                <td id={tickerstring + "_pl"} style={{ color: `${n_pl < 0 ? "red" : "#07ff00"}` }} >{n_pl}</td>
                                <td id={tickerstring + "_plp"} style={{ color: `${n_pp < 0 ? "red" : "#07ff00"}` }}>{n_pp}%</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn "
                                        onClick={() => history.push(
                                            {
                                                pathname: `/live/crypto`,
                                                state: { detail: { name: stockName, symbol: stockName, image} }
                                            }
                                        )}
                                    >
                                        <i
                                            className="fas fa-fw fa-hand-holding-usd text-warning"
                                        />
                                    </button>
                                </td>
                            </tr>

                        })
                            : <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                <CardTitle tag="h5">No stocks to show!</CardTitle>
                                <Button>Wow! Such Empty ...</Button>
                            </Card>
                        }
                    </tbody>
                </Table>

                {/* { holdings.length > 0 ? < Analysis analysisdata={analysisdata} /> : <> </>} */}
            </>
        );

    else
        return <> Wow! such empty </>
}

export default Holdings;