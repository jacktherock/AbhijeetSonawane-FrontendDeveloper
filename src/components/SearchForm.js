import React from 'react';

const SearchForm = ({ searchTerm, setSearchTerm, handleSearch, handleReset }) => {
    return (
        <form className="search-form" onSubmit={handleSearch}>
            <input
                className="search-input"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by status, original_launch, or type"
            />
            <button className="search-button" type="submit">Search</button>
            <button className="reset-button" type="button" onClick={handleReset}>Reset</button>
        </form>
    );
};

export default SearchForm;
