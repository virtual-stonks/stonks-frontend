import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import StockApi from "../api/StockApi"
import { useHistory } from "react-router-dom";
import Analysis from './Analysis';

const Holdings = (props) => {
    let history = useHistory();
    const [holdings, setHoldings] = useState([]);   

    let analysisdata = {
        total_inv: 0,
        cur_val: 0,
        pl: 0
    }

    useEffect(() => {
        StockApi.getStockHolding()
            .then((res) => {
                setHoldings(res.data.stocksBucket)
            })
            .catch((err) => console.log(err));
    }, [])     
    

    return (
        <>
        <Table striped dark>
            {console.log(holdings)}
            <thead>
                <tr>
                    <th>Instrument</th>
                    <th>Qty</th>
                    <th>Avg Cost</th>
                    <th>LTP</th>
                    <th>Cur Val</th>
                    <th>P&L</th>
                    <th>Net Profit</th>
                    <th>Trade</th>
                </tr>
            </thead>
            <tbody>
                {holdings.length > 0 ? holdings.map((instr, idx) => {
                    const { investedVal, ltp, qty, stockName } = instr;
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

                    return <tr key={idx}>
                        <th scope="row">{stockName}</th>
                        <td>{n_qty}</td>
                        <td>{n_abp}</td>
                        <td>{n_ltp}</td>
                        <td>{n_curVal}</td>
                        <td style={{ color: `${n_pl < 0 ? "red" : "#07ff00"}` }}>{n_pl}</td>
                        <td style={{ color: `${n_pp < 0 ? "red" : "#07ff00"}` }}>{n_pp}%</td>
                        {/* <td style={{ color: "#000000" }}><i
                            className="fas fa-fw fa-hand-holding-usd"
                        /></td> */}
                        <td>
                            <button
                                type="button"
                                className="btn "
                                onClick={() => history.push(
                                    {
                                        pathname: `/live/crypto`,
                                        state: { detail: { name: stockName, symbol: stockName, image: stockName } }
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
                    : <p> No stocks to show!!</p>
                }
            </tbody>
        </Table>
        
        <Analysis analysisdata={analysisdata} />
        </>
    );
}

export default Holdings;