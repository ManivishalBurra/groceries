import React from 'react';
import Buttons from './Buttons'
function Shoppingitems(props){
    
    function click(){
        var x=document.querySelectorAll(".bill-main");
        x[0].style.display="flex";
        addCart();  
      }
    function addCart(){
      var x=document.querySelectorAll(".popup a button");
      x[0].style.visibility="visible"; 
      setTimeout(function(){
        x[0].style.visibility="hidden"; 
      }, 200);
      props.addtocart(props);
    }
    return (
            <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="center column item-card" id={props.classes} >
            <div class="items center">
                <img src={props.image} />
                <Buttons classname="order order-abs center stat-order shopbutton" buy={props.order} /> 
            </div>
            
            <div className="center Boi">
            <div className="Buy2 Buy order center Coi addcart">
            <a href={props.pathref}><button name={props.image} value={props.order} onClick={addCart }>{props.buy}</button></a>
            </div>
            <div className="Buy order center Coi buynow">
            <a href={props.pathref}><button name={props.image} value={props.order} onClick={click} >Buy now</button></a>
            </div>
            </div>
            </div>
            </div>
            );
}
export default Shoppingitems;