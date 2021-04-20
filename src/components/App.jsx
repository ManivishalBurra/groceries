import React, { useContext } from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Subscribe from './Subscribe';
import Carousel2 from './Carousel2';
import Buttons from './Buttons';
import {cartList} from '../cartlist';
import {Cartdata} from './userStatus';
import Cart from './Cart';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';

function App(){
    
    const {data,setData}=useContext(Cartdata);
   
    return(
        <div>
        <Navbar />
        <div className="landing-page center" id="landing">
            <div className="greeting center">
           <h1>Welcome to  <span style={{color:" #65a467"}}>Groceries</span></h1>
           <p>Hello dear customer, ever got irritated on waiting high hours in the line to buy a few things. Well 
           now it is time you can lean back on the chair and just order your items in just one click!!</p>
           <a href="/mart"><button>Let's order &nbsp; <i className="fas fa-arrow-right"></i></button></a>
           </div>
        </div> 
        <Carousel />
        <Subscribe /> 
        <Carousel2/>
        <Cart classname="cart backdrop-blur-white" />
        {/* <Buttons classname="popup" buy="added to cart"/> */}
        {/* <Cart classname="center bill-main backdrop-blur" subclass="billbox" /> */}
        
        </div>
    );
}

export default App;