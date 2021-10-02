import React from 'react';
import jsCookie from 'js-cookie';
// import { useLocation } from 'react-router-dom';
// import { useHistory, withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";

// need to lear how to properly transfer this variable
export default function home() {
    // const user = jsCookie.get("user");
    const [cookies] = useCookies(['user']); // this is an object
    console.log(Object.values(cookies)[1]);
    // const list = Object.entries(cookies)[1];
    // console.log(list);
    // const str = JSON.stringify(Object.entries(cookies)[1]);
    // console.log(str);

    const [name] = Object.values(cookies);
    console.log(name);

    

    return (
        <div>
            <h1>Welcome to the fake homepage!</h1>
            
        </div>
    )
}