import React, { useState, useEffect } from "react";
import "../style/Main.css";
import { getUsersAllData } from "../functions";

export default function MainSidebarL({ loginUser }) {
  const [profBool, visibleProf] = useState(false);
  const [check, makeCheck] = useState([]);

  function showProf(){
    if (profBool){
      visibleProf(false);
     } else {
      visibleProf(true);
    }
  }

  useEffect(() => {
    const check = [];
    async function func() {
      const res = await getUsersAllData(loginUser)
      for (let i = 0; i <= 8; i++) {
          check[i] = res[0][i];
      }
      makeCheck(check);
    }
    func();
  },[profBool])

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
          <p><input type="checkbox" disabled checked={check[0]} /> 非同期</p>
          <p><input type="checkbox" disabled checked={check[1]} /> React</p>
          <p><input type="checkbox" disabled checked={check[2]} /> Closure</p>
          <p><input type="checkbox" disabled checked={check[3]} /> Node</p>
          <p><input type="checkbox" disabled checked={check[4]} /> TypeScript</p>
          <p><input type="checkbox" disabled checked={check[5]} /> Express</p>
          <p><input type="checkbox" disabled checked={check[6]} /> Database</p>
          <p><input type="checkbox" disabled checked={check[7]} /> DOM</p>
          <p><input type="checkbox" disabled checked={check[8]} /> knex</p>
        </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
