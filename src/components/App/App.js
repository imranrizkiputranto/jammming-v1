import './App.css';
import React, { useCallback } from 'react';
import { useState } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

const App = () => {

  const[searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");

  // Implementing Search Functionality
  const search = term => {
    Spotify.search(term).then(searchResults => {
      setSearchResults(searchResults);
    });
  }; 

  // Implementing Playlist Renaming
  const updatePlaylistName = useCallback(name => { // Re Render function object on first mount
    setPlaylistName(name); // Set playlistname to name argument
  }, []);

  // Implementing add Track functionality
  const addTrack = useCallback( // Hook to only re-render function object when playlistTrack changes
    track => {
      if (playlistTracks.some(savedTrack => savedTrack.id === track.id)) { // If track is already saved in playlistTracks
        return;
      }

      setPlaylistTracks(prevTracks => [...prevTracks, track]) // if not, add track to playlist
    },
    [playlistTracks]
  );

  // Implementing remove track functionality
  const removeTrack = useCallback(
    track => { // Re render function on first component mount
      setPlaylistTracks(prevTracks => { // Set playlistTrack array to filter out the track selected
        return prevTracks.filter(currentTrack => currentTrack.id !== track.id) // Create a new array where the selected track is filtered out from the old array
      });
    },
    []);

    // Implementing Save to Playlist feature
    const savePlaylist = useCallback(() => { // Only re renders if playlistName and playlistTracks is re rendered
      if(playlistTracks.length === 0) {
        return; // if playlistTracks is empty, do not save to Spotify
      }

      const trackURIs = playlistTracks.map(track => track.uri); // get uri of each track from the tracks saved to the playlist

      // When playlist is saved, reset playlistName, playlistTracks and searchResults
      Spotify.savePlaylist(playlistName, trackURIs).then(() => {
        setPlaylistName("New Playlist"); 
        setPlaylistTracks([]);
        setSearchResults([]);
      });
    }, [playlistName, playlistTracks]);
  
  return (
    <div>
      <header>
        <h1>Ja<span className='highlight'>mmm</span>ing</h1>
      </header>
      <div className='body'>
        <SearchBar
          onSearch={search} // Passes search function to onSearch prop
        /> {/* Renders the search bar component */}

        <div className='playlist-container'>
          <SearchResults /* Render SearchResults component */
            searchResults={searchResults} //Pass in prop that takes in searchResults array
            onAdd={addTrack} // Pass addTrack function to the SearchResults component
          />

          <Playlist 
            playlistTracks={playlistTracks} // Pass in prop that takes in the tracks added to the playlist
            playlistName={playlistName} // pass in prop that takes in the playlist name
            onRemove={removeTrack} // pass in prop that takes in the removeTrack function. Can call when we want
            onNameChange={updatePlaylistName} // Pass prop that takes in updatePlaylistName function
            onSave={savePlaylist} // Pass prop that takes in savePlaylist function
          />
        </div>
      </div>
    </div>
  );
};

export default App;
