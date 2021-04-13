import React from 'react';


function Navbar(){
    return(
      
      <nav className="navbar navbar-expand-lg navbar-light fixed-top backdrop-blur">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src="images/fresh.png" alt="" width="auto" height="40" />
    &nbsp; Groceries.me 
    </a>
    <div className="c-search">
    <input size="60" placeholder="search for products..." />
    &nbsp;
    <i className="fas fa-search"></i>
    </div>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{filter:"invert(1)"}}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/mart">Gmart</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    );
}
export default Navbar;