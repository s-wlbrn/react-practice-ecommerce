import React from 'react';
import { connect } from 'react-redux';

import { cartHideToggled } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ cartHideToggled }) => (
  <div className="cart-icon" onClick={cartHideToggled}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  cartHideToggled: () => dispatch(cartHideToggled()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
