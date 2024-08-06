import React, { useCallback } from 'react';
import './Track.css';

const Track = (props) => {

    return ( // Returns what the component should display
        <div className='track'> {/* Flex container for each track component rendered */}
            <div className='track-information'> {/* Container element for the track information */}
                <h3>{props.track.name}</h3>
                <p>
                    {props.track.artist} | {props.track.album}
                </p>
            </div>
        </div>
    );
};

export default Track;