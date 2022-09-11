import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';

class App extends React.Component {
  state = {
    info: [],
    infoProducts: [],
  };

  setInfo = (info) => {
    this.setState({ info });
  };

  productDetails = (details) => {
    this.setState((el) => ({ infoProducts: [...el.infoProducts, details] }));
    this.salvarStorage();
  };

  salvarStorage = () => {
    const { infoProducts } = this.state;
    const xablau = JSON.stringify(infoProducts);
    localStorage.setItem('produto', xablau);
  };

  render() {
    const { info, infoProducts } = this.state;
    this.salvarStorage();
    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={ () => (<Home
            set={ this.setInfo }
            detalheProduct={ this.productDetails }
          />) }
        />

        <Route
          exact
          path="/cart/"
          render={ () => <Cart produtoCarrinho={ infoProducts } /> }
        />

        <Route
          exact
          path="/cart/:id"
          render={ () => <Product info={ info } /> }
        />
      </BrowserRouter>
    );
  }
}

export default App;
