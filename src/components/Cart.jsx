import React from 'react';
import CartQueue from './CartQueue';
import Bill from './Totalbill'

function Cart(props){

    function cartLists(cart){
        return <CartQueue
        img={cart.img}
        price={cart.price}
        itemname={cart.itemname}
        quantity={cart.quantity}
        id={cart.id}
        onDelete={props.deletion}
        />
    }

    return (
     <div className={props.classname}>
        <header>
            <div className="cart-header center">
              <strong><i class="fas fa-shopping-cart"></i>Cart</strong>
              <div>
                  <button> Checkout </button>
              </div>
            </div>
            <hr/>
        </header>
        <div className={props.subclass}>
        {props.data.map(cartLists)}
        {props.classname==="center bill-main backdrop-blur" && <Bill billdata={props.data} />}
        </div>
        </div>
    );
}

          
export default Cart;
