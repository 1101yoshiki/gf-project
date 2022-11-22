import React from "react"
import "../style/Signin.css"

export default function Signin({setEntry}) {
    return(
        <div>
            <div className="hed">
                Sign in
            </div>
            <input 
                type="text"
                value="User"
            />
            <input 
                type="text"
                value="Password"
            />
            <div className="si-form">
                <input type="checkbox" id="0"/>
                <label for="0"> 非同期 </label>
            </div>

            <div className="si-form">
                <input type="checkbox" id="1"/>
                <label for="1"> React </label>
            </div>

            <div className="si-form">
                <input type="checkbox" id="2"/>
                <label for="2"> Closure </label>
            </div>

            <div className="si-form">
                <input type="checkbox" id="3"/>
                <label for="3"> Node </label>
            </div>

            <div className="si-form">
                <input type="checkbox" id="4"/>
                <label for="4"> Typescript </label>
            </div>

            <div className="si-form">
                <input type="checkbox" id="5"/>
                <label for="5"> Express </label>
            </div>

            <div className="si-form">
                <input type="checkbox" id="6"/>
                <label for="6"> DataBase </label>
            </div>

            <div className="si-form">
                <input type="checkbox" id="7"/>
                <label for="7"> DOM </label>
            </div>

            <div className="si-form">
                <input type="checkbox" id="8"/>
                <label for="8"> knex </label>
            </div>

            <button> 登録 </button>
            <button
                onClick={() => {
                    setEntry("login");
                }}
            > 
                ログイン 
            </button>
        </div>
    );
}