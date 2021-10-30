import 'isomorphic-fetch';

function getPosts() {
    return fetch('http://localhost:3001/workouts').then(function(resp) {
        return resp.json();
    });
}

function handleError(err) {
    console.warn(err);
    return null;
}

module.exports = {
    getList: function() {
        // console.log(getPosts()); // here the promise is correct
        return getPosts().catch(handleError);
    }
}