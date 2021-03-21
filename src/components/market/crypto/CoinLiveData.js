import React from 'react'

const CoinLiveData = (props) => {
    const { s, e, c, Q } = props.data;
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{s}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{e}</h6>
                    <p className="card-text">{c}</p>
                    <p className="card-text">{Q}</p>
                </div>
            </div>
        </>
    )
}

export default CoinLiveData
