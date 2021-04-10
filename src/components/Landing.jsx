import React from 'react';


function Landing(){
    return(
        <div className="landing-page center" id="landing">
            <div className="greeting center">
           <h1>Welcome to  <span style={{color:" #65a467"}}>Groceries</span></h1>
           <p>Hello dear customer, ever got irritated on waiting high hours in the line to buy a few things. Well 
           now it is time you can lean back on the chair and just order your items in just one click!!</p>
           <a href="/mart"><button>Let's order &nbsp; <i class="fas fa-arrow-right"></i></button></a>
           </div>
           
        </div> 
    );
}
export default Landing;