import React from 'react';
import './Home.css';

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
      </>
    );
  }
}

export default Home;
