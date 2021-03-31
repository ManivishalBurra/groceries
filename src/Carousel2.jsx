import React from 'react';
import Items from './Items';
function carousel2(props){
    return (
    <div class="carousel-main center" id="caro"> 
        <div class="containers">
        <h1>Our top picks for you</h1>
            <div class="carousel center multiple-items" id="carousel-slick2">
                <Items image="images/strawberry.jpeg" order="Rs. 120" buy="Add to cart" access="1"/>
                <Items image="images/banana.jpeg" order="Rs.60" buy="Add to cart" access="1"/>
                <Items image="images/kiwi.jpeg" order="Rs. 30" buy="Add to cart" access='1'/>
                <Items image="images/watermelon.jpeg" order="Rs. 50" buy="Add to cart" access="1"/>
            </div>
        </div>
	</div>	
    );
}

          
export default carousel2;