import React from 'react';
import PropTypes from 'prop-types';

import WishlistItem from './wishlistItem';

const Wishlist = () => {
  const items = [
    {title: 'AAA', year: '100', rating: '1', tags: ['a', 'b'], priority: 1},
    {title: 'BBB', year: '200', rating: '2', tags: ['a', 'b'], priority: 3},
    {title: 'CCC', year: '300', rating: '3', tags: ['a', 'b'], priority: 3},
    {title: 'CCC', year: '300', rating: '3', tags: ['a', 'b'], priority: 1},
    {title: 'CCC', year: '300', rating: '3', tags: ['a', 'b'], priority: 2},
    {title: 'CCC', year: '300', rating: '3', tags: ['a', 'b'], priority: 1},
    {title: 'CCC', year: '300', rating: '3', tags: ['a', 'b'], priority: 2}
  ];
  return (
    <div className='wishlist'>
      { items.map((item, i) => <WishlistItem item={item} key={i}/>) }
    </div>
  );
};

export default Wishlist;