import React from 'react';
import { connect } from 'react-redux';
import { itemAdded } from '../../redux/cart/cart.actions';

import { CustomButton } from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item, itemAdded }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => itemAdded(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  itemAdded: (item) => dispatch(itemAdded(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
