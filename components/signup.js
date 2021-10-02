import React, { useState, useEffect } from 'react';
import { signUpUser } from "../lib/utils";

export default function SignUp() {
    let [user,setUser] = useState({
        username: "",
        password: ""
    })
    const [signUpTry,setSignUpTry] = useState(false);

    useEffect(() => {
        if (signUpTry) {
            const signup = signUpUser(user.username,user.password);
            // console.log(signup);
        }
    },[signUpTry]);

    function handleUsername(evt) {
        setUser({
            username: evt.target.value,
            password: user.password
        })
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
            <button onClick={() => setSignUpTry(true)}>Sign Up</button>
        </div>
    )
}