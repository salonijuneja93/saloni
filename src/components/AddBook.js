
import React, { useState } from 'react';
import axios from 'axios';

function AddBook({ refreshBooks }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [status, setStatus] = useState('Unread');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/books', { title, author, status });
        refreshBooks();
        setTitle('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Unread">Unread</option>
                <option value="Read">Read</option>
            </select>
            <button type="submit">Add Book</button>
        </form>
    );
}

export default AddBook;
