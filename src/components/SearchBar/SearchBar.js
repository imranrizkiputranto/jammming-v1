import React, { useState, useCallback} from 'react';
import './SearchBar.css';

const SearchBar = (props) => { // Create React component

    return ( // Return what the component will display
        <div className='searchbar'>
            <input // Input field for user
                placeholder='Enter a Song Title'
            />

            <button // Search button
                className='searchbutton'>
                SEARCH
             </button>
        </div>
    );
};

export default SearchBar;