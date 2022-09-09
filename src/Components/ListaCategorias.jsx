import React, { Component } from 'react';
import './listaCategorias.css';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

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

  render() {
    const { listCategories, data, isTrue } = this.state;
    return (
      <>
        <ul className="listaCategorias">
          Categorias
          { listCategories.map((el) => (
            <li key={ el.id }>
              <label data-testid="category" htmlFor="radio">
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
        </ul>
        { isTrue && (data.map((el) => (
          <div key={ el.id } data-testid="product">
            <img src={ el.thumbnail } alt={ el.title } />
            <p>{ el.title }</p>
            <p>{ el.price }</p>
          </div>
        ))) }
      </>
    );
  }
}

export default ListaCategorias;
