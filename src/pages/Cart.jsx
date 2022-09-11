import React, { Component } from 'react';

export default class Cart extends Component {
  state = {
    items: [],
  };

  async componentDidMount() {
    const xablau = JSON.parse(localStorage.getItem('produto'));
    this.setState({ items: xablau });
  }

  teste = () => {
    const { items } = this.state;
    console.log(items);
  };

  render() {
    const { items } = this.state;
    this.teste();

    return (
      <div data-testid="shopping-cart-product-name">
        { items.map((el, i) => (
          <section key={ `${el.title}-${i}` }>
            <p>
              { el.title }
            </p>
            <p>{ el.price }</p>
            <p data-testid="shopping-cart-product-quantity">
              0
            </p>
          </section>
        )) }
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      </div>
    );
  }
}
