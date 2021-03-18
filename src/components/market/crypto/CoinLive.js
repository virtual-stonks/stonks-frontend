import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const CoinLive = () => {
    const location = useLocation();
    let history = useHistory();

    useEffect(() => {
        console.log(location.pathname); // result: '/secondpage'
        console.log(location);
    }, [location]);

    return (
        <div className="container">
            <button
                type="button"
                className="btn btn-outline-light"
                onClick={() => history.push(
                    {
                        pathname: `/`,
                    }
                )}
            >
                Back
            </button>
            <>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </>
        </div>
    )
}

export default CoinLive
