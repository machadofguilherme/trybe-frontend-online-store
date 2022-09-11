import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

import './listaCategorias.css';

class ListaCategorias extends Component {
  state = {
    listCategories: [],
    data: [],
    isTrue: false,
  };

  async componentDidMount() {
    const chamarCategorias = await getCategories();
    this.setState({ listCategories: chamarCategorias });
  }

  clickManager = async (search) => {
    const chamarApi = await getProductsFromCategoryAndQuery(search, '');
    const { results } = chamarApi;
    this.setState({ data: results, isTrue: true });
  };

  sendInfo = (info) => {
    const { set } = this.props;
    set(info);
  };

  addCarrinho = (product) => {
    const { detalheProduct } = this.props;
    detalheProduct(product);
  };

  render() {
    const { listCategories, data, isTrue } = this.state;
    return (

      <ul className="listaCategorias">
        Categorias
        { listCategories.map((el) => (
          <li key={ el.id }>
            <label data-testid="category" htmlFor="radio" className="list-cat">
              <input
                name="btn"
                type="radio"
                id="radio"
                onClick={ () => this.clickManager(el.id, '') }
              />
              { el.name }
            </label>
          </li>
        )) }

        { isTrue && (data.map((el) => (
          <>
            <div key={ el.id } data-testid="product">
              <img src={ el.thumbnail } alt={ el.title } />
              <p>{ el.title }</p>
              <p>{ el.price }</p>
            </div>

            <button
              className="more"
              type="button"
              onClick={ () => this.sendInfo(el) }
            >
              <Link
                to={ `/cart/${el.id}` }
                data-testid="product-detail-link"
              >
                Veja mais
              </Link>
            </button>
            <button
              data-testid="product-add-to-cart"
              className="more"
              type="button"
              onClick={ () => this.addCarrinho(el) }
            >
              Adicionar ao carrinho
            </button>
          </>
        ))) }
      </ul>
    );
  }
}

ListaCategorias.propTypes = {
  set: PropTypes.func.isRequired,
  detalheProduct: PropTypes.func.isRequired,
};

export default ListaCategorias;
