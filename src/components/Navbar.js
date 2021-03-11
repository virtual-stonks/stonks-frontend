import React from 'react'

import { Link } from "react-router-dom"

function Navbar(props) {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"wheat"}}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav row">
                        <li className="nav-item col">
                            <Link className="navbar-brand" to="/">
                                Profile
                            </Link>
                        </li>
                        <li className="nav-item col">
                            <Link className="navbar-brand" to="/">
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item col">
                            <Link className="navbar-brand" to="/">
                                Market
                            </Link>
                        </li>
                        <li className="nav-item col">
                            <Link className="navbar-brand" to="/">
                                Holdings
                            </Link>
                        </li>
                        <li className="nav-item col">
                            <Link className="navbar-brand" to="/">
                                Wallet
                            </Link>
                        </li>

                    </ul>
                </div>
                <h7 className="mt-2" style={{fontFamily:"fantasy"}}>VIRTUAL STONKS</h7>
            </nav>

        </div>
    )
}

export default Navbar;