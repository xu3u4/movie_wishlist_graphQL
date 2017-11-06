import React from 'react';
import PropTypes from 'prop-types';

const SearchButton = ({ action, children, classname }) => (
  <button onClick={action} className={classname}>
    {children}
  </button>
);

SearchButton.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  classname: PropTypes.string.isRequired
};

export default SearchButton;
