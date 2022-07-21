import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import AddAndRemoveReducer from './books/apiReducers';
import CategoriesReducer from './categories/categories';

const reducer = combineReducers({
  books: AddAndRemoveReducer,
  categories: CategoriesReducer,
});

const store = configureStore({ reducer });

export default store;
