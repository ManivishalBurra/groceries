import React,{useContext} from 'react';
import CartQueue from './CartQueue';
import {Cartdata} from './userStatus';
import Bill from './Totalbill'

function Cart(props){
    const {data,setData}=useContext(Cartdata);
    function cartLists(cart){
        return <CartQueue
        key={cart.id}
        img={cart.img}
        price={cart.price}
        itemname={cart.itemname}
        quantity={cart.quantity}
        id={cart.id}
        onDelete={props.deletion}
        />
    }
    console.log(data);

    return (
     <div className={props.classname}>
        <header>
            <div className="cart-header center">
              <strong><i className="fas fa-shopping-cart"></i>Cart</strong>
              <div>
                  <button> Checkout </button>
              </div>
            </div>
            <hr/>
        </header>
        <div className={props.subclass}>
        {data.map(cartLists)}
        {props.classname==="center bill-main backdrop-blur" && <Bill billdata={data} />}
        </div>
        
        </div>
    );
}

          
export default Cart;
