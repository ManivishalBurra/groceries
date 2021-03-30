import React from 'react';
import Items from './Items';
function carousel2(props){
    return (
    <div class="carousel-main center" id="caro"> 
        <div class="containers">
        <h1>Our top picks for you</h1>
            <div class="carousel center multiple-items" id="carousel-slick">
                <Items image="images/strawberry.jpeg" order="Add to cart" buy="Buy now" />
                <Items image="images/banana.jpeg" order="Add to cart" buy="Buy now" />
                <Items image="images/kiwi.jpeg" order="Add to cart" buy="Buy now" />
                <Items image="images/watermelon.jpeg" order="Add to cart" buy="Buy now" />
            </div>
        </div>
	</div>	
    );
}

          
export default carousel2;