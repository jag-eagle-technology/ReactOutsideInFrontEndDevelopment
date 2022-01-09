import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {devToolsEnhancer} from 'redux-devtools-extension';
import rootReducer from './reducers';
import api from '../api';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  devToolsEnhancer(),
);

export default store;
