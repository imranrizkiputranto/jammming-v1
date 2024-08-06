import React from "react";
import './SearchResults.css'
import Tracklist from "../Tracklist/Tracklist";

const SearchResults = (props) => { // Create SearchResults component

    return ( // Returns what the component should display
        <div className="SearchResults">
            <h2>Results</h2>
            <Tracklist // Displays container of loaded tracks from API
                tracks={props.searchResults} // pass the searchResults array from App.js into the Tracklist component
            />
        </div>

    );
};

export default SearchResults;