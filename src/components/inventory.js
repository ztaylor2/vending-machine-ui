import React, { Component } from 'react';

class Inventory extends Component {

  render() {
    return (
      <div>
        <h1>Inventory</h1>
        <ul className="inventoryList">
          { this.props.inventory.map((item, i) => (
            <li key={i} className="inventoryItem">
              <span>{item[0]}: </span>
              <span>${item[1]}</span>
              <button onClick={() => this.props.addProduct(i, item[0], item[1])} className="addButton">+</button>
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

export default Inventory;
