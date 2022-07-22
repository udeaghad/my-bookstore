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
          <dt className='category-item'>{bookList.category}</dt>
          <dt className='title-item'>{bookList.title}</dt>
          <dt className='author-item'>{bookList.author}</dt>

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
            <dt className='progress-report'>
              <dl className='read-status'></dl>
              <dl className='percent-compl'></dl>
            </dt>
            <dt className='chapter-container'>
              <dl className='current-chapter'></dl>
              <dl className='chapter-topic'></dl>
              <button type='button' className='progress'></button>
            </dt>
          </div>


        </li>

      ))}
    </ul>
  );
}
