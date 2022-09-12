import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';

class App extends React.Component {
  state = {
    infoProducts: [],
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
          path="/cart"
          component={ Cart }
        />

        <Route
          exact
          path="/productInfo/:id"
          component={ Product }
        />
      </BrowserRouter>
    );
  }
}

export default App;
