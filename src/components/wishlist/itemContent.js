import React from 'react';
import PropTypes from 'prop-types';

const ItemContent = ({title, value}) => (
  <div>
    <span>{title}: </span>
    <span>{value}</span>
  </div>
);

ItemContent.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default ItemContent;