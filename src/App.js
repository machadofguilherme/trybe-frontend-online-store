import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import './App.css';

class App extends Component {
  componentDidMount() {
    getCategories();
    getProductsFromCategoryAndQuery();
  }

  render() {
    return (
      <div />
    );
  }
}

export default App;
