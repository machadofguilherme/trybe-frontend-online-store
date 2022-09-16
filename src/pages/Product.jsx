import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

export default class Product extends Component {
  state = {
    info: [],
    listSelectedProducts: JSON.parse(localStorage.getItem('produto')) || [],
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const IdProduto = await getProductById(id);
    this.setState({ info: IdProduto });
    this.capturaStorage();
  }

  capturaStorage = () => {
    const itemCarrinho = JSON.parse(localStorage.getItem('listProductsCart'));
    this.setState({ listSelectedProducts: (itemCarrinho ?? []) });
  };

  addCart(productSelected) {
    const { listSelectedProducts } = this.state;
    if (listSelectedProducts.length === 0) {
      this.setState({ listSelectedProducts: [productSelected] }, () => {
        const { listSelectedProducts: list } = this.state;
        list[0].qnt = 1;
        const json = JSON.stringify(list);
        return localStorage.setItem('listProductsCart', json);
      });
    } else {
      const found = listSelectedProducts.some((e) => e.id === productSelected.id);
      if (!found) {
        productSelected.qnt = 1;
        this.setState({
          listSelectedProducts: [...listSelectedProducts, productSelected],
        }, () => {
          const { listSelectedProducts: list } = this.state;
          const json = JSON.stringify(list);
          return localStorage.setItem('listProductsCart', json);
        });
      } else {
        const valorAtualizado = listSelectedProducts.map((e) => {
          if (productSelected.id === e.id) {
            e.qnt += 1;
            return e;
          }
          return e;
        });
        this.setState({
          listSelectedProducts: [...valorAtualizado],
        }, () => {
          const { listSelectedProducts: list } = this.state;
          const json1 = JSON.stringify(list);
          return localStorage.setItem('listProductsCart', json1);
        });
      }
    }
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
          <Link to="/cart" data-testid="shopping-cart-button">Ir ao Carrinho</Link>
        </button>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addCart(info) }
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
