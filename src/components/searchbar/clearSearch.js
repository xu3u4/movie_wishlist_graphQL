import React from 'react';
import PropTypes from 'prop-types';

import HighlightOff from 'material-ui-icons/HighlightOff';

const ClearSearch = ({ clickCross }) => (
  <div className={'clear_input_cross'} onClick={clickCross}>
    <HighlightOff />
  </div>
);

ClearSearch.propTypes = {
  clickCross: PropTypes.func.isRequired
};

export default ClearSearch;