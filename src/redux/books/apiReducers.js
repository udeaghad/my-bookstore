import { createAsyncThunk } from '@reduxjs/toolkit';

const CREATE_BOOK = 'CREATE_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';
const GET_ALL_BOOK = 'GET_ALL_BOOK';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps'
const app_id = 'iOTHVRccMaEI4ZIBQJFj'

export const createBook = createAsyncThunk(
  CREATE_BOOK,
  async (books) => {
    return fetch(`${baseUrl}/${app_id}/books`, {
      method: 'POST',
          body: JSON.stringify(books),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then(response => response.text())
        .then(data => (data, books))
      })

export const deleteBook = createAsyncThunk(
  DELETE_BOOK,
  async (item_id) => {
    return fetch(`${baseUrl}/${app_id}/books/${item_id}`, {
      method: 'DELETE',
    })
    .then(response => response.text()) 
    .then(data => (data, item_id))
    
    })

    export const getAllBooks = createAsyncThunk(
      GET_ALL_BOOK,
      async () => {
        const request = new Request(`${baseUrl}/${app_id}/books`);
        const response = await fetch(request);
        const result = await response.json();
        const arr = Object.entries(result)

        const newArr = arr.map((item) => {      
           for(let i = 0; i < item.length; i+=1){            
           return {...item[1][i], item_id: item[0]}
           }    
        })
       
       return newArr
      
      }
    )

    const books = [ ];

    export default (state = books, action) => {
      switch (action.type) {
        case 'CREATE_BOOK/fulfilled':
          return [
            ...state, action.payload,
          ];
        
        case 'GET_ALL_BOOK/fulfilled':
          return state, action.payload;
          
    
        case 'DELETE_BOOK/fulfilled':         
          return state.filter((books) => books.item_id !== action.payload);
    
        default:
          return state;
      }
    };
  