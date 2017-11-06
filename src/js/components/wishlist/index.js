import React from 'react';

import WishlistItem from './wishlistItem';

const Wishlist = () => {
  const items = [
    { title: 'AAA', year: '100', rating: '1', tags: ['a', 'b'], priority: 1, id: 1 },
    { title: 'BBB', year: '200', rating: '2', tags: ['a', 'b'], priority: 3, id: 2 },
    { title: 'CCC', year: '300', rating: '3', tags: ['a', 'b'], priority: 3, id: 3 },
    { title: 'CCC', year: '300', rating: '3', tags: ['a', 'b'], priority: 1, id: 4 },
    { title: 'CCC', year: '300', rating: '3', tags: ['a', 'b'], priority: 2, id: 5 },
    { title: 'CCC', year: '300', rating: '3', tags: ['a', 'b'], priority: 1, id: 6 },
    { title: 'CCC', year: '300', rating: '3', tags: ['a', 'b'], priority: 2, id: 7 }
  ];
  return (
    <div className="wishlist">
      { items.map((item) => <WishlistItem item={item} key={item.id} />) }
    </div>
  );
};

export default Wishlist;
