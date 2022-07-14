import React from 'react';

const Books = ({title, author}) => {
  
  return (    
      <ul>
       <div>{title}</div>
       <div>{author}</div>
       <button>Remove</button>
     </ul>
   
  )
};

export default Books;
