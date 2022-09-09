import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import Home from './pages/Home';
import Cart from './pages/Cart';

class App extends React.Component {
  componentDidMount() {
    getCategories();
    getProductsFromCategoryAndQuery();
  }

  render() {
    return (
      <BrowserRouter>

        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ Cart } />

      </BrowserRouter>
    );
  }
}

export default App;
