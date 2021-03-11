import React from 'react'

const Coin = ({ name, price, symbol, image, priceChange }) => {
    return (
        <>
            <tr>
                <td><img src={image} alt="crypto" className="img-responsive crypto-img" /></td>
                <th scope="row">{name}</th>
                <td>{symbol.toUpperCase()}</td>
                <td>${price}</td>
                <td>{priceChange.toFixed(2)}</td>
            </tr>
        </>
    )
}

export default Coin
