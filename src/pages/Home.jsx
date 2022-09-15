import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// import ListaCategorias from '../Components/ListaCategorias';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';

import './Home.css';

class Home extends React.Component {
  state = {
    search: '',
    data: [],
    contagem: 0,
    listCategories: [],
    listSelectedProducts: JSON.parse(localStorage.getItem('produto')) || [], // cartItems
    // idProduct: 0,
  };

  async componentDidMount() {
    const chamarCategorias = await getCategories();
    this.setState({ listCategories: chamarCategorias });
  }

  salvaState = ({ target }) => {
    const { value } = target;
    this.setState({
      search: value,
    });
  };

  clickManager = async (idCategoria) => {
    const categoria = await getProductsFromCategoryAndQuery(idCategoria);
    this.setState({ data: categoria.results });
  };

  campoBusca = async (query) => {
    const pesquisa = await getProductsFromCategoryAndQuery('', query);
    this.setState({ data: pesquisa.results, search: '' });
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
    const { search, data, contagem, listCategories } = this.state;
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
              onClick={ () => this.campoBusca(search) }
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
          <span data-testid="shopping-cart-product-quantity">{ contagem }</span>
        </nav>

        <p data-testid="home-initial-message" className="intro">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <aside>
          <ul className="listaCategorias">
            Categorias
            { listCategories.map((el) => (
              <li key={ el.id }>
                <label data-testid="category" htmlFor="radio" className="list-cat">
                  <input
                    name="btn"
                    type="radio"
                    id="radio"
                    onClick={ () => this.clickManager(el.id) }
                  />
                  { el.name }
                </label>
              </li>
            )) }
          </ul>
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
                  >
                    <Link
                      to={ `/productInfo/${el.id}` }
                      data-testid="product-detail-link"
                    >
                      Veja mais
                    </Link>
                  </button>
                  <button
                    data-testid="product-add-to-cart"
                    className="more"
                    type="button"
                    onClick={ () => this.addCart(el) }
                  >
                    Adicionar ao carrinho
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
