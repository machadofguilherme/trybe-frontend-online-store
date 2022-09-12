import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

export default class Product extends Component {
  state = {
    info: [],
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const IdProduto = await getProductById(id);
    this.setState({ info: IdProduto });
  }

  render() {
    const { info } = this.state;

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
  match: PropTypes.shape(
    { params: PropTypes.shape({ id: PropTypes.string }) },
  ).isRequired,
};
