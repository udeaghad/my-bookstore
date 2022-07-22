import React, { useEffect } from 'react';
import progressIcon from '../images/progress-icon.png'
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
    <ul className='Lesson-container'>
     
      {showBooks.map((bookList) => (
        <li className='Lesson-Panel' key={bookList.item_id}>
          <div className='book-details'>
          <dt className='category-item'>{bookList.category}</dt>
          <dt className='title-item'>{bookList.title}</dt>
          <dt className='author-item'>{bookList.author}</dt>
          <div className='btn-contaner'>
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
          </div>
          </div>
          <div className='status-container'>
            <dt className='progress-report'>
              
              <img src={progressIcon} alt='progress-icon' className='read-status'/>
              <div className='status'>
              <dl className='percent-compl'>64%</dl>
              <dl className='completed'>Completed</dl>
              </div>
              
            </dt>
            <dt className='chapter-container'>
              <dl className='current-chapter'>CURRENT CHAPTER</dl>
              <dl className='chapter-topic'>Chapter 17</dl>
              <button type='button' className='progress'>UPDATE PROGRESS</button>
            </dt>
          </div>


        </li>

      ))}
    </ul>
  );
}
