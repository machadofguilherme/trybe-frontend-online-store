import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class CartItems extends Component {
  state = {
    // infoProducts: [],
    quantidade: 0,
  };

  componentDidMount() {
    const { quantidade } = this.state;
    const { items } = this.props;
    const quant = items.map((el) => el.qnt); // stringfy
    this.setState({ quantidade: quant[0] });
    console.log(quant);
    console.log(quantidade);
  }

  // addQuant = (aidi) => {

  // };

  // remQuant = () => {
  // };

  // remItem = () => { // const itemPeloId = items.filter((el) => el.id !== aidi);

  // }

  render() {
    const { items, id, thumbnail, title, price } = this.props;
    console.log(items);
    const { quantidade } = this.state;
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

          <button
            type="button"
            data-testid="product-decrease-quantity"
            // onClick={}
          >
            -
          </button>

          <p data-testid="shopping-cart-product-quantity">
            Quantidade:
            {
              items.map((el) => {})
            }
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
};
