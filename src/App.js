
import React, { useEffect, useState } from 'react';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import axios from 'axios';

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const res = await axios.get('http://localhost:5000/api/books');
        setBooks(res.data);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/books/${id}`);
        fetchBooks();
    };

    const handleUpdate = async (id) => {
        const book = books.find(b => b._id === id);
        const newStatus = book.status === 'Read' ? 'Unread' : 'Read';
        await axios.put(`http://localhost:5000/api/books/${id}`, { status: newStatus });
        fetchBooks();
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div>
            <h1>Book Library</h1>
            <AddBook refreshBooks={fetchBooks} />
            <BookList books={books} onDelete={handleDelete} onUpdate={handleUpdate} />
        </div>
    );
}

export default App;
