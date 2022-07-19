import React, { useState } from 'react';
import Books from './Books';
import AddBook from './AddBook';
import Bookslist from './Books'
import { useDispatch } from 'react-redux';
import { addedBook } from '../redux/books/books';
import { v4 as uuidv4 } from 'uuid';

const DisplayBooks = () => {

const dispatch = useDispatch()
    
  const [books, setBooks] = useState({
    title: '',
    author: '',
    id: ''
  });

  const onChange = (e) => {
    setBooks({
      ...books,
      [e.target.name]: e.target.value,
      id: uuidv4()
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(books.title.trim() && books.author.trim()){
        dispatch(addedBook(books))
    }
  }

  return (
    <div>
      {/* {books.map((books) => (
        <Books
          key={books.id}
          title={books.title}
          author={books.author}
        />
      ))} */}

      <Bookslist />

      <AddBook handleSubmit={handleSubmit} onChange={onChange}/>

    </div>
  );
};

export default DisplayBooks;
