import React, { useState, useEffect } from 'react';
import { useCookies } from "react-cookie";
import Router, { useRouter } from "next/router";

export default function Logout() {
    const [clicked,setClicked] = useState(false);
    const [cookies, setCookie] = useCookies();

    useEffect(() => {
        if (clicked) {
            setCookie({},{}, { path: "/" });
            Router.replace("/");
        }
    }, [clicked])

    return (
        <div>
            <p><button onClick={() => setClicked(true)}>Logout</button></p>
        </div>
    )
}