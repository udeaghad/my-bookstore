import React, {useState} from 'react';
import Books from './Books';

const DisplayBooks = () => {
    const [books, setBooks] = useState([
        {
        title: 'abc',
        author: 'cde',
        id: 1
    }, 
    {
        title: 'fgh',
        author: 'kji',
        id:2
    }
])

return (
    <div>
        {books.map(books => (
            <Books
            key={books.id}
            title={books.title}
            author={books.author}
         />
        ))}
        

    </div>
)

}

export default DisplayBooks