import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ListaCategorias from '../Components/ListaCategorias';
import { getProductsFromCategoryAndQuery } from '../services/api';

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

  render() {
    const { search, data } = this.state;
    return (
      <>
        <input
          type="text"
          placeholder="Digite sua busca aqui"
          data-testid="query-input"
          name="inputPesquisa"
          onChange={ this.salvaState }
          value={ search }
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button
          data-testid="query-button"
          type="button"
          onClick={ () => this.clickManager(search) }
        >
          Pesquisar

        </button>
        <button
          type="button"
        >
          <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        </button>
        <aside>

          <ListaCategorias />

        </aside>
        { data.length > 0 ? (
          <ul>
            { data.map((el, i) => (
              <li key={ `${el.title}-${i}` } data-testid="product">
                <img src={ el.thumbnail } alt={ el.title } />
                <p>{ el.title }</p>
                <p>{ el.price }</p>
              </li>
            )) }
          </ul>
        ) : <span>Nenhum produto foi encontrado</span> }
      </>
    );
  }
}

export default Home;
