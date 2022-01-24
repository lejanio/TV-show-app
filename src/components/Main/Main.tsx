import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Main.scss';
import ShowGrid from '../ShowGrid/ShowGrid';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';

export type Item = {
  show: {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  };
  type: string;
  summary: string;
  }
}

// this regex is intended for finding html tags in the summary text that is received from API

export const tagReplaceRegex = /(<([^>]+)>)/ig;

const Main = () => {
  const [filteredShows, setFilteredShows] = useState<Item[]>([]);
  const [query, setQuery] = useState('');

  const fetchItems = async () => {
    const filteredResult = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);

    setFilteredShows(filteredResult.data);
  };

  const handleSearch = () => {
    fetchItems();
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="form--container"
      >
        <SearchBar
          getQuery={(searchValue) => setQuery(searchValue)}
        />
        <Button
          type="submit"
        >
          Search
        </Button>
      </form>
      <div>
        {(filteredShows.length > 0)
              && (
              <ShowGrid
                items={filteredShows}
              />
              )}
      </div>
    </>
  );
};

export default Main;
