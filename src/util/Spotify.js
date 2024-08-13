// To use the Spotify API with Jammming, you need to get a user’s Spotify access token to make Spotify API requests.
// Create a JavaScript module that will handle the logic for getting an access token and using it to make requests. The method should have a way to get a user’s access token and store it.

let clientId;
const redirectUri = 'http://localhost:3000/';
const scope = 'playlist-modify-public'
let accessToken;

const Spotify = { // Object containing all the necessary methods
    // Method to set new Client ID
    setClientId(newClientId) {
        clientId = newClientId;
    },

    // Method to retrieve access token
    getAccessToken() {
        if (accessToken) { // If accessToken is truthy, return it.
            return accessToken;
        }

        // Checking for token match in URL fragment
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/); // On current URL, see if there is a fragment following the pattern before the next & character.
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/); // On current URL, see if there is a fragment showing the expiry time
        if (accessTokenMatch && expiresInMatch) { // If accessTokenMatch and expiresInMatch is truthy
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            // Clear the access token and URL parameters after the token expires
            window.setTimeout(() => accessToken = '', expiresIn * 1000)
            window.history.pushState('AccessToken', null, '/'); // Clears URL parameters
            
            return accessToken;
        } else if (clientId) { // If only ClientId is truthy
            // Redirect user to authorise application before logging in
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}&show_dialog=true`;
            window.location.href = accessUrl;
        }
    },

    // Method to search for tracks based on search term on search bar
    async search(term) {
        const accessToken = Spotify.getAccessToken(); // executing getAccessToken method
        try {
            const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, { // Use Spotify API to search for track, input term in URL
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            const jsonResponse = await response.json() // Convert response to json object
            if (!jsonResponse.tracks) { // If no tracks are present, return an empty array
                return [];
            }

            // Return an array of tracks. Each track is an object containing the relevant properties
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists.map(artist => `${artist.name} `),
                album: track.album.name,
                uri: track.uri
            }));

        } catch (error) {
            console.log(error);
            alert(error);
            return [];
        }
    },

    // Method to save playlist to user account
    async savePlaylist (playlistName, trackURIs) {
        if (!playlistName || !trackURIs.length) {// If playlistName is empty or no tracks are present
            console.log('Playlist Name or Tracks is missing.')
            alert('Playlist Name or Tracks is missing.')
            return; // Return nothing
        };

        const accessToken = Spotify.getAccessToken(); // Executing getAccessToken function
        if (!accessToken) {
            console.log('Access token is missing.');
            alert('Access token is missing.');
            return;
        };
        
        const headers = {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        };

        try {
            const userResponse = await fetch('https://api.spotify.com/v1/me', {headers}); // Request user spotify username
            const userData = await userResponse.json();
            const userId = userData.id;

            const createPlaylistResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, { // Create new playlist for user
                method: 'POST', 
                headers: headers,
                body: JSON.stringify({ name: playlistName, description: 'My New Playlist' })
            })

            const playlistData = await createPlaylistResponse.json();
            const playlistId = playlistData.id;

            const addTracksResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, { // Add tracks to playlist
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ uris: trackURIs })
            });

            console.log("Track URIs:", trackURIs);
            
            if (!addTracksResponse.ok) {
                const errorData = await addTracksResponse.json();
                console.error('Failed to add tracks:', errorData);
                alert(`Failed to save tracks. Error: ${errorData.error.message}`)
                return;
            }

            console.log('Playlist saved to spotify');
            alert('Playlist saved to spotify');    

        } catch (error) {
            console.error(`Error saving playlist`, error);
        };
    }
}

export default Spotify;