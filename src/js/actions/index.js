export function clearSearchInput() {
  return {
    type: 'CLEAR_SEARCH_INPUT'
  };
}

export function onSearchInput(content) {
  return {
    type: 'ON_SEARCH_INPUT',
    payload: content
  };
}
