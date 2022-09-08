import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Cart from './Cart';

class Home extends React.Component {
  state = {
    itemsCart: '',
  };

  render() {
    const { itemsCart } = this.state;
    return (
      <>
        <input
          type="text"
          placeholder="Digite sua busca aqui"
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button
          type="button"
          data-testid="shopping-cart-button"
        >
          <Cart itemsCart={ itemsCart } />
          <Link to="/cart">Carrinho</Link>
        </button>
      </>
    );
  }
}

export default Home;
