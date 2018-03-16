import React, { Component } from 'react';

class Cart extends Component {

  render() {
    return (
      <div>
        <h1>Shopping Cart</h1>
        <ul className="shoppingCart">
          { this.props.shoppingCart.map((item, i) => (
            <li className="shoppingCartItem">
              <span>Item: {item} </span>
            </li>
          )) }
        </ul>
        <p> Total: ${ this.props.total }</p> 
        <button onClick={() => this.props.checkout()} className="checkoutButton">Checkout</button>
      </div>
    );
  }
}

export default Cart;