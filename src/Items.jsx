import React from 'react';

function Items(props){
    return (
            <div className="center column">
            <div class="items center">
                <img src={props.image} />
            </div>
            <div className="order center">
            <button>{props.order}</button>
            </div>
            <div className="order Buy center">
            <button>{props.buy}</button>
            </div>
            </div>
            );
}
export default Items;