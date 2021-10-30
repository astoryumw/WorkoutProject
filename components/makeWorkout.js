import React, { useState, useEffect } from 'react';
import { createWorkout } from '../lib/utils';
import Layout from '../components/MyLayout.js';

export default function MakeWorkout() {
    let [count,setCount] = useState(1);
    const [input,setInput] = useState({ // is object
        "one": {
            name: "",
            difficulty: 0
        },
        "two": {
            name: "",
            difficulty: 0
        },
        "three": {
            name: "",
            difficulty: 0
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
                        obj.push(input.one.name + " " + input.one.difficulty);
                    }
                    if (input.two.name!=='' && i===1) {
                        anotherObj = input.two.name + " " + input.two.difficulty;
                        obj.push(anotherObj);
                    }
                    if (input.three.name!=='' && i===2) {
                        anotherObj = input.three.name + " " + input.three.difficulty;
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
                difficulty: input.one.difficulty
            },
            two: {
                name: input.two.name,
                difficulty: input.two.difficulty
            },
            three: {
                name: input.three.name,
                difficulty: input.three.difficulty
            }
        })
    }

    function handleWorkout1(evt) {
        setInput({
            one: {
                name: input.one.name,
                difficulty: input.one.difficulty
            },
            two: {
                name: evt.target.value,
                difficulty: input.two.difficulty
            },
            three: {
                name: input.three.name,
                difficulty: input.three.difficulty
            } 
        })
    }

    function handleWorkout2(evt) {
        setInput({
            one: {
                name: input.one.name,
                difficulty: input.one.difficulty
            },
            two: {
                name: input.two.name,
                difficulty: input.two.difficulty
            },
            three: {
                name: evt.target.value,
                difficulty: input.three.difficulty
            }
        })
    }

    function handleDifficulty(evt) {
        setInput({
            one: {
                name: input.one.name,
                difficulty: evt.target.value
            },
            two: {
                name: input.two.name,
                difficulty: evt.target.value
            },
            three: {
                name: input.three.name,
                difficulty: input.three.difficulty
            }
        })
    }

    function handleDifficulty1(evt) {
        setInput({
            one: {
                name: input.one.name,
                difficulty: input.one.difficulty
            },
            two: {
                name: input.two.name,
                difficulty: evt.target.value
            },
            three: {
                name: input.three.name,
                difficulty: input.three.difficulty
            }
        })
    }

    function handleDifficulty2(evt) {
        setInput({
            one: {
                name: input.one.name,
                difficulty: input.one.difficulty
            },
            two: {
                name: input.two.name,
                difficulty: input.two.difficulty
            },
            three: {
                name: input.three.name,
                difficulty: evt.target.value
            }
        })
    }

    // this will ultimately have:
    // estimated time to complete, difficulty, option for as many exercises as selected
    return (
        <Layout>
            <div>
                {count===1 ? (
                    <div>
                        <p>Workout: <input type="text" value={input.one.name} onChange={handleWorkout} /></p>
                        <p>Difficulty: <input type="text" value={input.one.difficulty} onChange={handleDifficulty} /></p>
                    </div>
                ) : count===2 ? (
                    <div>
                        <p>Workout: <input type="text" value={input.one.name} onChange={handleWorkout} /></p>
                        <p>Difficulty: <input type="text" value={input.one.difficulty} onChange={handleDifficulty} /></p>
                        <p>Workout: <input type="text" value={input.two.name} onChange={handleWorkout1} /></p>
                        <p>Difficulty: <input type="text" value={input.two.difficulty} onChange={handleDifficulty1} /></p>
                    </div>
                ) : count===3 ? (
                    <div>
                        <p>Workout: <input type="text" value={input.one.name} onChange={handleWorkout} /></p>
                        <p>Difficulty: <input type="text" value={input.one.difficulty} onChange={handleDifficulty} /></p>
                        <p>Workout: <input type="text" value={input.two.name} onChange={handleWorkout1} /></p>
                        <p>Difficulty: <input type="text" value={input.two.difficulty} onChange={handleDifficulty1} /></p>
                        <p>Workout: <input type="text" value={input.three.name} onChange={handleWorkout2} /></p>
                        <p>Difficulty: <input type="text" value={input.three.difficulty} onChange={handleDifficulty2} /></p>
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