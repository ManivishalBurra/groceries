import React from 'react';
import Items from './Items';
import {lists} from '../list.js';


function createItems(list){
    return <Items 
    key={list.id} 
    image={list.image} 
    order={list.order} 
    buy={list.buy} 
    access={list.access}
    />
}
function carousel(props){
    return (
    <div class="carousel-main center" id="caro"> 
        <div class="containers center column">
        <h1>Shop by category</h1>
            <div class="carousel center multiple-items" id="carousel-slick">
                {lists.map(createItems)}
            </div>
        </div>
	</div>	
    );
}

          
export default carousel;