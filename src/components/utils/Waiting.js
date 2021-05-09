import React from 'react'

const Waiting = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col m-2">
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="spinner-grow text-danger" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div className="card-body">
                            <h4 className="card-text">Waiting for the server...</h4>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

export default Waiting
