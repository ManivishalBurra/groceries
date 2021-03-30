import React from 'react';
import Items from './Items';
function carousel(props){
    return (
    <div class="carousel-main center" id="caro"> 
        <div class="containers">
        <h1>Shop by category</h1>
            <div class="carousel center multiple-items" id="carousel-slick">
                <Items image="images/pineapple.jpeg" order="Fruits" buy="Visit now" />
                <Items image="images/potato.jpeg" order="vegetables" buy="Visit now"/>
                <Items image="https://i.ndtvimg.com/i/2015-06/milk_625x350_71433146093.jpg" order="Diary" buy="Visit now"/>
                <Items image="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/pepsico_660_102918073810_032519052623.jpg" order="Beverages" buy="Visit now"/>
                <Items image="https://foodresearchlab.com/wp-content/uploads/2020/06/ff4.jpg" order="Bakery" buy="Visit now"/>
                <Items image="https://mk0fabrikbrandsfni4m.kinstacdn.com/wp-content/uploads/Brand-Extension-5.jpg" order="Daily needs" buy="Visit now"/>
            </div>
        </div>
	</div>	
    );
}

          
export default carousel;