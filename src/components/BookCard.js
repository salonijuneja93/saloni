
import React from 'react';

function BookCard({ book, onDelete, onUpdate }) {
    return (
        <div style={{ border: '1px solid #ddd', margin: '10px', padding: '10px', borderRadius: '5px' }}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Status: {book.status}</p>
            <button onClick={() => onUpdate(book._id)}>Toggle Status</button>
            <button onClick={() => onDelete(book._id)}>Delete</button>
        </div>
    );
}

export default BookCard;
