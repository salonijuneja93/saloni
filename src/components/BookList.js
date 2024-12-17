
import React from 'react';
import BookCard from './BookCard';

function BookList({ books, onDelete, onUpdate }) {
    return (
        <div>
            {books.map((book) => (
                <BookCard key={book._id} book={book} onDelete={onDelete} onUpdate={onUpdate} />
            ))}
        </div>
    );
}

export default BookList;
