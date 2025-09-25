import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
// import './BookDetailPage.css'; // Optional: for styling

// --- Mock Data ---
// In a real app, you would fetch this from an API.
const allBooks = [
    { id: 1, category: 'fiction', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, cover: 'https://images-na.ssl-images-amazon.com/images/I/81QuEGw8VPL.jpg', description: 'A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.' },
    { id: 2, category: 'fiction', title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, cover: 'https://images-na.ssl-images-amazon.com/images/I/81OthjkJjCL.jpg', description: 'A novel about the seriousness of the issues of rape and racial inequality.' },
    { id: 3, category: 'science', title: 'A Brief History of Time', author: 'Stephen Hawking', year: 1988, cover: 'https://images-na.ssl-images-amazon.com/images/I/91p5b0UvQQL.jpg', description: 'A landmark volume in science writing by one of the great minds of our time.' },
    { id: 4, category: 'biography', title: 'Steve Jobs', author: 'Walter Isaacson', year: 2011, cover: 'https://images-na.ssl-images-amazon.com/images/I/81VStYmsoML.jpg', description: 'Based on more than forty interviews with Jobs conducted over two years.' }
];
// --- End Mock Data ---


const BookDetailPage = () => {
    // useParams() reads the URL parameter, e.g., if the URL is "/book/1", bookId will be "1".
    const { bookId } = useParams();

    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    // This useEffect hook simulates fetching data when the component loads
    // or when the bookId in the URL changes.
    useEffect(() => {
        setLoading(true);

        // Find the book from our mock data array.
        // In a real app, this would be an API call: fetch(`/api/books/${bookId}`)
        const foundBook = allBooks.find(b => b.id.toString() === bookId);

        // Simulate a network delay
        setTimeout(() => {
            setBook(foundBook);
            setLoading(false);
        }, 500); // 0.5 second delay

    }, [bookId]); // The effect re-runs whenever bookId changes

    if (loading) {
        return <div className="loading"><h2>Loading book details... 📖</h2></div>;
    }

    if (!book) {
        return <div className="not-found"><h2>Sorry, book not found! 😞</h2></div>;
    }

    return (
        <div className="book-detail-container">
            <div className="book-detail-card">
                <img src={book.cover} alt={`Cover of ${book.title}`} className="book-cover-large" />
                <div className="book-info">
                    <h1>{book.title}</h1>
                    <h2 className="author">by {book.author}</h2>
                    <p className="year">Published in {book.year}</p>
                    <p className="description">{book.description}</p>

                    {/* This NavLink demonstrates linking back to a category page */}
                    <NavLink to={`/category/${book.category}`} className="back-link">
                        &larr; Back to {book.category.charAt(0).toUpperCase() + book.category.slice(1)}
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;