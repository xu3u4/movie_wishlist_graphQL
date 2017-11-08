import React from 'react';
import PropTypes from 'prop-types';

// import ItemContent from './itemContent';
import Grade from 'material-ui-icons/Grade';

const WishlistItem = ({ item }) => {
  const { title, year, rating, tags, priority } = item;
  const titleHrStyle = `title_hr_style level${priority}_box`;

  return (
    <div className="item_box">
      <div className="item_image">
        <img alt={title} src="https://images-na.ssl-images-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg" />
      </div>
      <div className="item_details">
        <div className="item_title">{title}</div>
        <div className="item_year">({year})</div>
        <hr className={titleHrStyle} />
        <div>IMDB<Grade classes={{ root: 'rating_star' }} color="#fff000" /> {rating}</div>
        <div>
          {tags.map((tag) => <a className="item_tag" href="javascript.void(0)" key={tag}>{tag}</a>)}
        </div>
      </div>
    </div>
  );
};

WishlistItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    year: PropTypes.string,
    rating: PropTypes.string,
    tags: PropTypes.array,
    priority: PropTypes.number
  }).isRequired
};

export default WishlistItem;
