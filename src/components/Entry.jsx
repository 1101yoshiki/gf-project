import React, {useState} from "react";
import Login from "./Login";
import Signin from "./Signin";

export default function Entry(){
    
    const [entry,setEntry] = useState("login");
    return (
        <>
        {
            (entry === "login") ?
            <Login setEntry = {setEntry} /> : 
            <Signin setEntry = {setEntry} />
        }
        </>
    );
}