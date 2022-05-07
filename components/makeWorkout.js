import React, { useState, useEffect } from 'react';
import { createWorkout } from '../lib/utils';
import Layout from '../components/MyLayout.js';

export default function MakeWorkout() {
    let [count,setCount] = useState(1);
    const [input,setInput] = useState({ // is object
        "one": {
            name: "",
            reps: 0
        },
        "two": {
            name: "",
            reps: 0
        },
        "three": {
            name: "",
            reps: 0
        }
    });
    const [clicked,setClicked] = useState(false);
    

    useEffect(() => {
        if (clicked) {
            // send everything over to createWorkout
            const sendData = async () => {
                // console.log(input.one);
                // console.log(input.two);
                // check here how many things were entered, then send that amount over to server

                var obj = [];
                var anotherObj = [];
                for (var i=0; i<3; i++) { // do this with each object and add to array
                    if (input.one.name!=='' && i===0) {
                        obj.push(input.one.name + " " + input.one.reps);
                    }
                    if (input.two.name!=='' && i===1) {
                        anotherObj = input.two.name + " " + input.two.reps;
                        obj.push(anotherObj);
                    }
                    if (input.three.name!=='' && i===2) {
                        anotherObj = input.three.name + " " + input.three.reps;
                        obj.push(anotherObj);
                    }
                }
                // console.log(input.two.name);
                // console.log(obj);
                // console.log(anotherObj);

                const send = await createWorkout(obj);
                // console.log(send);
                // console.log(input);
                // console.log(typeof(input));
            }
            sendData();
        }
    }, [clicked]);

    function handleWorkout(evt) {
        setInput({
            one: {
                name: evt.target.value,
                reps: input.one.reps
            },
            two: {
                name: input.two.name,
                reps: input.two.reps
            },
            three: {
                name: input.three.name,
                reps: input.three.reps
            }
        })
    }

    function handleWorkout1(evt) {
        setInput({
            one: {
                name: input.one.name,
                reps: input.one.reps
            },
            two: {
                name: evt.target.value,
                reps: input.two.reps
            },
            three: {
                name: input.three.name,
                reps: input.three.reps
            } 
        })
    }

    function handleWorkout2(evt) {
        setInput({
            one: {
                name: input.one.name,
                reps: input.one.reps
            },
            two: {
                name: input.two.name,
                reps: input.two.reps
            },
            three: {
                name: evt.target.value,
                reps: input.three.reps
            }
        })
    }

    function handleReps(evt) {
        setInput({
            one: {
                name: input.one.name,
                reps: evt.target.value
            },
            two: {
                name: input.two.name,
                reps: evt.target.value
            },
            three: {
                name: input.three.name,
                reps: input.three.reps
            }
        })
    }

    function handleReps1(evt) {
        setInput({
            one: {
                name: input.one.name,
                reps: input.one.reps
            },
            two: {
                name: input.two.name,
                reps: evt.target.value
            },
            three: {
                name: input.three.name,
                reps: input.three.reps
            }
        })
    }

    function handleReps2(evt) {
        setInput({
            one: {
                name: input.one.name,
                reps: input.one.reps
            },
            two: {
                name: input.two.name,
                reps: input.two.reps
            },
            three: {
                name: input.three.name,
                reps: evt.target.value
            }
        })
    }

    // this will ultimately have:
    // estimated time to complete, reps, option for as many exercises as selected
    return (
        <Layout>
            <div align="center">
                {count===1 ? (
                    <div>
                        <p>Workout: <input type="text" value={input.one.name} onChange={handleWorkout} /></p>
                        <p>Reps*Amount: <input type="text" value={input.one.reps} onChange={handleReps} /></p>
                    </div>
                ) : count===2 ? (
                    <div>
                        <p>Workout: <input type="text" value={input.one.name} onChange={handleWorkout} /></p>
                        <p>Reps*Amount: <input type="text" value={input.one.reps} onChange={handleReps} /></p>
                        <p>Workout: <input type="text" value={input.two.name} onChange={handleWorkout1} /></p>
                        <p>Reps*Amount: <input type="text" value={input.two.reps} onChange={handleReps1} /></p>
                    </div>
                ) : count===3 ? (
                    <div>
                        <p>Workout: <input type="text" value={input.one.name} onChange={handleWorkout} /></p>
                        <p>Reps*Amount: <input type="text" value={input.one.reps} onChange={handleReps} /></p>
                        <p>Workout: <input type="text" value={input.two.name} onChange={handleWorkout1} /></p>
                        <p>Reps*Amount: <input type="text" value={input.two.reps} onChange={handleReps1} /></p>
                        <p>Workout: <input type="text" value={input.three.name} onChange={handleWorkout2} /></p>
                        <p>Reps*Amount: <input type="text" value={input.three.reps} onChange={handleReps2} /></p>
                    </div>
                ) : (
                    <p></p>
                )}

                <button onClick={() => setClicked(true)}>Create</button>
                <button onClick={() => setCount(count+1)}>Add Workout</button>
            </div>
        </Layout>
    )
}