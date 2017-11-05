import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import './styles/style.scss';
import RootReducer from 'reducers';
import Main from 'components/main';

const stores = createStore(RootReducer, applyMiddleware(ReduxThunk));
ReactDOM.render(
  <Provider store={stores}>
    <Main />
  </Provider>,
  document.getElementById('app')
);
