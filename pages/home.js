import React, { useEffect, useState } from 'react';
import jsCookie from 'js-cookie';
// import { useLocation } from 'react-router-dom';
// import { useHistory, withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";
import Layout from '../components/MyLayout.js';
import { getList } from "../lib/getWorkouts";

// need to lear how to properly transfer this variable
export default function home() {
    // const user = jsCookie.get("user");
    const [cookies] = useCookies(['user']); // this is an object
    const myThing = Object.values(cookies)[1];
    const [info,setInfo] = useState({
        workout: []
    });
    const [value,setValue] = useState(false);
    
    
    // console.log(myThing);
    // console.log(typeof(myThing)); // works as object

    // console.log(myThing?.username);
    // console.log(myThing?.password);

    // should show the workouts upon page load
    // in promise, promiseresult, workout, how to call?
    useEffect(() => {
        const fetchData = async () => {
            const list = await getList();
            setValue(true);
            // console.log(list); // each element is correct here
            // just made a seperate array because no previousState in functional components
            var justBecause = [];
            for (var i=0; i<list.workout.length; i++) {
                justBecause = justBecause + list.workout[i].name + " " + list.workout[i].difficulty + "\n";
                // console.log(list.workout[i].name);
            }
            setInfo({
                workout: justBecause.split('\n').map(str=><p>{str}</p>)
            });
            // console.log(list.workout[0]);
        }
        fetchData();
    }, [value]);

    
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
                {info ? (
                    <div>
                        <p>{info.workout}</p>
                    </div>
                ) : (
                    <h1>Ahhh I'm going to kill myself! I'm going to kill myself and it's your fault!</h1>
                )}
                
            </div>
        </Layout>
    )
}