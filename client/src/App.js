import React,{useState, useEffect} from 'react';
// import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './Login';
import Home from './pages/Home';
import Employess from './pages/Employees';
import Stock from './pages/Stock';
import About from './pages/About';

function App() {
 
  return (
      <Router>
        <Switch>
        <div className='App'>
          <Route exact path="/" component={Login}/>
          <Route path='/home' component={Home}/> 
          <Route path='/employees' component={Employess}/> 
          <Route path='/stock' component={Stock}/> 
          <Route path='/about' component={About}/> 
        </div>
        </Switch>
      </Router>
  );
}

export default App;
