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

  addProduct(index, data) {
    let prevCart = this.state.shoppingCart;

    prevCart.push(data)

    this.setState({
      shoppingCart: prevCart
    });
    console.log(this.state.shoppingCart)
  }

  checkout(data) {
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
              <button onClick={() => this.addProduct(i)}>+</button>
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

export default App;
