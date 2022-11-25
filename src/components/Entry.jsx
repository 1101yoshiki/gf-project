import React, {useState} from "react";
import Login from "./Login";
import Signin from "./Signin";

export default function Entry({ setScreen, setUser}){

    const [entry,setEntry] = useState("login");
    return (
        <>
        <div className="header">
            <div>Dinder</div>
        </div>
        {
            (entry === "login") ?
            <Login 
                setEntry = {setEntry} 
                setScreen = { setScreen }
                setUser = {setUser}
            /> : 
            <Signin 
                setEntry = {setEntry} 
                setScreen = { setScreen }
            />
        }
        </>
    );
}