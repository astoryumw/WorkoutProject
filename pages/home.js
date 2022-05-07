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
            console.log(list.workout[0].workout[0]); // each element is correct here
            // just made a seperate array because no previousState in functional components
            var justBecause = [];
            var workoutSet = [];
            for (var i=0; i<list.workout.length; i++) {
                for (var u=0; u<list.workout[i].workout[0].length; u++) {
                    if (u+1===list.workout[i].workout[0].length) {
                        workoutSet = workoutSet + list.workout[i].workout[0][u];
                    } else {
                        workoutSet = workoutSet + list.workout[i].workout[0][u] + ", ";
                    }
                    
                }
                justBecause = justBecause + "[" + workoutSet + "]" + "\n";
                workoutSet = [];
            }
            setInfo({
                workout: justBecause.split('\n').map(str=><p>{str}</p>)
            });
            // console.log(list.workout[0]);
        }
        fetchData();
    }, [value]);

    return (
        <Layout>
            <div>
                
                {/* {myThing ? (
                    <h1>{myThing.username}</h1>
                ) : (
                    <h1>New phone who dis</h1>
                )} */}
                <h1 align="center" >Workouts</h1>
                {info ? (
                    <div align="center" class="p-2 bg-light border">
                        <p>{info.workout}</p>
                    </div>
                ) : (
                    <h1>Ahhh I'm going to kill myself! I'm going to kill myself and it's your fault!</h1>
                )}
                
            </div>
        </Layout>
    )
}