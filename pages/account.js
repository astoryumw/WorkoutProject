import React, {useState, useEffect } from 'react';
import Layout from '../components/MyLayout.js';
import { useCookies } from "react-cookie";

export default function Account(){
    const [cookies] = useCookies(['user']); // this is an object
    const myThing = Object.values(cookies)[1];
    // console.log(myThing);
    const [account,setAccount] = useState({
        username: "",
        password: ""
    })

    // can change account based on an id will need to add to postgresql database, add a serial number to each


    function handleUsername(evt) {
        setAccount({
            username: evt.target.value,
            password: account.password
        })
    }

    function handlePassword(evt) {
        setAccount({
            username: account.username,
            password: evt.target.value
        })
    }

    function handleUpdate() {

    }

    return (
        <Layout>
            <h3>Enter information you wish to change below.</h3>
            <p>Username: <input type="text" value={account.username} onChange={handleUsername} /></p>
            <p>Password: <input type="password" value={account.password} onChange={handlePassword} /></p>
            <button>Update</button>
        </Layout>
    )
}