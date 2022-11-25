import React, { useState, useEffect } from "react";
import "../style/Main.css";
import { getUsersAllData, putUsersData } from "../functions";

export default function MainSidebarL({ loginUser }) {
  const [profBool, visibleProf] = useState(false);
  const [check, makeCheck] = useState([]);

  function showProf(){
    if (profBool){
      visibleProf(false);
      putUsersData(
        loginUser,
        document.getElementById("secC0").checked,
        document.getElementById("secC1").checked,
        document.getElementById("secC2").checked,
        document.getElementById("secC3").checked,
        document.getElementById("secC4").checked,
        document.getElementById("secC5").checked,
        document.getElementById("secC6").checked,
        document.getElementById("secC7").checked,
        document.getElementById("secC8").checked
      );
     } else {
      visibleProf(true);
    }
  }

  useEffect(() => {
    const check = [];
    async function func() {
      const res = await getUsersAllData(loginUser);
      for (let i = 0; i <= 8; i++) {
          check[i] = res[0][i];
      }
      makeCheck(check);
    }
    func();
  },[profBool]);

  return (
    <div className="sideL">
      <input
        type="submit"
        className="prof"
        value="プロフィール"
        onClick={showProf}
      />
      {profBool ? (
        <>
        <div className="profile">
          <p>ユーザー名：{loginUser}</p>
          <p>↓ 教えられること ↓</p>
          <p><label><input id="secC0" type="checkbox" defaultChecked={check[0]} /> 非同期 </label></p>
          <p><label><input id="secC1" type="checkbox" defaultChecked={check[1]} /> React </label></p>
          <p><label><input id="secC2" type="checkbox" defaultChecked={check[2]} /> Closure </label></p>
          <p><label><input id="secC3" type="checkbox" defaultChecked={check[3]} /> Node </label></p>
          <p><label><input id="secC4" type="checkbox" defaultChecked={check[4]} /> TypeScript </label></p>
          <p><label><input id="secC5" type="checkbox" defaultChecked={check[5]} /> Express </label></p>
          <p><label><input id="secC6" type="checkbox" defaultChecked={check[6]} /> Database </label></p>
          <p><label><input id="secC7" type="checkbox" defaultChecked={check[7]} /> DOM </label></p>
          <p><label><input id="secC8" type="checkbox" defaultChecked={check[8]} /> knex </label></p>
        </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
