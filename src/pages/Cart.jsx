import React, { Component } from 'react';

export default class Cart extends Component {
  componentDidMount() {
    const xablau = JSON.parse(localStorage.getItem('produto'));
    console.log(xablau);
  }

  render() {
    return (
      <div data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </div>
    );
  }
}

// oi
