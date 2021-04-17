import React,{useEffect,useState} from 'react';
import ShoppingItems from './shoppingItems';
// import shopList from '../shoppinglist';
import axios from 'axios';

function Shopping(props){

    const [shopList,setshopList]=useState([]);
    useEffect(()=>{
        axios.get('https://pacific-coast-95024.herokuapp.com/cartData').then((res)=>{
            setshopList(res.data);
        });
    })

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

export default Shopping;