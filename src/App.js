import './App.css';
import React from 'react'
import { Route, Switch } from "react-router-dom"

import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Crypto from './components/market/crypto/Crypto';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Switch>               
        {/* <Route exact path="/market/crypto" component={Crypto} /> */}
        <Route exact path="/" component={Crypto} />
      </Switch>
    </div>
  )
}

export default App;
