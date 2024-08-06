import React, { useCallback } from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

const Playlist = props => {

    return ( // Displays what the Playlist component looks like
        <div className='playlist'>
            <input // Create input value field for user's playlist name
                defaultValue={"New Playlist"}
            />
            <Tracklist
                tracks={props.playlistTracks}
            /> 
            <button className='playlist-save'> {/* Save to Spotify button */}
                Save To Spotify
            </button>
        </div>
    )
};

export default Playlist;