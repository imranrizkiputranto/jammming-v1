import React, { useState, useCallback} from 'react';
import './SearchBar.css';

const SearchBar = (props) => { // Create React component
    const [term, setTerm] = useState(''); // Initialises Search State

    const handleTermChange = useCallback(event => {
        setTerm(event.target.value);
    }, []); // Updates term with search bar input on every change

    const search = useCallback(() => {
        props.onSearch(term); // Calls the Search function in App.js with Term set above
    }, [props.onSearch, term]);

    return ( // Return what the component will display
        <div className='searchbar'>
            <input // Input field for user
                placeholder='Enter a Song Title'
                onChange={handleTermChange} // Changes value of term whenever the value of input changes
            />

            <button // Search button
                className='searchbutton'
                onClick={search} /* Executes search function when button is clicked */>
                SEARCH
             </button>
        </div>
    );
};

export default SearchBar;