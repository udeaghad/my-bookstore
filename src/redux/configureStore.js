import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import AddAndRemoveReducer from './books/books';
import CategoriesReducer from './categories/categories';

const reducer = combineReducers({
  addAndRemoveBook: AddAndRemoveReducer,
  checkStatus: CategoriesReducer,
});

const store = configureStore({ reducer });

export default store;
