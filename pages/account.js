import React, {useState, useEffect } from 'react';
import Layout from '../components/MyLayout.js';
import { useCookies } from "react-cookie";
import { postPhoto } from '../lib/utils';

export default function Account(){
    const [cookies] = useCookies(['user']); // this is an object
    const myThing = Object.values(cookies)[1];
    // console.log(myThing);
    const [account,setAccount] = useState({
        username: "",
        password: ""
    });
    const [profilePhoto,setProfilePhoto] = useState("");
    const [clicked,setClicked] = useState(false);

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

    // puts the image in the variable
    function handleImage(evt) {
        setProfilePhoto(evt.target.value);
    }

    useEffect(() => {
        
        if (clicked) {
            console.log("Clicked");
            const sendImage = async () => {
                // console.log("sendImage");
                const send = await postPhoto(profilePhoto);
            };
            sendImage();
        }
    }, [clicked]);

    return (
        <Layout>
            <h3>Enter information you wish to change below.</h3>
            <p>Username: <input type="text" value={account.username} onChange={handleUsername} /></p>
            <p>Password: <input type="password" value={account.password} onChange={handlePassword} /></p>
            <p>Select new profile picture: <input type="file" value={profilePhoto} onChange={handleImage} /></p>
            <button onClick={() => setClicked(true)}>Upload</button>
            <button>Update</button>
        </Layout>
    )
}