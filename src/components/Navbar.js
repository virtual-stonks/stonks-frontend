import React from 'react'

import { Link } from "react-router-dom"

function Navbar(props) {

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    Dashboard
                </Link>
                <Link className="navbar-brand" to="/">
                    Stocks
                </Link>
                <Link className="navbar-brand" to="/">
                    Holdings
                </Link>
                <Link className="navbar-brand" to="/">
                    Orders
                </Link>
            </nav>
        </div>
    )
}

export default Navbar;