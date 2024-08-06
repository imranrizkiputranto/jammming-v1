import React, { useCallback } from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

const Playlist = props => {
    const handleNameChange = useCallback( // Re render when updatePlaylistName function re renders
        event => {
            props.onNameChange(event.target.value) // Call updatePlaylistName function with current input value
        }, [props.onNameChange]
    )

    return ( // Displays what the Playlist component looks like
        <div className='playlist'>
            <input // Create input value field for user's playlist name
                defaultValue={"New Playlist"}
                onChange={handleNameChange} // When the value changes, call the handleNameChange function
            />
            <Tracklist
                tracks={props.playlistTracks} // Passes playlistTracks array to the tracks prop in the Tracklist component
                onRemove={props.onRemove} // Pass remmoveTrack function in App.js to the Tracklist component
                isRemoval={true} // Set isRemoval to true when track is in playlist
            /> 

            <button className='playlist-save'> {/* Save to Spotify button */}
                Save To Spotify
            </button>
        </div>
    )
};

export default Playlist;