import React from 'react'
import numeral from "numeral"
import { useHistory } from "react-router-dom";

const Coin = (props) => {
    const { name, price, symbol, image, priceChange, marketCap, low_24h, high_24h, total_volume } = props;
    let history = useHistory();
    return (
        <>
            <tr>
                <td><img src={image} alt="crypto" className="img-responsive crypto-img" /></td>
                <th scope="row">{name}</th>
                <td>{symbol.toUpperCase()}</td>
                <td>$ {numeral(marketCap).format("0.0a")}</td>
                <td>$ {numeral(price).format("0.0a")}</td>
                <td>$ {numeral(low_24h).format("0.0a")}</td>
                <td>$ {numeral(high_24h).format("0.0a")}</td>
                <td
                    style={{ color: `${priceChange < 0 ? "red" : "#00ff00"}` }}
                >
                    {priceChange.toFixed(2)}
                    <i
                        className={`${priceChange < 0 ? "fa fa-fw fa-sort-desc text-danger" : "fa fa-fw fa-sort-asc text-success"}`}
                    />
                </td>
                <td> {numeral(total_volume).format("0.0a")}</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-outline-light"
                        onClick={() => history.push(
                            {
                                pathname: `/live/crypto`,
                                state: { detail: { name, symbol, image } }
                            }
                        )}
                    >
                        <i class="fas fa-money-check-alt" style={{ color: "#00ff00" }} ></i>
                    </button></td>
            </tr>
        </>
    )
}

export default Coin
