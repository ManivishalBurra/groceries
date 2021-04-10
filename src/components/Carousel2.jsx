import React from 'react';
import Items from './Items';
import {buyList} from '../list';


function carousel2(props){
    function createItems(list){
        return <Items 
        key={list.id} 
        image={list.image} 
        order={list.order} 
        buy={list.buy} 
        access={list.access}
        price={list.price}
        addtocart={props.addToCart}
        data={props.data}
        />
    }
    
    return (
    <div class="carousel-main center" id="caro"> 
        <div class="containers center column">
        <h1>Our top picks for you</h1>
            <div class="carousel center multiple-items" id="carousel-slick2">
            {buyList.map(createItems)}
            </div>
        </div>
	</div>	
    );
}

          
export default carousel2;