import 'isomorphic-fetch';

function getUser(username) {
    return fetch (`http://localhost:3001/user-info?username=${username}`).then(function(resp) {
        return resp.json();
    });
}

function handleError(err) {
    console.warn(err);
    return null;
}

module.exports = {
    getInfo: function(username) {
        return getUser(username).catch(handleError);
    }
}