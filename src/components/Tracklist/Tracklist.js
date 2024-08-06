import React, { useCallback } from 'react';
import './Tracklist.css';

import Track from '../Track/Track';

const Tracklist = (props) => {

    return (
        <div className='tracklist'>
            {props.tracks.map(track => { // Maps each object in searchResults array
                return (
                    <Track // Displays each track component
                        track={track} // Passes track information into track prop
                        key={track.id} // Passes track key into key prop
                        onAdd={props.onAdd} // Passes addTrack function into track component.
                    />
                )
            })}
        </div>
    )
}

export default Tracklist;