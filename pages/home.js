import React, { useEffect } from 'react';
import jsCookie from 'js-cookie';
// import { useLocation } from 'react-router-dom';
// import { useHistory, withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";
import Layout from '../components/MyLayout.js';

// need to lear how to properly transfer this variable
export default function home() {
    // const user = jsCookie.get("user");
    const [cookies] = useCookies(['user']); // this is an object
    const myThing = Object.values(cookies)[1];
    
    console.log(myThing);
    console.log(typeof(myThing)); // works as object

    console.log(myThing?.username);
    console.log(myThing?.password);

    
    // todo
    // build a new table in database, maybe mongoDB?
    // allow users to add their own workouts
    return (
        <Layout>
            <div>
                <h1>Welcome to the fake homepage!</h1>
                {myThing ? (
                    <h1>{myThing.username}</h1>
                ) : (
                    <h1>New phone who dis</h1>
                )}
            </div>
        </Layout>
    )
}