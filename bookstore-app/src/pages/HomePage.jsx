import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style/HomePage.css'; // ✨ Import from style folder
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import { getFeaturedBooks, getCategories } from '../data/booksData';

const HomePage = () => {
    const [featuredBooks, setFeaturedBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setFeaturedBooks(getFeaturedBooks());
            setCategories(getCategories());
            setLoading(false);
        }, 500);
    }, []);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Welcome to BookStore
                        <span className="hero-subtitle">Your Gateway to Knowledge</span>
                    </h1>
                    <p className="hero-description">
                        Discover thousands of books from various genres.
                        Find your next great read today!
                    </p>
                    <SearchBar className="hero-search" />
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">10,000+</span>
                            <span className="stat-label">Books</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Categories</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">1,000+</span>
                            <span className="stat-label">Authors</span>
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/images/banners/hero-bg.jpg" alt="Books" />
                </div>
            </section>

            {/* Categories Section */}
            <section className="categories-section">
                <h2>Browse by Category</h2>
                <div className="categories-grid">
                    {categories.map(category => (
                        <Link
                            to={`/category/${category.id}`}
                            key={category.id}
                            className="category-card"
                        >
                            <img src={category.icon} alt={category.name} />
                            <h3>{category.name}</h3>
                            <span>{category.count} books</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Books Section */}
            <section className="featured-section">
                <div className="section-header">
                    <h2>Featured Books</h2>
                    <Link to="/books" className="view-all-link">
                        View All →
                    </Link>
                </div>
                {loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    <div className="books-grid">
                        {featuredBooks.map(book => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default HomePage;