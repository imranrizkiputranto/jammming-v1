// To use the Spotify API with Jammming, you need to get a user’s Spotify access token to make Spotify API requests.
// Create a JavaScript module that will handle the logic for getting an access token and using it to make requests. The method should have a way to get a user’s access token and store it.

// const clientId = '873792c981c34d8091cdc0a5fe2fed6d';
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
            // Redirect user to authorise application
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}&show_dialog=true`;
            window.location.href = accessUrl;
        }
    }

    

}