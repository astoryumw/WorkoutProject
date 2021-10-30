import 'isomorphic-fetch';

// login
export function loginUser(username,password) {
    // console.log(username + " " + password);
    return fetch(`http://localhost:3001/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    }).then(function (response) {
        // console.log(response);
        return response;
    });
}

// sign up
export function signUpUser(username,password) {
    // console.log("I'm here");
    // console.log(username);
    return fetch(`http://localhost:3001/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    }).then(function (response) {
        // console.log(response);
        return response;
    });
}

export function createWorkout(input) {
    console.log(input); // this has correct value
    return fetch(`http://localhost:3001/addWorkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
    }).then(function (response) {
        return response;
    })
}