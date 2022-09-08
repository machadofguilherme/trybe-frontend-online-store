import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    const { itemsCart } = this.props;
    return (
      <div data-testid="shopping-cart-empty-message">
        { itemsCart === '' && 'Seu carrinho está vazio' }
      </div>
    );
  }
}

Cart.propTypes = {
  itemsCart: PropTypes.arrayOf.isRequired,
};
