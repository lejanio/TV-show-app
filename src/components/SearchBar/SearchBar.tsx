import React, { FC, useState } from 'react';
import './SearchBar.scss';

type SearchBarType = {
  getQuery: (searchValue: string) => void;
}

const SearchBar:FC<SearchBarType> = ({ getQuery }) => {
  const [searchText, setSearchText] = useState('');

  const onChange = (searchValue: string) => {
    setSearchText(searchValue);
    getQuery(searchValue);
  };

  return (
    <input
      type="text"
      placeholder="Search shows by title..."
      value={searchText}
      onChange={(e) => onChange(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;
