import React from 'react';
import { connect } from 'react-redux';

import {
  itemCleared,
  itemAdded,
  itemRemoved,
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, itemCleared, itemAdded, itemRemoved }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        {quantity > 1 ? (
          <div className="arrow" onClick={() => itemRemoved(cartItem)}>
            -
          </div>
        ) : (
          <div className="min-quantity"></div>
        )}
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => itemAdded(cartItem)}>
          +
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => itemCleared(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  itemCleared: (item) => dispatch(itemCleared(item)),
  itemAdded: (item) => dispatch(itemAdded(item)),
  itemRemoved: (item) => dispatch(itemRemoved(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
