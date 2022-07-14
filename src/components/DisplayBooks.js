import React, {useState} from 'react';
import Books from './Books';
import AddBook from './AddBook';

const DisplayBooks = () => {
    const [books, setBooks] = useState([])

setBooks;

return (
    <div>
        {books.map(books => (
            <Books
            key={books.id}
            title={books.title}
            author={books.author}
         />
        ))}

       <AddBook /> 

    </div>
)

}

export default DisplayBooks