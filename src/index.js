import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Mart from './components/Mart';
import Pay from './components/Payment'
import {Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom';
const routing = (
  <Router>
    <div>
      
      <Route exact path="/" component={App} />
      <Route path="/mart" component={Mart} />
      <Route path="/pay" component={Pay} /> 
    </div>
  </Router>
)

ReactDOM.render(routing,document.getElementById('root'));

