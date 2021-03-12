import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
    </div>
  );
}

export default App;
