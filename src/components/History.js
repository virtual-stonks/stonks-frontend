import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import decrease from "../assets/images/decrease.jpg";
import increase from "../assets/images/increase.jpg";

import StockApi from "./api/StockApi"

const History = (props) => {
  const [transactions, setTransactions] = useState(null);

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
          {console.log(transactions)}
      <Table borderless>
        <thead>
          <tr>
            <th></th>
            <th>Time</th>
            <th>Stock</th>
            <th>Quantity</th>            
            <th>Total Price</th>
            <th>Type</th>
          </tr>
        </thead>

        
        {transactions && transactions.map((trans, idx) => {
          return(
          <tbody>
            <th scope="row"><i class="fas fa-dot-circle"></i></th>
            <td>{trans.date}</td>
            <td>{trans.stockName}</td>
            <td>{trans.qty}</td>
            <td>{trans.cost.toFixed(2)}</td>
            <td>{trans.isBuy ? "BUY": "SELL"}</td>
            <img
              src={trans.isBuy ? increase: decrease}
              alt="Failed to load"
              style={{
                verticalAlign: "left",
                width: "40px",
                height: "40px",
              }}></img>
          </tbody>
          )
        })}
      </Table>
    </div>
  );
}

export default History;
