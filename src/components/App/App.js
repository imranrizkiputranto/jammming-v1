import './App.css';
import React from 'react';
import { useState } from 'react';

import SearchBar from '../SearchBar/SearchBar';

const App = () => {

  let searchResults = [
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

        </div>
      </div>
    </div>
  );
};

export default App;
