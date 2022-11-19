import React, { useState } from 'react';
import '../App.css';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <input
          value={term}
          onChange={handleChange}
          placeholder='Enter Search Term'
        />
      </form>
    </div>
  );
}

export default SearchBar;
