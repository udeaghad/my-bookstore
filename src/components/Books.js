import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// import { removedBook } from '../redux/books/books';
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
        <li className='item-container' key={bookList.item_id}>
          <div className='category-item'>{bookList.category}</div>
          <div className='title-item'>{bookList.title}</div>
          <div className='author-item'>{bookList.author}</div>

          <button className='comment-btn' type='button'>Comments</button>

          <button
            className='remove-btn'
            id={bookList.item_id}
            type="button"
            onClick={(e) => removeBookItem(e)}
          >
            Remove
          </button>

          <button className='edit-btn'>Edit</button>

          <div className='status-container'>
            <div className='read-status'></div>
            <div className='chapter-container'>
              <h2 className='current-chapter'></h2>
              <p className='chapter-topic'></p>
              <button type='button' className='progress'></button>
            </div>
          </div>


        </li>

      ))}
    </ul>
  );
}
