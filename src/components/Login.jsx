import React from "react";
import "../style/Login.css"

export default function Login({setEntry}) {
    return (
        <>
        <div className="hed">
            Login
        </div>
        <div className="form">
            <input 
                type="text"
                value="User"
                />
            <input 
                type="text"
                value="Password"
                />
            <button
                // onClick={
                    //     console.log("Login")
                    // }
                    > 
                ログイン 
            </button>

            <button
                onClick={() => {
                    setEntry("signin");
                }}
                > 
                新規登録 
            </button>
        </div>
        </>
    );
}