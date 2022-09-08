import React, { Component } from 'react';
import './listaCategorias.css';

class ListaCategorias extends Component {
  render() {
    return (
      <ul className="listaCategorias">
        Categorias
        <li>
          <label data-testid="category" htmlFor="radio">
            <input name="btn" type="radio" />
            Categoria 01
          </label>
        </li>
        <li>
          <label data-testid="category" htmlFor="radio">
            <input name="btn" type="radio" />
            Categoria 02
          </label>
        </li>
        <li>
          <label data-testid="category" htmlFor="radio">
            <input name="btn" type="radio" />
            Categoria 03
          </label>
        </li>

      </ul>
    );
  }
}

export default ListaCategorias;
