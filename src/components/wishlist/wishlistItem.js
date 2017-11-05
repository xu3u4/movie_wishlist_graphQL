import React from 'react';
import PropTypes from 'prop-types';

import ItemContent from './itemContent';
import Grade from 'material-ui-icons/Grade'

const WishlistItem = ({item}) => {
  const {title, year, rating, tags, priority} = item;
  const box_style = `item_box level${priority}_box`

  return (
    <div className={box_style}>
      <div className='item_title'>
        {title} <span className='item_year'>({year})</span>
      </div>
      <div>IMDB<Grade classes={{root: 'rating_star'}} color='yellow'/> {rating}</div>
      <div>
        {tags.map((tag, index) => <a className='item_tag' href='javascript.void(0)' key={index}>{tag}</a>)}
      </div>
    </div>
  );
};

WishlistItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    priority: PropTypes.number.isRequired
  })
}

export default WishlistItem;