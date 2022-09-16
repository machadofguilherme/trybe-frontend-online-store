import React from 'react';
import CartItems from './CartItems';
import './Cart.css';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recoveryStorage: JSON.parse(localStorage.getItem('listProductsCart')) || [],
      message: false,
    };
  }

  componentDidMount() {
    const { recoveryStorage } = this.state;
    if (recoveryStorage.length > 0) this.setState({ message: true });
  }

  render() {
    const { recoveryStorage, message } = this.state;
    return (
      <>
        {message === false && (
          <h1
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </h1>
        )}
        <ul className="listaCarrinho">
          { recoveryStorage.map((el) => (
            <CartItems
              key={ el.id }
              title={ el.title }
              price={ el.price }
              thumbnail={ el.thumbnail }
              productFull={ el }
              quantidade={ el.qnt }
            />
          )) }
        </ul>
      </>
    );
  }
}

export default Cart;
