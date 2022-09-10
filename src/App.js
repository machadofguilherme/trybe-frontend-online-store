import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';

class App extends React.Component {
  state = {
    info: [],
  };

  setInfo = (info) => {
    this.setState({ info });
  };

  render() {
    const { info } = this.state;

    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={ () => <Home set={ this.setInfo } /> }
        />

        <Route exact path="/cart" component={ Cart } />

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
