import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          component={ Home }
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
