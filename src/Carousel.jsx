import React from 'react';
import Items from './Items';
function carousel(props){
    return (
    <div class="carousel-main center" id="caro"> 
        <div class="containers">
        <h1>Our top picks for you</h1>
            <div class="carousel center ">
                <Items image="https://www.esquireme.com/public/styles/full_img/public/images/2016/08/25/Burger.jpg?itok=UeqqTuYy" />
                <Items image="https://www.rnz.co.nz/assets/news_crops/60885/eight_col_32917696_l.jpg?1531180823" />
                <Items image="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636"/>
                <Items image="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2016/10/foodJointPainRelief-142336977-770x533-1.jpg" />
            </div>
        </div>
	</div>	
    );
}

          
export default carousel;