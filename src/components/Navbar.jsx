import React from 'react';


function Navbar(){
    return(
      
      <nav class="navbar navbar-expand-lg navbar-light fixed-top backdrop-blur">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src="images/fresh.png" alt="" width="auto" height="40" />
    &nbsp; Groceries.me 
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="c-search">
    <input size="60" placeholder="search for products..." />
    &nbsp;
    <i class="fas fa-search"></i>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/mart">Gmart</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="/login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    );
}
export default Navbar;