export default function SearchbarReducer(state = {
  inputContent: ''
}, action) {
  switch (action.type) {
    case 'ON_SEARCH_INPUT':
      return {
        inputContent: action.payload
      };
    case 'CLEAR_SEARCH_INPUT':
      return {
        inputContent: ''
      }
    default:
      return state;
  }
}
