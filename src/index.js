import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Mart from './components/Mart';
import Pay from './components/Payment';
import Martauth from './components/Martauth';
import MartauthLogin from './components/MartauthLogin';
import Account from './components/Account'
import {Route, BrowserRouter as Router} from 'react-router-dom';
const routing = (
  <Router>
    <div>
      
      <Route exact path="/" component={App} />
      <Route path="/martauth" component={Martauth} />
      <Route path="/martauthLogin" component={MartauthLogin} />
      <Route path="/mart" component={Mart} />
      <Route path="/pay" component={Pay} /> 
      <Route path="/account" component={Account} /> 
    </div>
  </Router>
)

ReactDOM.render(routing,document.getElementById('root'));

