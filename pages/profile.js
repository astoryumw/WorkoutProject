import React from 'react';
import Layout from '../components/MyLayout.js';
import { useCookies } from "react-cookie";

export default function Profile() {
    const [cookies] = useCookies(['user']); // this is an object
    const myThing = Object.values(cookies)[1];
    // console.log(myThing);

    return (
        <Layout>
            <h1>Hello</h1>
            <p>{myThing?.username}</p>
            <p>{myThing?.password}</p>
        </Layout>
    )
}