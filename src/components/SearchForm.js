import React from 'react';

const SearchForm = ({ searchTerm, setSearchTerm, handleSearch, handleReset }) => {
    return (
        <form className="search-form flex items-center justify-center space-x-4 mt-6 px-4 py-8" onSubmit={handleSearch}>
            <input
                className="search-input px-4 py-2 w-80 border border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-lg shadow-md focus:outline-none"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by status, original_launch, or type"
            />
            <button
                className="search-button px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
                type="submit"
            >
                Search
            </button>
            <button
                className="reset-button px-6 py-2 bg-gray-300 text-gray-600 rounded-lg shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition duration-300"
                type="button"
                onClick={handleReset}
            >
                Reset
            </button>
        </form>
    );
};

export default SearchForm;
