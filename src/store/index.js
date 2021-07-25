import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import rootReducer from '../reducers';

export default function configureStore() {
  const middleware = [thunk];
  const reducer = combineReducers(rootReducer);
  const store = createStore(reducer, {}, compose(applyMiddleware(...middleware)));
  return { store };
}