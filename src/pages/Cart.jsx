import React, { Component } from 'react';

export default class Cart extends Component {
  state = {
    items: [],
    isTrue: false,
  };

  async componentDidMount() {
    const xablau = JSON.parse(localStorage.getItem('produto'));
<<<<<<< HEAD
    this.setState({ items: xablau });
    console.log(xablau);
=======
    this.setState({ items: xablau, isTrue: true });
>>>>>>> 583d939b2381e172560a02fe486e112d18cdb81a
  }

  teste = () => {
    const { items } = this.state;
    return items;
  };

  render() {
    const { items, isTrue } = this.state;
    this.teste();

    return (
<<<<<<< HEAD
      <>
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
        <div>
          { items.map((el, i) => (
            <div key={ `${el.title}-${i}` }>
              <p data-testid="shopping-cart-product-name">{ el.title }</p>
              <p>{ el.price }</p>
              {/* <p data-testid="shopping-cart-product-quantity">{ el. }</p> */}
            </div>
          )) }
        </div>
      </>
=======
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
>>>>>>> 583d939b2381e172560a02fe486e112d18cdb81a
    );
  }
}
