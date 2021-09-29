import "isomorphic-fetch";

// login
export function loginUser(username,password) {
    return fetch(`http://localhost:3001/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    })
}

// sign up
export function signUpUser(username,password) {
    return fetch(`http://localhost:3001/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    })
}