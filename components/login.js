import React, { useState, useEffect } from 'react';
import { loginUser } from '../lib/utils';

export default function Login() {
    let [user,setUser] = useState({
        username: "",
        password: ""
    });
    const [loggedInTry,setLoggedInTry] = useState(false);

    // set loggedIn to true when user is logged in, then go to home page, make sure username and password match
    useEffect(() => {
        // console.log(user.username + " " + user.password);
        loginUser(user.username,user.password);
    }, [loggedInTry]);

    function handleUsername(evt) {
        setUser({
            username: evt.target.value,
            password: user.password 
        });
    }

    function handlePassword(evt) {
        setUser({
            username: user.username,
            password: evt.target.value
        })
    }

    return (
        <div>
            <p>Username: <input type="text" value={user.username} onChange={handleUsername} /></p>
            <p>Password: <input type="text" value={user.password} onChange={handlePassword} /></p>
            <button onClick={() => setLoggedInTry(true)}>Log In</button>
        </div>
    )
}