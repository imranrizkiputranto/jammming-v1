import React, { useCallback } from 'react';
import './Tracklist.css';

import Track from '../Track/Track';

const Tracklist = (props) => {

    return (
        <div className='tracklist'>
            {props.tracks.map(track => {
                return (
                    <Track // Displays each track component
                        track={track}
                        key={track.id}
                    />
                )
            })}
        </div>
    )
}

export default Tracklist;