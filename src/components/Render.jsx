import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Mart from './Mart';
import Pay from './Payment';
import Martauth from './Martauth';
import MartauthLogin from './MartauthLogin';
import Account from './Account';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {UserContext,UserCallBack,Cartdata} from './userStatus';
import {UserEmail} from './userEmail';
import InnerMart from './InnerMart';

function Render(){
  const [loginStatus,setLoginStatus] = React.useState(false);
  const [userEmail,setUserEmail] = React.useState("");
  const [callback,setCallback] = React.useState("");
  const [data,setData] = React.useState([]);
    return(
  <Router>
    <div>
    <UserContext.Provider value={{loginStatus,setLoginStatus}}>
      <UserEmail.Provider value={{userEmail,setUserEmail}}>
      <UserCallBack.Provider value={{callback,setCallback}}>
      <Cartdata.Provider value={{data,setData}}>
      <Route exact path="/" component={App} />
      <Route path="/martauth" component={Martauth} />
      <Route path="/martauthLogin" component={MartauthLogin} />
      <Route path="/mart" component={Mart} />
      <Route path="/pay" component={Pay} /> 
      <Route path="/account" component={Account} /> 
      <Route path="/innermart" component={InnerMart} /> 
      </Cartdata.Provider>
      </UserCallBack.Provider>
      </UserEmail.Provider>
    </UserContext.Provider>
    </div>
  </Router>
    );
}
export default Render;



