import React from 'react';

function Items(props){
    return (
            <div className="center column">
            <div class="items center">
                <img src={props.image} />
            </div>
            <div className="order">
            <button>Add to cart</button>
            </div>
            <div className="order Buy">
            <button>Buy Now</button>
            </div>
            </div>
            );
}
export default Items;