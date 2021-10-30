import React, { useState, useEffect } from 'react';
import { loginUser } from '../lib/utils';
import { getInfo } from '../lib/getUser';
import Router, { useRouter } from "next/router";
import { useHistory, withRouter } from "react-router-dom";
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import { useNavigate } from 'react-router-dom';
import jsCookie from 'js-cookie';
import { useCookies } from "react-cookie";

export default function Login() {
    let [user,setUser] = useState({
        username: "",
        password: ""
    });
    let [account,setAccount] = useState({
        username: "",
        password: ""
    });
    const [loggedInTry,setLoggedInTry] = useState(false);
    const [validUser,setValidUser] = useState(false);
    // const history = useHistory();
    // const router = useRouter();
    // const navigate = useNavigate();
    const [cookies, setCookie] = useCookies();

    useEffect(() => {
        if (validUser) {
            // if logged in correctly send it to next page
            // console.log(account.username);

            // console.log(typeof(account)); // it's made as an object
            setCookie(user, account, { path: '/' }); // via path accessible everywhere
            Router.replace("/home");
        }
    }, [validUser])

    async function handleLogin() {
        try {
            // i need to test if username is there
            const login = await loginUser(user.username,user.password); 
            // console.log(login);
            if (login.status === 200) {
                const myUser = await getInfo(user.username); // get user info
                // console.log(myUser);
                // console.log("username: " + myUser[0].username); // add both of these objects to the account
                // console.log("password: " + myUser[0].password);
                setAccount({
                    username: myUser[0].username,
                    password: myUser[0].password
                });
                // console.log(account);
                setValidUser(true);
            } else if (login.status === 401) {
                setValidUser(false);
            } else {
                console.log("idk man");
            }

        } catch (err) {
            console.log(err);
        }
    }

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

    // onClick={() => setLoggedInTry(true)}
    return (
        <div>
            <p>Username: <input type="text" value={user.username} onChange={handleUsername} /></p>
            <p>Password: <input type="password" value={user.password} onChange={handlePassword} /></p>
            <button onClick={handleLogin}>Log In</button>
        </div>
    )
}