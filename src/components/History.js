import React from "react";
import { Table } from "reactstrap";
import decrease from "../assets/images/decrease.jpg";
import increase from "../assets/images/increase.jpg";

function History(props) {
  return (
    <div>
      <Table borderless>
        <thead>
          <tr>
            <th>#</th>
            <th>Time</th>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <th scope="row">1</th>
          <td>23/04/21</td>
          <td>BTC</td>
          <td>10</td>
          <td>9730</td>
          <img
            src={decrease}
            alt="Failed to load"
            style={{
              verticalAlign: "left",
              width: "40px",
              height: "40px",
            }}></img>
        </tbody>
        <tbody>
          <th scope="row">2</th>
          <td>22/04/21</td>
          <td>BTC</td>
          <td>100</td>
          <td>10000</td>
          <img
            src={increase}
            alt="Failed to load"
            style={{
              verticalAlign: "left",
              width: "40px",
              height: "40px",
            }}></img>
        </tbody>
      </Table>
    </div>
  );
}

export default History;
