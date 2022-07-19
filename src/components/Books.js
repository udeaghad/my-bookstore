import React from 'react';
// import PropTypes from 'prop-types';
import { shallowEqual, useSelector } from 'react-redux';




export default () => { 
 const showBooks = useSelector(state => state.books, shallowEqual)  
 
  return ( 
  <ul> 
     {showBooks.map(bookList => (
      <li key={bookList.id}>       
      <div>{bookList.title}</div>      
      <div>{bookList.author}</div>
      <br></br>
    </li>
     ))}
     
    
    
    <button   type="button">Remove</button>
  </ul>

  )

};

// Books.propTypes = {
//   title: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
// };


