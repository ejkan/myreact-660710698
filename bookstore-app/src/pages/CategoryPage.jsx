import React from 'react';
// FIX #1: Added 'Link' to the import list.
import { useParams, Link } from 'react-router-dom';
// import './CategoryPage.css';

// --- Mock Data ---
const allBooks = [
    { id: 1, category: 'fiction', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', cover: 'https://images-na.ssl-images-amazon.com/images/I/81QuEGw8VPL.jpg' },
    { id: 2, category: 'fiction', title: 'To Kill a Mockingbird', author: 'Harper Lee', cover: 'https://images-na.ssl-images-amazon.com/images/I/81OthjkJjCL.jpg' },
    { id: 5, category: 'fiction', title: '1984', author: 'George Orwell', cover: 'https://images-na.ssl-images-amazon.com/images/I/819js3EQwbL.jpg' },
    { id: 3, category: 'science', title: 'A Brief History of Time', author: 'Stephen Hawking', cover: 'https://images-na.ssl-images-amazon.com/images/I/91p5b0UvQQL.jpg' },
    { id: 6, category: 'science', title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', cover: 'https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg' },
    { id: 4, category: 'biography', title: 'Steve Jobs', author: 'Walter Isaacson', cover: 'https://images-na.ssl-images-amazon.com/images/I/81VStYmsoML.jpg' }
];

const BookCard = ({ book }) => {
    return (
        <Link to={`/book/${book.id}`} className="book-card">
            <img src={book.cover} alt={`Cover of ${book.title}`} className="book-cover-small" />
            <div className="book-card-info">
                <h3 className="book-card-title">{book.title}</h3>
                <p className="book-card-author">{book.author}</p>
            </div>
        </Link>
    );
};


const CategoryPage = () => {
    const { categoryName } = useParams();

    // FIX #2: Add a check to ensure categoryName exists before trying to use it.
    // If it's not there yet, the filter will just return an empty array, preventing the crash.
    const booksInCategory = allBooks.filter(
        book => categoryName && book.category.toLowerCase() === categoryName.toLowerCase()
    );

    // If categoryName is missing, we can show a loading or default state.
    if (!categoryName) {
        return <div className="category-container"><h1>Loading Category...</h1></div>;
    }

    const displayCategoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

    return (
        <div className="category-container">
            <h1 className="category-title">
                Browsing: <span>{displayCategoryName}</span>
            </h1>

            {booksInCategory.length > 0 ? (
                <div className="books-grid">
                    {booksInCategory.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            ) : (
                <div className="no-books-found">
                    <p>Oops! It looks like there are no books in this category yet. 😕</p>
                    <Link to="/" className="home-link"> &larr; Go Back to All Books</Link>
                </div>
            )}
        </div>
    );
};

export default CategoryPage;