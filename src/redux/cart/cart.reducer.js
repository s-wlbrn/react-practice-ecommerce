import { CartActionTypes } from './cart.types';
import { AddItemToCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.CART_HIDE_TOGGLED:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionTypes.ITEM_ADDED:
      return {
        ...state,
        cartItems: AddItemToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
