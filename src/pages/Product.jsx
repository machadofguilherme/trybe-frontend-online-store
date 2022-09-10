import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Product extends Component {
  render() {
    const { info } = this.props;

    return (
      <div>
        <h3 data-testid="product-detail-name">
          Nome:
          { info.title }
        </h3>
        <p data-testid="product-detail-price">
          Preço:
          { info.price }
        </p>
        <img
          src={ info.thumbnail }
          alt={ info.title }
          data-testid="product-detail-image"
        />

        <button
          type="button"
        >
          <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  info: PropTypes.arrayOf.isRequired,
};
