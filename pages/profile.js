import React from 'react';
import Layout from '../components/MyLayout.js';
import { useCookies } from "react-cookie";

export default function Profile() {
    const [cookies] = useCookies(['user']); // this is an object
    const myThing = Object.values(cookies);
    console.log(myThing);

    return (
        <Layout>
            <h1>Hello</h1>
            <p>{myThing[0]?.username}</p>
            <p>{myThing[0]?.password}</p>
        </Layout>
    )
}