import "./App.css";
import React, { useEffect, useState } from "react";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Crypto from "./components/market/crypto/Crypto";
import CoinLive from "./components/market/crypto/CoinLive";
import Holdings from "./components/holdings/Holdings";
import History from "./components/History";
import SignIn from "./components/auth/Signin";

const App = () =>  {
  const[isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('token') === null)
      setIsAuth(false);
    else
      setIsAuth(true);
  }, [])
  return (
    <div className="App">

      { isAuth && <Navbar isAuth={isAuth} setIsAuth={setIsAuth} /> }
      <Switch>              
        <Route exact path="/login" component={() => <Signin isAuth={isAuth} setIsAuth={setIsAuth} />} />
        <Route exact path="/market/crypto" component={Crypto} />
        <Route exact path="/live/crypto" component={CoinLive} />
        <Route exact path="/holdings" component={Holdings} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/history" component={History} />
        <Route exact path="/" component={() => <Signup isAuth={isAuth} setIsAuth={setIsAuth} />} />
        {/* // 404 */}
        <Redirect to='/'/>
      </Switch>
    </div>
  );
}

export default App;
