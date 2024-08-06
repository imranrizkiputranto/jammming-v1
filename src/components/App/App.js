import './App.css';
import React from 'react';
import { useState } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

const App = () => {

  let [searchResults, setSearchResults] = useState([]);
  searchResults = [
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

  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");

  
  return (
    <div>
      <header>
        <h1>Ja<span className='highlight'>mmm</span>ing</h1>
      </header>
      <div className='body'>
        <SearchBar/> {/* Renders the search bar component */}

        <div className='playlist-container'>
          <SearchResults /* Render SearchResults component */
            searchResults={searchResults} //Pass in prop that takes in searchResults array
          />
          <Playlist 
            playlistTracks={playlistTracks} // Pass in prop that takes in the tracks added to the playlist
            playlistName={playlistName} // pass in prop that takes in the playlist name
          />
        </div>
      </div>
    </div>
  );
};

export default App;
