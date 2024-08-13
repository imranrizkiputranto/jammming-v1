import React, { useState } from 'react';
import './Login.css';


const Login = props => {
    const [inputClientId, setInputClientId] = useState(''); // Set initial state of client ID

    const checkLoginInput = () => { // If client ID input value is not falsy
        if (inputClientId) {
            props.onLogin(inputClientId); // Execute handleLogin function from App.js
        } else {
            alert('Please enter a valid Client ID');
        }
    };

    return (
        <div className='Login'>
            <h2>Login to Spotify</h2>
            <input
                type="text"
                placeholder='Enter Your Spotify Client ID'
                value={inputClientId} // Value of input is the inputClientId variable
                onChange={event => setInputClientId(event.target.value)} // Every time the value changes, update the state of InputClientId
            />
            <button onClick={checkLoginInput}>Log In</button> {/*Calls check login input function when the button is clicked */}
        </div>
    )
}

export default Login;