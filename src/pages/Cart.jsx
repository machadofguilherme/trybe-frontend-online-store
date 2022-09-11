import React, { Component } from 'react';

export default class Cart extends Component {
  state = {
    items: [],
    isTrue: false,
  };

  async componentDidMount() {
    const xablau = JSON.parse(localStorage.getItem('produto'));
    this.setState({ items: xablau, isTrue: true });
  }

  teste = () => {
    const { items } = this.state;
    return items;
  };

  render() {
    const { items, isTrue } = this.state;
    this.teste();

    return (
      <section data-testid="shopping-cart-product-name">
        {
          isTrue
            ? items.map((el, i) => (
              <section key={ `${el.title}-${i}` }>
                <p>
                  { el.title }
                </p>
                <p>{ el.price }</p>
                <p data-testid="shopping-cart-product-quantity">
                  0
                </p>
              </section>
            ))
            : (
              <p data-testid="shopping-cart-empty-message">
                Seu carrinho está vazio
              </p>
            )
        }
      </section>
    );
  }
}
