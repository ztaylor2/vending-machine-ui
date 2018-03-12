import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: [['Twix', 2], ['Jerky', 3], ['Soda', 1.5], ['Chips', 1.25]],
      shoppingCart: []
    };

    this.checkout = this.checkout.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(index, item) {
    let prevCart = this.state.shoppingCart;

    prevCart.push(item)

    this.setState({
      shoppingCart: prevCart
    });
  }

  checkout() {
    console.log(this.state.shoppingCart)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Vending Machine</h1>
        </header>
        <ul>
          { this.state.inventory.map((item, i) => (
            <li key={i}>
              <span>Item: {item[0]} </span>
              <span>Cost: {item[1]} </span>
              <button onClick={() => this.addProduct(i, item[0])}>+</button>
            </li>
          )) }
        </ul>
        <h1>Shopping Cart</h1>
        <ul>
          { this.state.shoppingCart.map((item, i) => (
            <li key={i}>
              <span>Item: {item} </span>
            </li>
          )) }
        </ul>
        <button onClick={() => this.checkout()}>Checkout</button>
      </div>
    );
  }
}

export default App;
