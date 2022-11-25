import React from "react";
import "../style/Login.css"
import "../style/button.css"
import { getUserAndPass } from "../functions";

export default function Login({ setEntry, setScreen, setUser }) {

    return (
        <>
        <div className="hed">
            Login
        </div>
        <div className="form">
            <input 
                className="lo-input"
                id="login-username"
                type="text"
                placeholder="User"
            />
            <input 
                className="lo-input"
                id="login-pass"
                type="text"
                placeholder="Password"
            />

            <div className="warning">
                ユーザー及びパスワードを入力してください
            </div>

            <div className="warning">
                ユーザーが存在しないまたはパスワードが違います
            </div>

            <button
                className="log-btn"
                onClick={()=>{
                    const warNoText = document.getElementsByClassName("warning")[0];
                    const warDiff = document.getElementsByClassName("warning")[1];
                    const userName = document.getElementById("login-username").value;
                    const pass = document.getElementById("login-pass").value;
                    
                    if(userName === "" || pass === ""){
                        warNoText.style.display = "block";
                        warDiff.style.display = "none";
                    }else{
                        getUserAndPass(userName,pass)
                            .then(res => {
                                if(res[0].userName){
                                    setUser(userName);
                                    setScreen("main");
                                }else{
                                    warNoText.style.display = "none";
                                    warDiff.style.display = "block";
                                }
                            });
                    }
                }
                    }
            > 
                ログイン 
            </button>

            <button
                className="log-btn"
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