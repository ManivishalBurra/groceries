import React,{useContext} from 'react';
import {Cartdata} from './userStatus';

function CartQueue(props){
    
    const {data,setData}=useContext(Cartdata);
    function HandleDelete(){
        setData(data.filter(function(obj){
         return obj.id!== props.id;    
        }));
    }
    
    return (
       <div className={"queue"+props.id+" center queue-list"}>
        <div className="queue-item center">
        <i className="fas fa-braille"></i>
        </div>

        <div className="queue-item center">
            <div className="queue-img">
                <img src={props.img} alt="cartimage"></img>
            </div>
            <div className="center column">
                <p>{props.itemname}</p>
                <p>{props.quantity}pcs</p>
            </div>
        </div>

        <div className="queue-item center">
            <div>
                <p>{props.price}Rs</p>
            </div>
        </div>
        
        <div className="queue-item center">
            <div>
                <button name={props.id} onClick={HandleDelete} >Delete</button>
            </div>
        </div>

       </div>
    );
}

          
export default CartQueue;