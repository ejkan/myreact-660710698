import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


import HomePage from './pages/HomePage';
import BookListPage from './pages/BookListPage';
// import BookDetailPage from './pages/BookDetailPage';
// import CategoryPage from './pages/CategoryPage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';

// Import Components
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/books" element={<BookListPage />} />
                        {/*<Route path="/book/:id" element={<BookDetailPage />} />*/}
                        {/*<Route path="/category/:categoryId" element={<CategoryPage />} />*/}
                        {/*<Route path="/about" element={<AboutPage />} />*/}
                        {/*<Route path="/contact" element={<ContactPage />} />*/}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                {/*<Footer />*/}
            </div>
        </Router>
    );
}

export default App;