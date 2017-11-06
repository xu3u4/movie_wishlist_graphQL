import { combineReducers } from 'redux';

// import client from 'graphql/client';
import SearchbarReducer from './searchbar_reducer.js';
// import WishlistReducer from './wishlist_reducer.js';

const rootReducer = combineReducers({
  SearchbarReducer,
  // WishlistReducer,
  // apollo: client.reducer()
});

export default rootReducer;
