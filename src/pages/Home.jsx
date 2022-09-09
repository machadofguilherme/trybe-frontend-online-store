import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
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
        >
          <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        </button>
      </>
    );
  }
}

// oi

export default Home;
