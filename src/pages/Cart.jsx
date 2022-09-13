import React, { Component } from 'react';
import CartItems from './CartItems';

export default class Cart extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    this.capturaStorage();
  }

  capturaStorage = () => {
    const itemCarrinho = JSON.parse(localStorage.getItem('produto'));
    this.setState({ items: (itemCarrinho ?? []) });
  };

  render() {
    const { items } = this.state;
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
                <CartItems
                  key={ el.id }
                  items={ items }
                  thumbnail={ el.thumbnail }
                  title={ el.title }
                  price={ el.price }
                  id={ el.id }
                />
              )) }
            </ul>
          )}
        </div>
      </div>
    );
  }
}
