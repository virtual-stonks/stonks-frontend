import React from "react";

import { Link } from "react-router-dom";

function Navbar(props) {
  console.log(localStorage.getItem("auth-token"));
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#0c2d1c" }}>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="true"
          aria-label="Toggle navigation">
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav row">
            <li className="nav-item col">
              <Link className="navbar-brand text-light" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item col">
              <Link className="navbar-brand text-light" to="/">
                Dashboard
              </Link>
            </li>
            <li className="nav-item col">
              <Link className="navbar-brand text-light" to="/market/crypto">
                Market
              </Link>
            </li>
            <li className="nav-item col">
              <Link className="navbar-brand text-light" to="/holdings">
                Holdings
              </Link>
            </li>
            <li className="nav-item col">
              {
                localStorage.getItem("auth-token") ?
                  <Link className="navbar-brand text-light" onClick={localStorage.removeItem("auth-token")} >
                    Logout
                  </Link> :
                  <Link className="navbar-brand text-light" to="/signup">
                    Signup
                  </Link>
              }

              <Link className="navbar-brand text-light" to="/history">
                History
              </Link>
            </li>
            <li className="nav-item col">
              <Link className="navbar-brand text-light" to="/signup">
                Signup
              </Link>
            </li>
          </ul>
        </div>
        <p className="mt-2 text-light" style={{ fontFamily: "fantasy" }}>
          VIRTUAL STONKS
        </p>
      </nav>
    </div>
  );
}

export default Navbar;
