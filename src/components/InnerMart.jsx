import React, { useContext } from 'react';
import Navbar from './Navbar';
import Depth from './DepthSearch';
import Cart from './Cart'
import {UserCallBack,Cartdata} from './userStatus';
function InnerMart(){
  
    function shoplists(list){
        console.log(list);
        return <Depth
            key={list._id} 
            image={list.image} 
            order={list.order} 
            price={list.price}
            quantity={list.quantity}
            location={list.location}
            id={list._id}
            page="innermart"
         />
    }
    
    const {callback,setCallBack} = useContext(UserCallBack);
    return (
     <div>
      <Navbar/>
      <div className="innermart-main" >
       {callback.map(shoplists)}
      </div>
      <Cart classname="cart backdrop-blur-white"/>
      <Cart classname="center bill-main backdrop-blur" subclass="billbox" />
     </div>
    );   
}
export default InnerMart;