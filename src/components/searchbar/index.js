import React from 'react';
import PropTypes from 'prop-types';
import Search from 'material-ui-icons/Search';
import Clear from 'material-ui-icons/Clear';

import SearchButton from './searchButton';
import SearchInput from './searchInput';

const SearchBar = (props) => {
  const {
    clearSearchInput,
    onSearchInput,
    inputContent
  } = props;
  console.log(props);
  let typing;

  const handleClick = () => {
    console.log('Clicked!');
  };

  const searchClearClass = inputContent ? 'search_clear_button' : 'hide_search_clear'

  return (
    <div className='header'>
      <div className='search_bar'>
        <SearchInput searchContent={inputContent} typing={(e) => onSearchInput(e.target.value)} classname='search_input'/>
        <SearchButton action={clearSearchInput} classname='search_bar_icon search_clear'>
          <Clear classes={{root: searchClearClass}}/>
        </SearchButton>
        <SearchButton action={handleClick} classname='search_bar_icon search_button'>
          <Search />
        </SearchButton>
      </div>  
    </div>
  );
};

SearchBar.propTypes = {
  onSearchInput: PropTypes.func.isRequired,
  clearSearchInput: PropTypes.func.isRequired,
  inputContent: PropTypes.string.isRequired
};

export default SearchBar;
