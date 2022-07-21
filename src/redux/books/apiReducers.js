import { createAsyncThunk } from '@reduxjs/toolkit';

const CREATE_BOOK = 'CREATE_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';
const GET_ALL_BOOK = 'GET_ALL_BOOK';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const appId = 'iOTHVRccMaEI4ZIBQJFj';

export const createBook = createAsyncThunk(
  CREATE_BOOK,
  async (books) => fetch(`${baseUrl}/${appId}/books`, {
    method: 'POST',
    body: JSON.stringify(books),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.text())
    .then((data) => ([data, books])),
);

export const deleteBook = createAsyncThunk(
  DELETE_BOOK,
  async (itemId) => fetch(`${baseUrl}/${appId}/books/${itemId}`, {
    method: 'DELETE',
  })
    .then((response) => response.text())
    .then((data) => ([data, itemId])),
);

export const getAllBooks = createAsyncThunk(
  GET_ALL_BOOK,
  async () => {
    const request = new Request(`${baseUrl}/${appId}/books`);
    const response = await fetch(request);
    const result = await response.json();
    const arr = Object.entries(result);

    const newArr = [];
    arr.forEach((item) => {
      const itemId = item[0];
      const bookList = item[1][0];
      newArr.push({ ...bookList, item_id: itemId });
    });

    return newArr;
  },
);

const books = [];

export default (state = books, action) => {
  switch (action.type) {
    case 'CREATE_BOOK/fulfilled':
      return [
        ...state, action.payload[1],
      ];

    case 'GET_ALL_BOOK/fulfilled':
      return action.payload;

    case 'DELETE_BOOK/fulfilled':
      return state.filter((books) => books.item_id !== action.payload[1]);

    default:
      return state;
  }
};
