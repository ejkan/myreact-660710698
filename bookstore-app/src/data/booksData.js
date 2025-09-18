// Mock data for books
export const books = [
    {
        id: '1',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        price: 12.99,
        oldPrice: 15.99,
        image: '/images/books/book1.jpg',
        category: 'fiction',
        rating: 4.5,
        reviews: 234,
        description: 'A classic American novel set in the Jazz Age...',
        badge: 'Bestseller',
        isbn: '978-0-7432-7356-5',
        pages: 180,
        language: 'English',
        publisher: 'Scribner',
        publishDate: '1925',
        inStock: true,
    },
    {
        id: '2',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        price: 14.99,
        oldPrice: 18.99,
        image: '/images/books/book2.jpg',
        category: 'fiction',
        rating: 4.8,
        reviews: 456,
        description: 'A gripping tale of racial injustice and childhood innocence...',
        badge: 'Award Winner',
        isbn: '978-0-06-112008-4',
        pages: 324,
        language: 'English',
        publisher: 'J.B. Lippincott & Co.',
        publishDate: '1960',
        inStock: true,
    },
    {
        id: '3',
        title: 'Clean Code',
        author: 'Robert C. Martin',
        price: 39.99,
        image: '/images/books/book3.jpg',
        category: 'technology',
        rating: 4.6,
        reviews: 189,
        description: 'A handbook of agile software craftsmanship...',
        badge: 'New',
        isbn: '978-0-13-235088-2',
        pages: 464,
        language: 'English',
        publisher: 'Prentice Hall',
        publishDate: '2008',
        inStock: true,
    },
    // Add more books as needed...
];

// Categories data
export const categories = [
    {
        id: 'fiction',
        name: 'Fiction',
        count: 245,
        icon: '/images/categories/fiction.svg',
    },
    {
        id: 'non-fiction',
        name: 'Non-Fiction',
        count: 189,
        icon: '/images/categories/non-fiction.svg',
    },
    {
        id: 'technology',
        name: 'Technology',
        count: 156,
        icon: '/images/categories/technology.svg',
    },
    {
        id: 'business',
        name: 'Business',
        count: 134,
        icon: '/images/categories/business.svg',
    },
    {
        id: 'self-help',
        name: 'Self Help',
        count: 98,
        icon: '/images/categories/self-help.svg',
    },
    {
        id: 'children',
        name: 'Children',
        count: 267,
        icon: '/images/categories/children.svg',
    },
];

// Helper functions
export const getAllBooks = () => {
    return books;
};

export const getBookById = (id) => {
    return books.find(book => book.id === id);
};

export const getBooksByCategory = (categoryId) => {
    return books.filter(book => book.category === categoryId);
};

export const getFeaturedBooks = () => {
    return books.filter(book => book.badge === 'Bestseller' || book.badge === 'New').slice(0, 4);
};

export const getCategories = () => {
    return categories;
};

export const searchBooks = (query) => {
    const lowercaseQuery = query.toLowerCase();
    return books.filter(book =>
        book.title.toLowerCase().includes(lowercaseQuery) ||
        book.author.toLowerCase().includes(lowercaseQuery) ||
        book.description.toLowerCase().includes(lowercaseQuery)
    );
};

export const getRelatedBooks = (bookId, limit = 4) => {
    const book = getBookById(bookId);
    if (!book) return [];

    return books
        .filter(b => b.id !== bookId && b.category === book.category)
        .slice(0, limit);
};

// Mock reviews data
export const getBookReviews = (bookId) => {
    return [
        {
            id: '1',
            bookId,
            userName: 'John Doe',
            rating: 5,
            date: '2024-01-15',
            comment: 'Excellent book! Highly recommend it.',
            helpful: 23,
        },
        {
            id: '2',
            bookId,
            userName: 'Jane Smith',
            rating: 4,
            date: '2024-01-10',
            comment: 'Great read, well written and engaging.',
            helpful: 15,
        },
    ];
};