import React from 'react';

function CartQueue(props){
    return (
       <div className="center queue-list">
        <div className="queue-item center">
        <i class="fas fa-braille"></i>
        </div>

        <div className="queue-item center">
            <div className="queue-img">
                <img src="images/strawberry.jpeg"></img>
            </div>
            <div className="center column">
                <p>Strawberry</p>
                <p>10pcs</p>
            </div>
        </div>

        <div className="queue-item center">
            <div>
                <p>149Rs</p>
            </div>
        </div>
        
        <div className="queue-item center">
            <div>
                <button>Delete</button>
            </div>
        </div>

       </div>
    );
}

          
export default CartQueue;