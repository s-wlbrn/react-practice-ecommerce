import { CartActionTypes } from './cart.types';

export const cartHideToggled = () => ({
  type: CartActionTypes.CART_HIDE_TOGGLED,
});

export const itemAdded = (item) => ({
  type: CartActionTypes.ITEM_ADDED,
  payload: item,
});
