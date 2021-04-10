import React from 'react';
import ShoppingItems from './shoppingItems';
import shopList from '../shoppinglist';

function shopping(props){

    function shoplists(list){
        return <ShoppingItems
            key={list.id} 
            image={list.image} 
            order={list.order} 
            buy={list.buy} 
            price={list.price}
            quantity={list.quantity}
            access={list.access}
            classes="shopping-thumbnail"
            addtocart={props.addToCart}
            data={props.data}
        />
    }
    
    

    return(
        <div className="center shopping-main" id="contain">
            <div className="row" id="contain-shop">
            {shopList.map(shoplists)}
            </div>
        </div>
    );
}

export default shopping;