import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ searchContent, typing, classname }) => (
  <input
    value={searchContent}
    onChange={typing}
    className={classname}
  />
);

SearchInput.propTypes = {
  searchContent: PropTypes.string.isRequired,
  typing: PropTypes.func.isRequired,
  classname: PropTypes.string.isRequired
};

export default SearchInput;
