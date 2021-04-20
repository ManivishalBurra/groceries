import axios from 'axios';
import React,{useContext, useEffect} from 'react';
import { Link } from "react-router-dom";
import {UserContext} from './userStatus';
import {UserEmail} from './userEmail';
function Navbar(){
  // const [loginStatus,setLoginStatus]=React.useState(false);
  const [credentials,setCredentials]=React.useState("");
  var {loginStatus,setLoginStatus} = useContext(UserContext);
  const {userEmail,setUserEmail} = useContext(UserEmail);

useEffect(()=>{
  axios.post("http://localhost:9000/getcreds",{
    email:userEmail,
}).then(res=>{
  setCredentials(res.data);
})
},loginStatus);

    return(
      
      <nav className="navbar navbar-expand-lg navbar-light fixed-top backdrop-blur">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/"><img src="images/fresh.png" alt="" width="auto" height="40" />
    &nbsp; Groceries.me </Link>
    {loginStatus &&
    <div className="c-search">
    <input size="60" placeholder="search for products..." />
    &nbsp;
    <i className="fas fa-search"></i>
    </div>
    }
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{filter:"invert(1)"}}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/martauth">Gmart</Link>
        </li>
        {
        loginStatus &&  
        <li className="nav-item center">
          <Link className="nav-link center" to="/account">Account&nbsp;<img src={credentials.image} width="auto" style={{borderRadius:"100%",height:"25px"}} /> </Link>
        </li>
        }
        {
        !loginStatus &&  
        <li className="nav-item">
          <Link className="nav-link" to="/martauth">Login</Link>
        </li>
        }
      </ul>
    </div>
  </div>
</nav>


    );
}
export default Navbar;