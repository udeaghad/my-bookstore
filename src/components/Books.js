import React, {useEffect} from 'react';
// import PropTypes from 'prop-types';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
//import { removedBook } from '../redux/books/books';
import { getAllBooks, deleteBook } from '../redux/books/apiReducers';

export default function Bookslist() {

  

  const showBooks = useSelector((state) => state.books, shallowEqual);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);  

  const removeBookItem = (e) => {    
    const targetId = e.target.id;    
    dispatch(deleteBook(targetId));
  };

  return (
    <ul>  
         
      {showBooks.map((bookList) => (
        <li key={bookList.item_id}>
          <div>{bookList.title}</div>
          <div>{bookList.author}</div>

          <button
            id={bookList.item_id}
            type="button"
            onClick={(e) => removeBookItem(e)}
          >
            Remove
          </button>

        </li>

      ))}
    </ul>
  );
}
