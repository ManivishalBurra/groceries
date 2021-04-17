import axios from 'axios';
import React from 'react';


function Navbar(){
  const [loginStatus,setLoginStatus]=React.useState(false);
  const [credentials,setCredentials]=React.useState("");
  axios.get("/loginStatus").then((res)=>{
    setLoginStatus(res.data);
  });
  
  axios.get("/accountCreds").then((res)=>{
    setCredentials(res.data);
  })
    return(
      
      <nav className="navbar navbar-expand-lg navbar-light fixed-top backdrop-blur">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src="images/fresh.png" alt="" width="auto" height="40" />
    &nbsp; Groceries.me 
    </a>
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
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/martauth">Gmart</a>
        </li>
        {
        loginStatus &&  
        <li className="nav-item center">
          <a className="nav-link center" href="/account">Account&nbsp;<img src={credentials.image} width="auto" style={{borderRadius:"100%",height:"25px"}} /> </a>
        </li>
        }
        {
        !loginStatus &&  
        <li className="nav-item">
          <a className="nav-link" href="/martauth">Login</a>
        </li>
        }
      </ul>
    </div>
  </div>
</nav>


    );
}
export default Navbar;