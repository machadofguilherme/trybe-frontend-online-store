import React from 'react';
import PropTypes from 'prop-types';

class CartItems extends React.Component {
  constructor(props) {
    super(props);
    const { quantidade } = props;
    this.state = {
      listSelectedProducts: [],
      Qnt: quantidade,
    };

    this.addItem = this.addItem.bind(this);
    this.decreaseItem = this.decreaseItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
    this.setState({
      listSelectedProducts: JSON.parse(localStorage.getItem('listProductsCart')) || [],
    });
  }

  addItem(productFull) {
    const { listSelectedProducts } = this.state;
    const found = listSelectedProducts.find((e) => e.id === productFull.id);
    found.qnt += 1;
    this.setState((prev) => ({
      listSelectedProducts: [...prev.listSelectedProducts],
      Qnt: found.qnt,
    }), () => {
      const { listSelectedProducts: list } = this.state;
      const json = JSON.stringify(list);
      localStorage.setItem('listProductsCart', json);
    });
  }

  decreaseItem(productFull) {
    const { listSelectedProducts } = this.state;
    const found = listSelectedProducts.find((e) => e.id === productFull.id);
    if (found.qnt > 1) {
      found.qnt -= 1;
      this.setState((prev) => ({
        listSelectedProducts: [...prev.listSelectedProducts],
        Qnt: found.qnt,
      }), () => {
        const { listSelectedProducts: list } = this.state;
        const json1 = JSON.stringify(list);
        localStorage.setItem('listProductsCart', json1);
      });
    }
  }

  removeItem(productFull) {
    const { listSelectedProducts } = this.state;
    const found = listSelectedProducts.filter((e) => e.id !== productFull.id);
    this.setState({
      listSelectedProducts: found,
      Qnt: null,
    }, () => {
      const { listSelectedProducts: list } = this.state;
      const json2 = JSON.stringify(list);
      localStorage.setItem('listProductsCart', json2);
    });
  }

  render() {
    const { title, price, thumbnail, productFull } = this.props;
    const { Qnt } = this.state;

    return (
      <li>
        {Qnt !== null && (
          <>
            <p data-testid="shopping-cart-product-name">{title}</p>
            <p>
              R$
              {' '}
              { (price * Qnt).toFixed(2) }
            </p>
            <img src={ thumbnail } alt={ title } />
            <button
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ () => this.decreaseItem(productFull) }
            >
              -
            </button>
            <p data-testid="shopping-cart-product-quantity" className="pBrother">
              {Qnt}
            </p>
            <button
              type="button"
              data-testid="product-increase-quantity"
              onClick={ () => this.addItem(productFull) }
            >
              +
            </button>
            <button
              type="button"
              data-testid="remove-product"
              className="remove"
              onClick={ () => this.removeItem(productFull) }
            >
              x
            </button>
          </>
        )}
      </li>
    );
  }
}

CartItems.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  quantidade: PropTypes.number.isRequired,
  productFull: PropTypes.shape({}).isRequired,
};

export default CartItems;
