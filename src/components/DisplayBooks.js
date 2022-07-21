import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import AddBook from './AddBook';
import Bookslist from './Books';
//import { addedBook } from '../redux/books/books';
import { createBook, getAllBooks } from '../redux/books/apiReducers';

const DisplayBooks = () => {
  const dispatch = useDispatch();

  const [books, setBooks] = useState({
    title: '',
    author: '',
    category: '',
    item_id: '',
    
  });

  

  const onChange = (e) => {
    setBooks({
      ...books,
      [e.target.name]: e.target.value,
      item_id: uuidv4(),
      
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (books.title.trim() && books.author.trim()) {
      dispatch(createBook(books));      
    }
    // To clear the input field
    e.target.parentElement.children[0].value = '';
    e.target.parentElement.children[1].value = '';

    setBooks({
    title: '',
    author: '',
    item_id: '',
    category: ''
    });
  };
  
  return (
    <div>
      <Bookslist />

      <AddBook handleSubmit={handleSubmit} onChange={onChange} />

    </div>
  );
};

export default DisplayBooks;
