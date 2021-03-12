import './App.css';
import React from 'react'
import { Route } from "react-router-dom"

import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Profile} />
      <Route exact path="/Dashboard" component={Dashboard} />
    </div>
  )
}

export default App;
