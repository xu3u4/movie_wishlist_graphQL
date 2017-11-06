import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Wishlist from 'components/wishlist';

const mapStateToProps = () => {
  return {
    // inputContent: state.inputContent,
  };
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    // onSearchInput,
    // clearSearchInput
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
