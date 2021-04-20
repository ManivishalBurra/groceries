import React from 'react';
import Buttons from './Buttons';
import {useHistory} from "react-router-dom";
function Items(props){
    const history = useHistory();
    function click(){
        history.push("/mart");
      }
    function addCart(){
      history.push("/mart");
    }
    return (

            <div className="center column item-card" id={props.classes} >
            <div className="items center">
                <img src={props.image} alt="items.jpg"/>
                <Buttons classname="order order-abs center stat-order shopbutton" buy={props.order} pathref="/mart"/> 
            </div>
            
            
            {props.access==='1' ?
            <div className="center Boi">
            <div className="Buy2 Buy order center Coi addcart">
            <a href={props.pathref}><button onClick={addCart} >{props.buy}</button></a>
            </div>
            <div className="Buy order center Coi buynow">
            <a href={props.pathref}><button onClick={click} >Buy now</button></a>
            </div>
            </div>
            :<Buttons classname="Buy order center" buy={props.buy} pathref="/mart"/> 
            }
            
            </div>
            );
}
export default Items;