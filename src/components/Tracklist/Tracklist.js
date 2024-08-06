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
                        onRemove={props.onRemove} // Passes removeTrack function into track component.
                        isRemoval={props.isRemoval} // Sets current isRemoval value to Track component. (Depends if it is in Playlist or SearchResult)
                    />
                )
            })}
        </div>
    )
}

export default Tracklist;