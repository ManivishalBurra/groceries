import React from 'react';
import ShoppingItems from './shoppingItems';
import shopList from '../shoppinglist';
function shoplists(list){
    return <ShoppingItems
        key={list.id} 
        image={list.image} 
        order={list.order} 
        buy={list.buy} 
        access={list.access}
        classes="shopping-thumbnail"
    />
}


function shopping(){

    

    return(
        <div className="center shopping-main" id="contain">
            <div className="center row" id="contain-shop">
            {shopList.map(shoplists)}
            </div>
        </div>
    );
}

export default shopping;