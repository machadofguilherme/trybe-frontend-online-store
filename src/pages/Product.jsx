import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

export default class Product extends Component {
  state = {
    info: [],
    infoProducts: [],
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const IdProduto = await getProductById(id);
    this.setState({ info: IdProduto });
    this.capturaStorage();
  }

  capturaStorage = () => {
    const itemCarrinho = JSON.parse(localStorage.getItem('produto'));
    this.setState({ infoProducts: (itemCarrinho ?? []) });
  };

  addCarrinho = (product) => {
    const { infoProducts } = this.state;
    if (infoProducts.length === 0) {
      this.setState({ infoProducts: [product] }, () => {
        const json = JSON.stringify([product]);
        localStorage.setItem('produto', json);
      });
    } else {
      this.setState((prev) => ({
        infoProducts: [...prev.infoProducts, product],
      }), () => {
        const jsonn = JSON.stringify([product]);
        localStorage.setItem('produto', jsonn);
      });
    }
  };

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
          <Link to="/cart" data-testid="shopping-cart-button">Ir ao Carrinho</Link>
        </button>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addCarrinho(info) }
        >
          Adicionar ao Carrinho
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
