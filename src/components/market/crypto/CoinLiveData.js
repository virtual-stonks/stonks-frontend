import React from 'react'

const CoinLiveData = (props) => {
    const { e: eventType, c, Q } = props.data;
    const { name, symbol } = props.symbol;
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name?.toUpperCase()} ({symbol?.toUpperCase()})</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{tickertype}</h6>
                    <p className="card-text">{c}</p>
                    <p className="card-text">{Q}</p>
                </div>
            </div>
        </div>
    )
}

export default CoinLiveData
