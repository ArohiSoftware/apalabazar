import React, { useState, useEffect } from 'react';
import './SearchDashboard.css';
import axios from 'axios'; // Assuming you have axios installed for API requests

const SearchDashboard = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 10;

    // Simulated product database
    const productDatabase = [
        { id: 1, name: 'iPhone 13', brand: 'Apple', category: 'Electronics' },
        { id: 2, name: 'Galaxy S21', brand: 'Samsung', category: 'Electronics' },
        { id: 3, name: 'MacBook Air', brand: 'Apple', category: 'Electronics' },
        { id: 4, name: 'Yoga Laptop', brand: 'Lenovo', category: 'Electronics' },
        { id: 5, name: 'XPS 13', brand: 'Dell', category: 'Electronics' },
        { id: 6, name: 'Inspiron 15', brand: 'Dell', category: 'Electronics' },
        { id: 7, name: 'Pixel 6', brand: 'Google', category: 'Electronics' },
        { id: 8, name: 'PlayStation 5', brand: 'Sony', category: 'Gaming' },
        { id: 9, name: 'Xbox Series X', brand: 'Microsoft', category: 'Gaming' },
        { id: 10, name: 'Switch', brand: 'Nintendo', category: 'Gaming' },
        // Add more products as needed
    ];

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setSearchResults([]);
            return;
        }

        setLoading(true);
        axios.get('https://api.example.com/search?q=${encodeURIComponent(searchQuery)')
            .then(response => {
                setSearchResults(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
                setLoading(false);
            });
    }, [searchQuery]);

    const handleSearch = (event) => {
        event.preventDefault();
        // Perform search logic here if needed
        setSearchResults([]); // Clear previous results
    };

    const fetchResults = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        return productDatabase.filter(product => 
            product.name.toLowerCase().includes(lowerCaseQuery) || 
            product.brand.toLowerCase().includes(lowerCaseQuery) ||
            product.category.toLowerCase().includes(lowerCaseQuery)
        );
    };

    const displayResults = (results) => {
        const start = (currentPage - 1) * resultsPerPage;
        const end = start + resultsPerPage;
        return results.slice(start, end);
    };

    const createPagination = (totalResults) => {
        const totalPages = Math.ceil(totalResults / resultsPerPage);
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    };

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const showSuggestions = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        return productDatabase.filter(product => 
            product.name.toLowerCase().includes(lowerCaseQuery)
        ).slice(0, 5); // limit to 5 suggestions
    };

    const selectSuggestion = (suggestion) => {
        setSearchQuery(suggestion);
        setSearchResults(fetchResults(suggestion));
    };

    return (
        <div className="search-container">
            <form id="search-form" onSubmit={handleSearch}>
                <input
                    type="text"
                    id="search-input"
                    placeholder="Search for products, brands and more"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onInput={(e) => setSearchResults(fetchResults(e.target.value))}
                />
                <button type="submit">Search</button>
            </form>
            <div id="suggestions">
                {showSuggestions(searchQuery).map((suggestion, index) => (
                    <div key={index} onClick={() => selectSuggestion(suggestion.name)}>
                        {suggestion.name}
                    </div>
                ))}
            </div>

            <div id="results-container">
                <h3>Search Results</h3>
                <div id="results">
                    {displayResults(searchResults).map(result => (
                        <div key={result.id}>
                            <p>{result.name} by {result.brand} in {result.category}</p>
                        </div>
                    ))}
                </div>
                <div id="pagination">
                    {createPagination(searchResults.length).map(page => (
                        <button
                            key={page}
                            className="pagination-button"
                            onClick={() => goToPage(page)}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchDashboard;