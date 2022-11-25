import React, { useState } from "react";
import Entry from "./Entry";
import Main from "./Main";

export default function Start(){
    const [screen,setScreen] = useState("entry");
    const [loginUser, setUser] = useState("");

    return(
        <>
        {
            (screen === "entry") ?
                <Entry setScreen = {setScreen} setUser={setUser} /> : 
                <Main setScreen = {setScreen} loginUser={loginUser} />
        }
        </>
    );
}