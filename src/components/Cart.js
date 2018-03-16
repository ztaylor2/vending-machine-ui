import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="App">
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

export default App;