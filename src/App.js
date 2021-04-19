import './App.css';
import React from 'react';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import { Route, Switch } from "react-router-dom"

import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Crypto from './components/market/crypto/Crypto';
import CoinLive from './components/market/crypto/CoinLive';
import Holdings from './components/holdings/Holdings';

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
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
