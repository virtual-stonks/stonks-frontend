import React from "react";

import { Link } from "react-router-dom";

const Navbar = ({isAuth, setIsAuth}) =>  {
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
              <Link className="navbar-brand text-light" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item col">               
              <Link className="navbar-brand text-light" to="/trending">
                Trending
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
              <Link className="navbar-brand text-light" to="/history">
                History
              </Link>
            </li>         
            <li className="nav-item col">
              <Link className="navbar-brand text-light" to="/"
                onClick={() => {
                  localStorage.clear();
                  setIsAuth(false);
                }}
              >
                Logout
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
