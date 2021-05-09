import React, { useState, useEffect } from "react";
import decrease from "../assets/images/decrease.jpg";
import increase from "../assets/images/increase.jpg";
import { Card, Button, CardTitle, Badge, Table } from 'reactstrap';

import StockApi from "./api/StockApi"

const History = (props) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    StockApi.getTransactions()
      .then((res) => {
        console.log(res.data);
        setTransactions(res.data.transactionsBucket);
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <div>
      <Table borderless dark>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Time</th>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Type</th>
          </tr>
        </thead>


        {transactions.length > 0 ? transactions.map((trans, idx) => {
          return (
            <tbody>              
              <th scope="row"><img src={trans.image} alt="crypto" className="img-responsive crypto-img" /></th>
              <td>{trans.date}</td>
              <td>{trans.stockName}</td>
              <td>{trans.qty}</td>
              <td>{trans.cost.toFixed(2)}</td>
              <td style={{color: `${trans.isBuy ? "yellow": "red"}`}}>{trans.isBuy ? "BUY" : "SELL"}</td>
              <img
                src={trans.isBuy ? increase : decrease}
                alt="Failed to load"
                style={{
                  verticalAlign: "left",
                  width: "40px",
                  height: "40px",
                }}></img>
            </tbody>
          )
        }) :
          <tbody>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardTitle tag="h5">No transactions to show!</CardTitle>
              <Button>Wow! Such Empty ...</Button>
            </Card>
          </tbody>
        }
      </Table>
    </div>
  );
}

export default History;
