import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { onSearchInput, clearSearchInput } from '../actions';
import SearchBar from '../components/searchbar';

const mapStateToProps = (state) => {
  return {
    inputContent: state.SearchbarReducer.inputContent,
  };
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    onSearchInput,
    clearSearchInput
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
