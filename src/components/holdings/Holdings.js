import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import StockApi from "../api/StockApi"

const Holdings = (props) => {

    const [holdings, setHoldings] = useState([]);

    useEffect(() => {
        StockApi.getStockHolding()
            .then((res) => {
                setHoldings(res.data.stocksBucket)
            })
            .catch((err) => console.log(err));
    }, [])

    return (

        <Table striped>
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
                </tr>
            </thead>
            <tbody>
                {holdings.length && holdings.map((instr, idx) => {
                    const { investedVal, ltp, qty, stockName } = instr;
                    let n_investedVal = Number(investedVal); n_investedVal = n_investedVal.toFixed(3);
                    let n_qty = Number(qty); n_qty = n_qty.toFixed(3).toString();
                    let n_ltp = Number(ltp); n_ltp = n_ltp.toFixed(3);

                    let n_abp = n_investedVal / n_qty; n_abp = n_abp.toFixed(2);
                    let n_curVal = n_qty * n_ltp; n_curVal = n_curVal.toFixed(2);
                    let n_pl = n_curVal - n_investedVal; n_pl = n_pl.toFixed(2);
                    let n_pp = n_pl / n_investedVal * 100.0; n_pp = n_pp.toFixed(2);
                    return <tr key={idx}>
                        <th scope="row">{stockName}</th>
                        <td>{n_qty}</td>
                        <td>{n_abp}</td>
                        <td>{n_ltp}</td>
                        <td>{n_curVal}</td>
                        <td>{n_pl}</td>
                        <td>{n_pp}%</td>
                    </tr>
                })}

            </tbody>
        </Table>
    );
}

export default Holdings;