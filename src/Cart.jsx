import React from 'react';
import CartQueue from './CartQueue';
function Cart(){
    return (
        <div className="cart backdrop-blur-white">
        <header>
            <div className="cart-header center">
              <strong><i class="fas fa-shopping-cart"></i>Cart</strong>
              <div>
                  <button> Checkout </button>
              </div>
            </div>
            <hr/>
        </header>
        <CartQueue />   

        </div>
    );
}

          
export default Cart;