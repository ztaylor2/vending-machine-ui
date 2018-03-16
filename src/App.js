import React, { Component } from 'react';
import './App.css';
import Cart from './components/Cart'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: [['Twix', 2], ['Jerky', 3], ['Soda', 1.5], ['Chips', 1.25]],
      shoppingCart: [],
      total: 0
    };

    this.checkout = this.checkout.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(index, item, cost) {
    let prevCart = this.state.shoppingCart;
    let prevTotal = this.state.total;

    prevCart.push(item)
    prevTotal += cost

    this.setState({
      shoppingCart: prevCart,
      total: prevTotal
    });
  }

  checkout() {
    alert(`Thank you for purchasing ${ this.state.shoppingCart } for $${ this.state.total }`)
    console.log(this.state.shoppingCart)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Vending Machine</h1>
        </header>
        <h1>Inventory</h1>
        <ul className="inventoryList">
          { this.state.inventory.map((item, i) => (
            <li key={i} className="inventoryItem">
              <span>{item[0]}: </span>
              <span>${item[1]}</span>
              <button onClick={() => this.addProduct(i, item[0], item[1])} className="addButton">+</button>
            </li>
          )) }
        </ul>
      <Cart shoppingCart={this.state.shoppingCart} total={this.state.total} checkout={this.checkout} />
      </div>
    );
  }
}

export default App;
