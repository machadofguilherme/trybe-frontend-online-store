import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ListaCategorias from '../Components/ListaCategorias';
import { getProductsFromCategoryAndQuery } from '../services/api';

import './Home.css';

class Home extends React.Component {
  state = {
    search: '',
    data: [],
  };

  salvaState = ({ target }) => {
    const { value } = target;
    this.setState({
      search: value,
    });
  };

  clickManager = async (search) => {
    const chamarApi = await getProductsFromCategoryAndQuery('', search);
    const { results } = chamarApi;
    this.setState({ search: '', data: results });
  };

  sendInfo = (info) => {
    const { set } = this.props;
    set(info);
  };

  render() {
    const { search, data } = this.state;
    const { set } = this.props;

    return (
      <>
        <nav>
          <h1 className="logo">
            Guri
            <span>Shop!</span>
          </h1>
          <div className="search-cart">
            <input
              type="text"
              placeholder="Digite sua busca aqui"
              className="input"
              data-testid="query-input"
              name="inputPesquisa"
              onChange={ this.salvaState }
              value={ search }
            />
            <button
              data-testid="query-button"
              className="btn-search"
              type="button"
              onClick={ () => this.clickManager(search) }
            >
              Pesquisar

            </button>
          </div>
          <button
            type="button"
            className="btn-cart"
          >
            <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
          </button>
        </nav>

        <p data-testid="home-initial-message" className="intro">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <aside>
          <ListaCategorias set={ set } />
        </aside>

        { data.length > 0 ? (
          <>
            { data.map((el, i) => (

              <div data-testid="product" key={ `${el.title}-${i}` }>

                <div>
                  <p>{ el.title }</p>
                  <img src={ el.thumbnail } alt={ el.title } />
                  <p>{ el.price }</p>

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
                </div>

              </div>
            )) }
          </>
        ) : <span className="not-product">Nenhum produto foi encontrado</span> }
      </>
    );
  }
}

export default Home;

Home.propTypes = {
  set: PropTypes.func.isRequired,
};
