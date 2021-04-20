import React,{useEffect,useState} from 'react';
import ShoppingItems from './shoppingItems';
// import shopList from '../shoppinglist';
import axios from 'axios';

function Shopping(props){

    const [shopList,setshopList]=useState([]);

    useEffect(()=>{
        axios.get('/martListData').then((res)=>{
            setshopList(res.data);
            console.log(shopList);
        });
    },[]);

    function shoplists(list){
        return <ShoppingItems
            key={list._id} 
            image={list.image} 
            order={list.order} 
            buy={list.buy} 
            price={list.price}
            quantity={list.quantity}
            access={list.access}
            classes="shopping-thumbnail"
            
            
        />
    }
    
    

    return(
        <div className=" shopping-main" id="contain">
            <div className="row" id="contain-shop">
            {shopList.length>0 &&
            shopList.map(shoplists)
            }
            </div>
        </div>
    );
}

export default Shopping;