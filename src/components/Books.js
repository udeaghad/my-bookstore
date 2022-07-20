import React from 'react';
// import PropTypes from 'prop-types';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { removedBook } from '../redux/books/books';



export default () => { 
 const showBooks = useSelector(state => state.books, shallowEqual) 
 const dispatch = useDispatch() 
 
 const deleteBook = (e) => {
 const targetId = e.target.id 
 dispatch(removedBook(targetId)) 
}
 
 
  return ( 
  <ul> 
     {showBooks.map((bookList) => (
      <li key={bookList.id}>       
      <div>{bookList.title}</div>      
      <div>{bookList.author}</div>

      <button 
        id={bookList.id}  
        type="button"
        onClick={(e) => deleteBook(e)  }
      >      
      Remove
      </button>   
      
    </li>   
    
     ))}    
  </ul>
  )
};

// Books.propTypes = {
//   title: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
// };


