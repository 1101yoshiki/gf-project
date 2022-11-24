import React from "react"
import "../style/Signin.css"
import { addUser, getUser } from "../functions";

export default function Signin({setEntry}) {
    
    return(
        <div>
            <div className="hed">
                Sign in
            </div>
            <div className="si-form">
                <input 
                    id="signup-user"
                    className="si-input"
                    type="text"
                    placeholder="User"
                />
                <input 
                    id="signup-pass"
                    className="si-input"
                    type="text"
                    placeholder="Password"
                    // style="-webkit-text-security:disc"
                />

                <div className="warning">
                    ユーザー及びパスワードを入力してください
                </div>

                <div className="warning">
                    ユーザーが存在しないまたはパスワードが違います
                </div>

                <div className="warning">
                    すでに存在しているユーザーです
                </div>

                <div className="cell-group">
                    <div className="cell">
                        <input type="checkbox" className="checkbox" id="0"/>
                        <label for="0"> 非同期 </label>
                    </div>

                    <div className="cell">
                        <input type="checkbox" className="checkbox" id="1"/>
                        <label for="1"> React </label>
                    </div>

                    <div className="cell">
                        <input type="checkbox" className="checkbox" id="2"/>
                        <label for="2"> Closure </label>
                    </div>

                    <div className="cell">
                        <input type="checkbox" className="checkbox" id="3"/>
                        <label for="3"> Node </label>
                    </div>

                    <div className="cell">
                        <input type="checkbox" className="checkbox" id="4"/>
                        <label for="4"> Typescript </label>
                    </div>

                    <div className="cell">
                        <input type="checkbox" className="checkbox" id="5"/>
                        <label for="5"> Express </label>
                    </div>

                    <div className="cell">
                        <input type="checkbox" className="checkbox" id="6"/>
                        <label for="6"> DataBase </label>
                    </div>

                    <div className="cell">
                        <input type="checkbox" className="checkbox" id="7"/>
                        <label for="7"> DOM </label>
                    </div>

                    <div className="cell">
                        <input type="checkbox" className="checkbox" id="8"/>
                        <label for="8"> knex </label>
                    </div>
                </div>

                <button 
                className="log-btn"
                onClick={() => {
                    const checkBoxes = document.getElementsByClassName("checkbox");
                    const userName = document.getElementById("signup-user").value;
                    const pass = document.getElementById("signup-pass").value;
                    // console.log(checkBoxes[0].checked)
                    const warNoText = document.getElementsByClassName("warning")[0];
                    const warDiff = document.getElementsByClassName("warning")[1];
                    const warDup = document.getElementsByClassName("warning")[2];

                    if(userName === "" || pass === ""){
                        warNoText.style.display = "block";
                        warDiff.style.display = "none";
                        warDup.style.display = "none";

                    }else{
                        getUser(userName).then(res => {
                            if(!res[0].userName){
                                addUser(
                                    userName,
                                    pass,
                                    checkBoxes[0].checked,
                                    checkBoxes[1].checked,
                                    checkBoxes[2].checked,
                                    checkBoxes[3].checked,
                                    checkBoxes[4].checked,
                                    checkBoxes[5].checked,
                                    checkBoxes[6].checked,
                                    checkBoxes[7].checked,
                                    checkBoxes[8].checked,
                                );
                                setEntry("login");
                            }else{
                                warDup.style.display = "block";
                                warNoText.style.display = "none";
                                warDiff.style.display = "none";
                            }
                        })
                    }
                    console.log("signUp")
                }}
                > 
                    登録 
                </button>
                <button
                    className="log-btn"
                    onClick={() => {
                        setEntry("login");
                    }}
                > 
                    ログイン 
                </button>
            </div>    
        </div>
    );
}