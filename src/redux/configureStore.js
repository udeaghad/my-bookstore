import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import AddAndRemoveReducer from './books/apiReducers';
import CategoriesReducer from './categories/categories';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

const reducer = combineReducers({
  books: AddAndRemoveReducer,
  categories: CategoriesReducer,
});

const initialState = {};
const middleware = [thunk];

const store = configureStore(
  {reducer},
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
