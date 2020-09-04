import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';


import index from './pages/index';


function App() {

    return (
    <Router>
      <Switch>
        <Route exact path="/" component={index} />

      </Switch>
    </Router>


    );
  
}


export default App;
