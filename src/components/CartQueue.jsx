import React from 'react';


function CartQueue(props){
    
    function deletion(){
        props.onDelete(props.id);
    }
    return (
       <div className={"queue"+props.id+" center queue-list"}>
        <div className="queue-item center">
        <i class="fas fa-braille"></i>
        </div>

        <div className="queue-item center">
            <div className="queue-img">
                <img src={props.img}></img>
            </div>
            <div className="center column">
                <p>{props.itemname}</p>
                <p>10pcs</p>
            </div>
        </div>

        <div className="queue-item center">
            <div>
                <p>{props.price}Rs</p>
            </div>
        </div>
        
        <div className="queue-item center">
            <div>
                <button name={props.id} onClick={deletion}>Delete</button>
            </div>
        </div>

       </div>
    );
}

          
export default CartQueue;