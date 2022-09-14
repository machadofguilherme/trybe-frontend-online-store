import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class CartItems extends Component {
  state = {
    quant: 1,
    infoProducts: [],
  };

  addQuant = (aidi) => {
    const { items } = this.props;
    const itemJaExistente = JSON.parse(localStorage.getItem('produto'));
    this.setState({ infoProducts: itemJaExistente });
    const itemPeloId = items.find((el) => el.id === aidi);
    this.setState((prev) => ({
      infoProducts: [...prev.infoProducts, itemPeloId],
    }), () => {
      const { infoProducts: infoProducts2 } = this.state;
      const jsonn = JSON.stringify(infoProducts2);
      localStorage.setItem('produto', jsonn);
    });
    this.setState((el) => ({ quant: el.quant + 1 }));
  };

  remQuant = (aidi) => { // 1 - array de objeto () 2 -acesso por indice
    const { quant, infoProducts } = this.state;
    if (quant > 1) {
      const { items } = this.props;
      const itemJaExistente = JSON.parse(localStorage.getItem('produto'));
      this.setState({ infoProducts: itemJaExistente });
      const itemPeloId = items.filter((el) => el.id === aidi);
      console.log(itemPeloId);
      this.setState((prev) => ({
        infoProducts: [...prev.infoProducts, itemPeloId],
      }), () => {
        const contagem2 = infoProducts.filter((el) => el.id === aidi);
        // const { infoProducts: infoProducts2 } = this.state;
        const json = JSON.stringify(itemPeloId);
        localStorage.setItem('produto', json);
        localStorage.setItem('quantidade', contagem2.length - 1);
      });
      this.setState((el) => ({ quant: el.quant - 1 }));
    }
  };

  // remItem = () => { // const itemPeloId = items.filter((el) => el.id !== aidi);

  // }

  render() {
    const { id, thumbnail, title, price } = this.props;
    const { quant, infoProducts } = this.state;
    console.log(infoProducts);
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
            onClick={ () => this.remQuant(id) }
          >
            -
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
