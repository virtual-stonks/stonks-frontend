import "./App.css";
<<<<<<< HEAD
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
=======
import React from "react";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
>>>>>>> main
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Crypto from "./components/market/crypto/Crypto";
import CoinLive from "./components/market/crypto/CoinLive";
import Holdings from "./components/holdings/Holdings";
<<<<<<< HEAD
=======
import History from "./components/History";
>>>>>>> main

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/market/crypto" component={Crypto} />
        <Route exact path="/live/crypto" component={CoinLive} />
        <Route exact path="/holdings" component={Holdings} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/" component={Dashboard} />
<<<<<<< HEAD
=======
        <Route exact path="/history" component={History} />
>>>>>>> main
      </Switch>
    </div>
  );
}

export default App;
