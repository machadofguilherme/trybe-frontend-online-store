import React, { Component } from 'react';

export default class Cart extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    const chamafunc = this.capturaStorage();
    console.log(chamafunc);
  }

  capturaStorage = () => {
    const itemCarrinho = JSON.parse(localStorage.getItem('produto')); // ciclo de vida (did mount)
    console.log(itemCarrinho);
    this.setState({ items: (itemCarrinho ?? []) });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <div>
          { items.length <= 0 && (
            <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
          )}
        </div>
        <div>
          { items.length >= 1 && (
            <h1>Oi</h1>
          )}
        </div>
      </div>
    );
  }
}
