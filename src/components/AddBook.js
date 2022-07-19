import React from 'react';

const AddBook = ({handleSubmit, onChange}) => (
  
  <div>
    <h2>ADD NEW BOOK</h2>
    <form >
      <input 
      name="title" 
      type="text"
       placeholder="Book Title" 
       onChange={(e) => onChange(e)}
       />

      <input 
      name="author" 
      type="text" 
      placeholder="Author" 
      onChange={(e) => onChange(e)}
      />

      <button onClick={(e) => handleSubmit(e)} type='button'>ADD BOOK</button>
    </form>

  </div>

);

export default AddBook;
