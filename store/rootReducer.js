import { combineReducers } from 'redux';

import productsReducers from './products/reducers';

const appReducer = combineReducers({
  products: productsReducers,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
