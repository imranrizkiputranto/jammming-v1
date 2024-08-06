import React, { useCallback } from 'react';
import './Track.css';

const Track = (props) => {
    const addTrack = useCallback( // Re render addTrack function when onAdd prop or track prop changes
        event => {
            props.onAdd(props.track); // When addTrack is called, call addTrack in onAdd with track object as an argument
        },
        [props.onAdd, props.track]
    )

    const removeTrack = useCallback(
        event => {
            props.onRemove(props.track); // When removeTrack is called, call removeTrack in onRemovee prop with track object as argument
        },
        [props.onRemove, props.track]
    )

    const renderAction = () => {
        if (props.isRemoval) { // if isRemoval is true, render the - button
            return (
                <button
                className='track-action'
                onClick={removeTrack}> {/* When the - button is clicked, call the removeTrack function above */}
                    -
                </button>
            )
        }

        return (
            <button 
            className='track-action'
            onClick={addTrack}> {/* When the + button is clicked, call the addTrack function above */}
                +
            </button>
        )
    }

    return ( // Returns what the component should display
        <div className='track'> {/* Flex container for each track component rendered */}
            <div className='track-information'> {/* Container element for the track information */}
                <h3>{props.track.name}</h3>
                <p>
                    {props.track.artist} | {props.track.album}
                </p>
            </div>
            {renderAction()}
        </div>
    );
};

export default Track;