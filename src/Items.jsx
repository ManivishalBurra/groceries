import React from 'react';
import Buttons from './Buttons'
function Items(props){
    const x=Number(props.access);
    
    
    
    return (

            <div className="center column">
            <div class="items center">
                <img src={props.image} />
            </div>
            
            <Buttons classname="order order-abs center stat-order" buy={props.order}/> 
            
            {props.access=='1' ?
            <div className="center Boi">
            <Buttons classname="Buy2 Buy order center Coi" buy={props.buy}/> 
            <Buttons classname="Buy order center Coi" buy="Buy now"/></div>
            :<Buttons classname="Buy order center" buy={props.buy}/> 
            }
            
            </div>
            );
}
export default Items;