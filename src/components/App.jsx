import React from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import Carousel from './Carousel';
import Subscribe from './Subscribe';
import Carousel2 from './Carousel2';
import Buttons from './Buttons';
import {cartList} from '../cartlist'
import Cart from './Cart';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';

function App(){
    const [data,setData]=React.useState(cartList);
    function deletion(id){
        setData(data.filter(function( obj ) {
            return obj.id !== id;
        }));
    }
    function addCart(object){
        var size=data.length;
        const addUpdate={
            id:size+1,
            img:object.image,
            price:object.price.toString(),
            itemname:object.order,
            quantity:"1pc",
        }
        data.push(addUpdate);
        deletion(Infinity);
    }
    return(
        <div>
        <Navbar />
        <Landing />
        <Carousel />
        <Subscribe /> 
        <Carousel2 addToCart={addCart} data={data}/>
        <Cart classname="cart backdrop-blur-white" data={data} deletion={deletion} />
        <Buttons classname="popup" buy="added to cart"/>
        <Cart classname="center bill-main backdrop-blur" subclass="billbox" data={data} deletion={deletion} />
        
        </div>
    );
}

export default App;