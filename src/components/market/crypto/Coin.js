import React from 'react'
import numeral from "numeral"
const Coin = ({ name, price, symbol, image, priceChange, marketCap }) => {
    return (
        <>
            <tr>
                <td><img src={image} alt="crypto" className="img-responsive crypto-img" /></td>
                <th scope="row">{name}</th>
                <td>{symbol.toUpperCase()}</td>
                <td>$ {numeral(marketCap).format("0.0a")}</td>
                <td>$ {numeral(price).format("0.0a")}</td>
                <td
                    style={{ color: `${priceChange < 0 ? "red" : "green"}` }}
                >
                    {priceChange.toFixed(2)}
                </td>
            </tr>
        </>
    )
}

export default Coin
