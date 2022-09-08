import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ListaCategorias from './Components/ListaCategorias';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import Home from './pages/Home';

class App extends React.Component {
  componentDidMount() {
    getCategories();
    getProductsFromCategoryAndQuery();
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={ Home } />
        <Route path="/" component={ ListaCategorias } />
      </BrowserRouter>
    );
  }
}

export default App;
