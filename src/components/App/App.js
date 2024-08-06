import './App.css';
import React from 'react';
import { useState } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

const App = () => {

  const searchResults = [
    {
        name: 'Dawn FM',
        artist: 'The Weeknd',
        album: 'Dawn FM',
        id: 1
    },
    {
        name: 'Gasoline',
        artist: 'The Weeknd',
        album: 'Dawn FM',
        id: 2
    },
    {
        name: 'How Do I Make You Love Me',
        artist: 'The Weeknd',
        album: 'Dawn FM',
        id: 3
    },
    {
        name: 'Take My Breath',
        artist: 'The Weeknd',
        album: 'Dawn FM',
        id: 4
    },
  ];
  
  return (
    <div>
      <header>
        <h1>Ja<span className='highlight'>mmm</span>ing</h1>
      </header>
      <div className='body'>
        <SearchBar/>

        <div className='playlist-container'>
          <SearchResults /* Render SearchResults component */
            searchResults={searchResults} /* Pass in prop that takes in searchResults array */
          />
        </div>
      </div>
    </div>
  );
};

export default App;
