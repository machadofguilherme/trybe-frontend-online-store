import React, { Component } from 'react';

export default class Cart extends Component {
  state = {
    items: [],
    quant: 1,
  };

  componentDidMount() {
    this.capturaStorage();
  }

  capturaStorage = () => {
    const itemCarrinho = JSON.parse(localStorage.getItem('produto'));
    console.log(itemCarrinho);
    this.setState({ items: (itemCarrinho ?? []) });
  };

  render() {
    const { items, quant } = this.state;
    console.log(items);
    return (
      <div>
        <div>
          { items.length <= 0 && (
            <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
          )}
        </div>
        <div>
          { items.length >= 1 && (
            <ul>
              { items.map((el) => (
                <li key={ el.id }>
                  <p data-testid="shopping-cart-product-name">{el.title}</p>
                  <p>{ el.price }</p>
                  <img src={ el.thumbnail } alt={ el.title } />
                  <p data-testid="shopping-cart-product-quantity">
                    Quantidade:
                    {quant}
                  </p>
                </li>
              )) }
            </ul>
          )}
        </div>
      </div>
    );
  }
}
