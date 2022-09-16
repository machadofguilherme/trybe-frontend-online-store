import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class CartItems extends Component {
  constructor(props) {
    super(props);
    const { qnt } = props;
    this.state = {
      quantidade: qnt,
    };
  }

  addQuant = (objeto) => {
    const { quantidade } = this.state;
    this.setState({ quantidade: quantidade + 1 }, () => {
      const receberStorage = JSON.parse(localStorage.getItem('listProductsCart'));
      receberStorage.forEach((e) => {
        // if e.id === objeto.id
        e.qnt += 1;
      });
    });
  };

  // remQuant = () => {
  // };

  // remItem = () => { // const itemPeloId = items.filter((el) => el.id !== aidi);

  // }

  render() {
    const { items, id, thumbnail, title, price } = this.props;
    const { quantidade } = this.state;
    console.log(items);
    return (
      <div>
        <li key={ id }>
          <p data-testid="shopping-cart-product-name">{title}</p>
          <p>{ price }</p>
          <img src={ thumbnail } alt={ title } />

          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => this.addQuant(items) }
          >
            +
          </button>

          <p data-testid="shopping-cart-product-quantity">
            Quantidade:
            { quantidade }
          </p>
        </li>
      </div>
    );
  }
}

CartItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
};

CartItems.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  qnt: PropTypes.number.isRequired,
};
