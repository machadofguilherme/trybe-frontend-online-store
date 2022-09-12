import React, { Component } from 'react';

export default class Cart extends Component {
  state = {
    items: [],
  };

  async componentDidMount() {
    const xablau = JSON.parse(localStorage.getItem('produto'));
    this.setState({ items: xablau });
  }

  render() {
    const { items } = this.state;

    return (
      <div data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </div>
      // <div>
      //   { items.length > 1 ? (
      //     <>
      //       { items.map((el, i) => (
      //         <div key={ `${el.title}-${i}` }>
      //           <p data-testid="shopping-cart-product-name">{ el.title }</p>
      //           <p>{ el.price }</p>
      //           {/* <p data-testid="shopping-cart-product-quantity">{ el. }</p> */}
      //         </div>

    //       )) }
    //     </>
    //   ) : (

    //   )}

    // </div>
    );
  }
}
