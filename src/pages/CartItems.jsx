import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class CartItems extends Component {
  state = {
    quant: 1,
  };

  addQuant = (aidi) => {
    this.setState((el) => ({ quant: el.quant + 1 }));
    console.log(aidi);
  };

  // remQuant = () => {

  // }

  // remItem = () => {

  // }

  render() {
    const { id, thumbnail, title, price } = this.props;
    const { quant } = this.state;
    return (
      <div>
        <li key={ id }>
          <p data-testid="shopping-cart-product-name">{title}</p>
          <p>{ price }</p>
          <img src={ thumbnail } alt={ title } />

          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => this.addQuant(id) }
          >
            +
          </button>

          <p data-testid="shopping-cart-product-quantity">
            Quantidade:
            {quant}
          </p>
        </li>
      </div>
    );
  }
}

// CartItems.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string,
//     price: PropTypes.number,
//     thumbnail: PropTypes.string,
//     title: PropTypes.string,
//   })).isRequired,
// };

CartItems.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
